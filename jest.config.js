module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: [
        '/node_modules',
        '/dist',
    ],
    globals: {
        'ts-jest': {
            tsConfig: './tsconfig.jest.json',
        },
    },
    setupFiles: [
        './jest.init.js',
    ],
    moduleNameMapper: {
        "@app/(.*)": "<rootDir>/src/$1"
    }
};