const { exec } = require('child_process');
const util = require('util');
const fs = require('fs');
const promisifiedExec = util.promisify(exec);

require('dotenv').config();

const BASE_URL = process.env.VITE_API_BASE_URL;

async function generateClient(url) {
  const regex = /\/([^/]+)\/openapi.json/;
  const match = url.match(regex);

  const command = `yarn openapi-typescript ${BASE_URL}${url}/openapi.json --output src/shared/api/types/${match[1]}.ts && eslint src/shared/api/types/${match[1]}.ts --fix`;

  try {
    const { stdout, stderr } = await promisifiedExec(command);
    console.log(`Generation successful for ${url}`);
  } catch (error) {
    console.error(`Error generating code for ${url}: ${error.message}`);
  }
}

async function main() {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const API_URLS = packageJson.config.openapiUrls;

    // Create an array of Promises by mapping the API_URLS to the generateClient function
    const promises = API_URLS.map((url) => generateClient(url));

    // Use Promise.all to execute all promises concurrently
    await Promise.all(promises);
  } catch (error) {
    console.error('Error reading package.json:', error.message);
  }
}

main();
