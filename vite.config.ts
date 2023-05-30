/*
 * @Description: 
 * @Author: 
 * @Date: 2023-05-29 13:55:47
 * @LastEditTime: 2023-05-30 16:03:14
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import resolve from '@rollup/plugin-node-resolve'
import path from 'path'

// 配置vant全局引入
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

const projectRootDir = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 读取env文件中内容
  const env = loadEnv(mode, process.cwd(), 'HT_')
  return {
    // 设置访问常量前缀
    envPrefix: 'HT_',
    plugins: [
      vue(),
      resolve(),
      Components({
        resolvers: [VantResolver()]
      })
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(projectRootDir, 'src')
        }
      ]
    },
    server: {
      proxy: {
        '/api': {
          target: env.HT_BASE_URL,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, '')
        }
      }
    },
    // 预加载
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/common.scss";`,
        }
      }
    }
  }
})
