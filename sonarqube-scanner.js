const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "https://2810-119-160-100-81.ngrok.io",
        token: "90b039427b8023003b8eead81ad2f73bb0a15c2b",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
