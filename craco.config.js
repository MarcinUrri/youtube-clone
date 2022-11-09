const path = require(`path`)

module.exports = {
    webpack: {
        alias: {
            "@cssVariables": path.resolve(__dirname, "src/styles/cssVariables"),
        },
    },
}
