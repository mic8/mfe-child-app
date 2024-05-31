const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
    path.join(__dirname, 'tsconfig.json'),
    []);

module.exports = {
    output: {
        uniqueName: "mfe-child-app",
        publicPath: "auto"
    },
    optimization: {
        runtimeChunk: false
    },
    resolve: {
        alias: {
            ...sharedMappings.getAliases(),
        }
    },
    experiments: {
        outputModule: true
    },
    plugins: [
        new ModuleFederationPlugin({
            library: {type: "module"},

            name: "mfe-child-app",
            filename: "remoteEntry.js",
            exposes: {
                './MfeIndexPageModule': './src/app/modules/pages/index/index.module.ts',
                './MfeProfilePageModule': './src/app/modules/pages/profile/profile.module.ts',
                './MfeLandingPageModule': './src/app/modules/pages/landing/landing.module.ts',
            },

            shared: share({
                "@angular/core": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
                "@angular/common": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
                "@angular/common/http": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
                "@angular/router": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
                "@angular/forms": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
                ...sharedMappings.getDescriptors()
            })

        }),
        sharedMappings.getPlugin()
    ],
};
