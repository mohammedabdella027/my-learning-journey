console.log("My first module");

function myMultiplier (x) {
    // return 2 times of the parameter
    return x * 2;
};
myMultiplier();

console.log(myMultiplier(4));

// exporting
module.exports.myMultiplier = myMultiplier;