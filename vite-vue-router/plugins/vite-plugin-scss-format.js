const vueRE = /\.vue$/;
const scssRE = /\.scss$/;


// 参考：https://blog.csdn.net/qq_34621851/article/details/123535975
export default function scssFormatPlugin() {
  return {
    // 插件名称
    name: 'vite:scssFormat',

    // 该插件在 plugin-vue 插件之前执行，这样就可以直接解析到原模板文件
    enforce: 'pre',

    // 代码转译，这个函数的功能类似于 `webpack` 的 `loader`
    transform(code, id, opt) {
      // if (!vueRE.test(id) || !scssRE.test(code)) return code;
      if (!vueRE.test(id) && !scssRE.test(id)) {
        return code
      }

      console.log(id)//, code, replaceDeep(code))
      return replaceDeep(code);

    }
  }
}

// 新架子用的dart-sass 
// 这里将/deep/ 转为::v-deep
const replaceDeep = (code) => {
  return code.replace(/\/deep\//g, '::v-deep')
}
