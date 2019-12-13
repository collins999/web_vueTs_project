const path = require("path");
// 拼接路径
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    publicPath: "/",
    // 是否在保存的时候检查
    lintOnSave: true,
    // 构建输出目录
    outputDir: "htdocs",
    // 静态文件输出目录
    assetsDir: "newAms",
    // webpack-dev-server 相关配置
    devServer: {
        open: true,
        host: "127.0.0.1",
        port: 8080,
        https: false,
        hotOnly: false,
        disableHostCheck: true,
        proxy: null,
        inline: true,
        before: app => {}
    },
    pages: {
        main: {
            entry: "source/main.ts",
            template: "public/index.html",
            filename: "index.html"
        }
    },
    // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    productionSourceMap: false,
    // webpack 设置
    chainWebpack: config => {
        // image
        const imagesRule = config.module.rule("images");
        imagesRule
            .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
            .exclude.add(resolve("source/assets/svg-icons/icons"))
            .end();
        // vue
        const vueRule = config.module.rule('vue');
        vueRule
            .test(/\.vue$/)
            .use('vue-loader')
            .loader('vue-loader')
            .end();
        // 重新设置 alias
        config.resolve.alias
            .set("assets", resolve("source/assets"))
            .set("common", resolve("source/common"))
            .set("components", resolve("source/components"))
            .set("views", resolve("source/views"));
        // babel-polyfill 加入 entry
        const entry = config.entry("app");
        entry.add("babel-polyfill").end();
    },

    // 使用多线程
    parallel: require('os').cpus().length > 1,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false,
        loaderOptions: {}
    },
    // 第三方插件配置
    pluginOptions: {
        parser: "babel-eslint"
    }
};