module.exports = {
  '*.{ts,tsx}': (filenames) => {
    return [
      `yarn tslint`,
      `vitest related --run ${filenames.join(' ')}`,
      `eslint --fix ${filenames.join(' ')}`,
      `prettier --write ${filenames.join(' ')}`,
    ];
  },
};
