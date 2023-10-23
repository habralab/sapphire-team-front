module.exports = {
  '*.{ts,tsx}': (filenames) => {
    return [`vitest related --run ${filenames.join(' ')}`];
  },
};
