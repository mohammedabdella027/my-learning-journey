function myMultiplier (x) {
    // return 3 times of the parameter
    return x * 3;
};
myMultiplier();

console.log(myMultiplier(4));

// exporting
module.exports.myMultiplier = myMultiplier;