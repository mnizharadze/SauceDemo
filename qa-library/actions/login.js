// Login actions
const users = require('../test-data/users.json');

function loginWithCredentials(userKey, passwordOverride) {
    const user = users[userKey];
    const password = passwordOverride || user.password;
    // Example Playwright code:
    // await page.fill('#user-name', user.username);
    // await page.fill('#password', password);
    // await page.click('#login-button');
}

function loginAsStandardUser() {
    loginWithCredentials('standard');
}

function loginAsLockedUser() {
    loginWithCredentials('locked');
}

module.exports = { loginWithCredentials, loginAsStandardUser, loginAsLockedUser };
