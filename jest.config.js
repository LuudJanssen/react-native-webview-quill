module.exports = {
  preset: 'react-native',
  transform: {
    '.*.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
};
