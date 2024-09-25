// jest.config.ts
import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Setup file to configure the testing environment
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		// Handle CSS modules
		'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
		// Handle static assets (images, etc.)
		'^.+\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.ts',
	},
};

module.exports = createJestConfig(config);
