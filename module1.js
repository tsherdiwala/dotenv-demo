const doSomething = function(){
    console.log('This is doing something',process.env.MYSQL_URL);
}

module.exports = {
    doSomething
}