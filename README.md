# Cypress Automation Framework

- Run cypress: node_modules/.bin/cypress open
- Trigger test suite in headless mode: ./node_modules/.bin/cypress run
- Trigger test suite in non headless mode (it'll run in electron by default): ./node_modules/.bin/cypress run --headed
- Trigger test suite in chrome non headless mode: ./node_modules/.bin/cypress run --browser chrome
- Trigger individual tests: ./node_modules/.bin/cypress run --spec cypress/integration/../*
- Activate cypress dashboard and record test executions (or in CI): cypress run --record --key e98031fe-5dce-4cf9-a522-c897e9ae8b88
