const usernameValidity = (username) => /^[a-z0-9_.]{8,12}$/.test(username);

const passwordValidity = (password) => /(?=^.{9}$)(?=.*\d)([a-zA-Z])(?=.*\W)(?!.*\s).*$/.test(password);

console.log(usernameValidity("john.smith"));
console.log(usernameValidity("johnsmith26"));
console.log(usernameValidity("JOHNsmith"));
console.log(passwordValidity("j0hn5m!th"));