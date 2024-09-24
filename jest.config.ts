export default {
    moduleNameMapper: {
        '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.ts',
    },
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',  // Make sure this points to the installed package
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
