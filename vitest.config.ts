import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['test/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      reporter: ['text', 'lcov'],
    },
  },
  plugins: [react()],
})
