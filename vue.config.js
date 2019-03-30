module.exports = {
    devServer: {
        'proxy': {
            '/ajax': {
                target: 'http://m.maoyan.com',
                changeOrigin: true
            },
            '/movie': {
                target: 'http://m.maoyan.com',
                changeOrigin: true
            }
        }
    }
}