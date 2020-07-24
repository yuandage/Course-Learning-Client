// All configuration item explanations can be find in https://cli.vuejs.org/config/

// const url = 'http://localhost:9000'
const url = 'http://192.168.1.10:9000/'

module.exports = {
  // 输出文件目录
  outputDir: './docker/dist',
  // 配置转发代理
  devServer: {
    disableHostCheck: true,
    port: 8000,
    proxy: {
      '/resource/download': {
        target: url,
        changeOrigin: true,
        secure: false
      }
    }

  }
}
