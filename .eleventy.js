const yaml = require("js-yaml");

module.exports = config => {
    
    // Disable automatic use of your .gitignore
    config.setUseGitIgnore(false);

    // Merge data instead of overriding
    config.setDataDeepMerge(true);

    // To Support .yaml Extension in _data
    config.addDataExtension("yaml", (contents) =>
        yaml.safeLoad(contents)
    );

    // Add Tailwind Output CSS as Watch Target
    config.addWatchTarget("./_tmp/static/css/style.css");

    // Copy Static Files to /docs
    config.addPassthroughCopy({
    "./_tmp/static/css/style.css": "./static/css/style.css",
    "./node_modules/alpinejs/dist/alpine.js": "./static/js/alpine.js"
    });

    // Copy Image Folder to /docs
    config.addPassthroughCopy("./src/static/img");

    // Copy favicon to route of /docs
    config.addPassthroughCopy("./src/favicon.ico");

    return {
        dir: {
            input: 'src',
            output: 'docs'
        }
    };
};