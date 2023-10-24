module.exports = {
  'src/**/*.{ts,tsx}': (filenames) => {
    return [`vitest related --run ${filenames.join(' ')}`];
  },
};
