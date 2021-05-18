function outer(){
  var num=0;//内部变量
  return function add() {//通过return返回add函数，就可以在outer函数外访问了
    num++;//内部函数有引用，作为add函数的一部分了
    console.log(num);
  };
 }
var func1=outer();
func1();//实际上是调用add函数， 输出1
func1();//输出2 因为outer函数内部的私有作用域会一直被占用
var func2=outer();
func2();// 输出1  每次重新引用函数的时候，闭包是全新的。
func2();// 输出2  