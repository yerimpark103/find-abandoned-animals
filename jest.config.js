const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // 각각의 테스트 전에 실행할 모듈을 경로
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // tsconfig에서 절대경로 사용 시에 jest가 인식하도록 경로 매핑
  },
};

module.exports = createJestConfig(customJestConfig);
