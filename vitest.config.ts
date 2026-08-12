import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    env: {
      BASE_URL: '/',
    },
  },
});
