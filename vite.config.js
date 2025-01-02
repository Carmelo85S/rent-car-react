import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {    
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  base: mode === 'production' ? '/react-ride-ready-rent-a-car' : '/',
}));
