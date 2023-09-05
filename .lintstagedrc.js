module.exports = {
  '*.{ts,tsx}': (filenames) => {
    return [
      `yarn tslint`,
      `vitest related --run ${filenames.join(' ')}`,
      `yarn eslint --fix ${filenames.join(' ')}`,
      `yarn prettier --write ${filenames.join(' ')}`,
    ];
  },
};
