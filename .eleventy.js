const yaml = require("js-yaml");

module.exports = config => {

    // To Support .yaml Extension in _data
    config.addDataExtension("yaml", (contents) =>
        yaml.safeLoad(contents)
    );

    // Add Tailwind Output CSS as Watch Target
    config.addWatchTarget("./_tmp/static/css/style.css");

    // Copy Static Files to /_Site
    config.addPassthroughCopy({
    "./_tmp/static/css/style.css": "./static/css/style.css",
    "./node_modules/alpinejs/dist/alpine.js": "./static/js/alpine.js"
    });

    // Copy Image Folder to /_site
    config.addPassthroughCopy("./src/static/img");

    // Copy favicon to route of /_site
    config.addPassthroughCopy("./src/favicon.ico");

    return {
        dir: {
            input: 'src',
            output: '_site'
        }
    };
};