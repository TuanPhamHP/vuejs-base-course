// Async/Await
// FILE JS được đọc từ trên xuống .
// JS được chạy mặc định là đồng bộ

console.log(1);
console.log(2);
try {
  console.log(a); // break do error
} catch (error) {
  console.log(error);
}
console.log(3);

// đồng bộ - bất đồng bộ.

// setTimeout(() => {
//   console.log("Mua gạo");
// }, 2000);
// console.log("Cắm cơm");

// Promise : thành công, thất bại.
// trạng thái 1 : đang thực hiện  -  Pending
// trạng thái 2 : đã xong  -  Fill - 2 trạng thái nhỏ : thành công - thất bại.

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      const status = " thành công";
      resolve("Mua gạo" + status);
    } else {
      const status = " thất bại";
      reject("Mua gạo" + status);
    }
  }, 2000);
});

p.then(
  res => {
    console.log(res);
    console.log("Cắm cơm thành công");
    return "Cắm cơm thành công";
  },
  err => {
    console.log(err);
    console.log("Cắm cơm thất bại");
    return "Cắm cơm thất bại";
  }
).then(res2 => {
  console.log(x);
  console.log("Tôi đã " + res2);
});

// cho 1 mảng n phần tử . in ra mỗi phần tử trong 1 giây.

// VD [1,'a','b','c']
// => sẽ in mất 4 giây

// xử lý api + async await
