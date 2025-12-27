// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bharxhav.github.io',
  base: '/crosssections',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  }
});
