const vueRE = /\.vue$/;
const jsRE = /\.js$/;


export default function ieIgnoreFormatPlugin() {
  return {
    // 插件名称
    name: 'vite:ieIgnoreFormat',

    // 该插件在 plugin-vue 插件之前执行，这样就可以直接解析到原模板文件
    enforce: 'pre',

    // 代码转译，这个函数的功能类似于 `webpack` 的 `loader`
    transform(code, id, opt) {
      if (!vueRE.test(id) && !jsRE.test(id)) {
        return code
      }

      // console.log(id , replaceIeIgnore(code))
      return replaceIeIgnore(code)

    }
  }
}

// // ie-ignore-s
//  要被移除的代码
// // ie-ignore-e
const replaceIeIgnore = (txt) => {
  return txt.replace(/\/\/ ie-ignore-s[\s\S]*?\/\/ ie-ignore-e/g, '') 
}
