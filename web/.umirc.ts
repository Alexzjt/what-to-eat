import {defineConfig} from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    mobile: false
  },
  fastRefresh: {},
  styles: [`html { touch-action: manipulation; }`, `#root {height: 100%;}`],
});
