const sayHello  = function () {
    console.log("Hello, world");
  }
  
  sayHello();

  const sayHelloToConsole  = function (name) {
    console.log("Hello, " + name);
  }
  sayHelloToConsole('John'); 

  
  const returnSayHello  = function (name) {
    return "Hello, " + name;
  }
  const greeting = returnSayHello('John');