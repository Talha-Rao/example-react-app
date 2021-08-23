const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "https://34f4-116-0-54-66.ngrok.io",
        token: "90b039427b8023003b8eead81ad2f73bb0a15c2b",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
