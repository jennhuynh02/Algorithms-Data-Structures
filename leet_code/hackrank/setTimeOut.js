function print() {
  setTimeout(function () {
    setTimeout(function () {
      setTimeout(function () {
        console.log("my")
      }, 0);
      console.log("name")
    }, 1);
     console.log("is")
  }, 2);
   console.log("Tommy")
}

console.log(print());