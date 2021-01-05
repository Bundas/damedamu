const withTM = require("next-transpile-modules")(["shared"]) // pass the modules you would like to see transpiled

module.exports = withTM()
