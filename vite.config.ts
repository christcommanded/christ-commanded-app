import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';

function optimizeSvgAssets(): PluginOption {
  return {
    name: 'optimize-svg-assets',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      for (const asset of Object.values(bundle)) {
        if (asset.type !== 'asset' || !asset.fileName.endsWith('.svg')) {
          continue;
        }

        const source = typeof asset.source === 'string' ? asset.source : asset.source?.toString();
        if (!source) {
          continue;
        }

        const optimized = source
          .replace(/<!--.*?-->/g, '')
          .replace(/>\s+</g, '><')
          .replace(/\s{2,}/g, ' ')
          .replace(/\s*(\r?\n)\s*/g, '');

        asset.source = optimized;
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), optimizeSvgAssets()],
});
