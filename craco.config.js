const path = require('path');

module.exports = {
    webpack: {
        alias: {
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@component': path.resolve(__dirname, 'src/component'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@api': path.resolve(__dirname, 'src/api'),
        }
    },
};