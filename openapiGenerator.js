const { spawn } = require('child_process');
const fs = require('fs');

function generateClient(url) {
  const regex = /\/([^/]+)\/openapi.json/;
  const match = url.match(regex);

  const yarnPath = 'node .yarn/releases/yarn-3.6.3.cjs'; // Replace with the actual path to the "yarn" executable
  const args = [
    'openapi-typescript',
    '-i',
    url,
    '-o',
    `src/shared/api/types/${match[1]}`,
  ];

  const childProcess = spawn(yarnPath, args);

  // Handle standard output data
  childProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  // Handle standard error data
  childProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  // Handle process exit
  childProcess.on('close', (code) => {
    if (code === 0) {
      console.log(`Generation successful for ${url}`);
    } else {
      console.error(`Error generating code for ${url}, exit code: ${code}`);
    }
  });
}

async function main() {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const API_URLS = packageJson.config.openapiUrls;

    for (const url of API_URLS) {
      generateClient(url);
    }
  } catch (error) {
    console.error('Error reading package.json:', error.message);
  }
}

main();
