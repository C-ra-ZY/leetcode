function Foo() {
  getName = function () {
    console.log(1);
  };
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(4);
};
function getName() {
  console.log(5);
}
//请写出以下输出结果：
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();

/* 2
   4
   1
   1
   2
   3
   3
 */
console.log("1");
setTimeout(function () {
  console.log("2");
  process.nextTick(function () {
    console.log("3");
  });
  new Promise(function (resolve) {
    console.log("4");
    resolve();
  }).then(function () {
    console.log("5");
  });
});
process.nextTick(function () {
  console.log("6");
});
new Promise(function (resolve) {
  console.log("7");
  resolve();
}).then(function () {
  console.log("8");
});
setTimeout(function () {
  console.log("9");
  process.nextTick(function () {
    console.log("10");
    new Promise(function (resolve) {
      console.log("11");
      resolve();
    }).then(function () {
      console.log("12");
    });
  });
});

/*  1
    7
    6
    8
    2
    4
    9
    3
    10
    11
    5
    12 
*/