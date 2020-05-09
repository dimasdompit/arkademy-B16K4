const usernameValidity = (username) => /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[\W|_])(?=.*[=]).{8,}$/.test(username);

console.log(usernameValidity("john.smith"));
console.log(usernameValidity("johnsmith26"));
console.log(usernameValidity("JOHNsmith"));
console.log(usernameValidity("j0hn5m!th"));