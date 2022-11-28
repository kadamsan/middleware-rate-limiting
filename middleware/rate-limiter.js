const ExpressBrute = require('express-brute');
let store = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production
  
function bruteforce(namespace, freeRetries, minWait) {  

  return function (req, res, next) {
    // Implement the middleware function based on the options object
    //console.log('bruteforce LOGGED')
    //console.log('bruteforce namespace -> ', namespace);
    //console.log('freeRetries -> ', freeRetries);
    //console.log('minWait -> ', minWait);

    let userBruteforce = new ExpressBrute(store, {
	    freeRetries: freeRetries,
    	minWait: minWait    	
    });
    userBruteforce.prevent;    
    next();
  }
}

module.exports = {
bruteforce
}