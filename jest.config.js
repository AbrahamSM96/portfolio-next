module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],

  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@pages(.*)$": "<rootDir>/src/pages$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@styles(.*)$": "<rootDir>/src/styles$1",
    "^@context(.*)$": "<rootDir>/src/context$1",
    "^@i18n(.*)$": "<rootDir>/src/i18n$1",
    "\\.(css|scss)$": "<rootDir>/src/__test__/__mocks__/styleMock.js",
  },
  testEnvironment: "jsdom",
};
