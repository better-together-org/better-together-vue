module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/unit/**/*.spec.[jt]s?(x)'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': '@vue/vue2-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/tests/unit/__mocks__/fileMock.js',
  },
  snapshotSerializers: ['jest-serializer-vue'],
}
