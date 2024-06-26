import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const env = loadEnv('development', process.cwd(), '');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@enums': path.resolve(__dirname, './src/enums'),
      '@features': path.resolve(__dirname, './src/features'),
      '@hocs': path.resolve(__dirname, './src/hocs'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
      '@models': path.resolve(__dirname, './src/models'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@store': path.resolve(__dirname, './src/store'),
      '@style': path.resolve(__dirname, './src/style'),
      '@types': path.resolve(__dirname, './src/types'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@validations': path.resolve(__dirname, './src/validations')
    }
  },
  server: {
    open: true
  },
  plugins: [react()]
});
