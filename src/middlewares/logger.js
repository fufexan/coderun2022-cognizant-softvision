module.exports = function logger(endpoint, msg) {
    let today = new Date();
    let date = today.toISOString();
    console.log(date, '-', endpoint, '-', msg);
}
