// const a = {
//   key : value,
//   da_bong : function(){}
// }

// a.da_bong()
// là 1 methods

// primitive : String, Number, Boolean ...
// String = ''
// Number = 0
// Boolean : true | false
// {},[]

let obj1 = {
  // reference
  a: null,
  b: null,
};

let obj3 = {};

let obj2 = Object.assign({}, obj1);

// spread

// obj2 = { b: 3, ...obj1 };

obj2.a = 3;

// p1 : target - là object cần copy
// p2 : source - là object chứa giá trị cần copy
// lấy địa chỉ ô nhớ của p1 và sau đó + thêm giá trị của p2

// hasOwnProperty(param) - param : key

// entries
// console.log(obj2);
// console.log(Object.entries(obj3));

// lấy mảng keys || mảng value
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));

// for
// forin
// forof
// for (const key in obj1) {
//   // if (Object.hasOwnProperty.call(object, key)) {
//   //   const element = object[key];

//   // }
//   console.log(key);
// }

// Array

let a = [1, 2, 3];

let c = null;
let b = a;

b = [...a, ...a];

let array = [{ a: 1 }, null, { a: 2 }, [1, 2, 3], "a", "zxc", "a"];

// includes - là 1 methods trả ra 1 giá trị Boolean
// console.log(array.includes("a")); -> true
// console.log(array.includes({ a: 1 }));
// let idx = array.indexOf("a"); -> sử dụng để tìm kiếm phần tử thuộc dạng primitive
// let idx = array.indexOf("a", 5);
// let idx2 = array.findIndex(o => {
//   return o.a === 1;
// });
// array[idx2].a = 99;
// console.log(array);

// console.log(idx);
// console.log(idx2);

// push
// concat
// pop
// splice
let zxc = "giá trị cuối";
let newObj = { a: 1, description: "Đã được update" };
console.log(array);
// let idx2 = array.findIndex(o => {
//   return o.a === 1;
// });
// let rest = array.splice(array.length - 1, 1);
// truyền vào 2 biến : xóa/ cắt phẩn tử khỏi mảng ban đầu và trả ra chính phần bị cắt đó
// biến đầu tiền : vị trí bắt đầu cắt
// biến thứ 2 : số lượng cắt
// biến thứ 3 : phần đền bù
// phạm vi sử dụng : update Data client. dùng để thêm phần tử tại vị trí thứ n

// pop : là 1 methods giúp xóa phần tử cuối của mảng trả ra chính phần tử đó
let fe = array.forEach((o, o2, o3) => {
  // o - item hiện tại
  // o2 - index của item hiện
  // o3 - mảng gốc
  // thêm mới, update
  // tránh việc làm thay đổi độ dài mảng trong foreach
});
// -> không trả ra gì cả
// map
let fm = array.map((o, o2, o3) => {
  // o - item hiện tại
  // o2 - index của item hiện
  // o3 - mảng gốc
  // thêm mới, update
  // tránh việc làm thay đổi độ dài mảng trong foreach
  return !!o;
});
// -> trả ra 1 mảng mới có độ dài = mảng thực hiện map

// Boolean('a') ->

// console.log(rest, "rest");
console.log(fe);
console.log(fm);
