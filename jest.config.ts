import type { InitialOptionsTsJest } from 'ts-jest/dist/types';
import { pathsToModuleNameMapper } from 'ts-jest/utils';

const config: InitialOptionsTsJest = {
  clearMocks: true,
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(
    {
      '@/*': ['src/*'],
    },
    {
      prefix: '<rootDir>',
    },
  ),
};

export default config;
