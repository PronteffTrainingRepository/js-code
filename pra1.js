var ad = (function () {
  var a = 0;
  console.log("hello i am in add function");
  return function () {
    return ++a;
  };
})();
console.log(ad());
