const examArray = [1, 3, 4, 10, 9, 8, 99];
const examArraySecond = [
  {
    id: 1,
    created_at: new Date().getTime() - 60 * 60 * 1000,
    name: "Chuột Razer",
    price: 1000000,
  },
  {
    id: 3,
    created_at: new Date().getTime() - 6 * 60 * 60 * 1000,
    name: "Màn hình Razer KB01",
    price: 14000000,
  },
  {
    id: 2,
    created_at: new Date().getTime() - 2 * 60 * 60 * 1000,
    name: "Phím Razer SL02",
    price: 4000000,
  },

  {
    id: 4,
    created_at: new Date().getTime() - 8 * 60 * 60 * 1000,
    name: "Keycap Razer KB01",
    price: 1200000,
  },
];
// console.log(examArray);

// examArray.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (a < b) {
//     return 1;
//   }
//   return 0;
// });

// nếu return -1 thì a và b sẽ giữ nguyên vị trí
// nếu return 1 thì a và b sẽ đảo vị trí
// nếu return 0 thì a và b sẽ giữ nguyên vị trí
// => BTVN : -1 và 0 khác nhau ở đâu. và có khác 3 giá trị trên được không ?
// sort có làm thay đổi mảng ban đầu ( vậy là dạng muteable hay immuteable )

// -- với mảng số 2
// console.log(examArraySecond, "mảng gốc");

// const sortByPriceGreater = (a, b) => {
//   if (a.price > b.price) {
//     return -1;
//   }
//   if (a.price < b.price) {
//     return 1;
//   }
//   return 0;
// };

// const sortByFieldName = (a, b, field = null) => {
//   if (!field) {
//     return 0;
//   }
//   if (a[field] > b[field]) {
//     return -1;
//   }
//   if (a[field] < b[field]) {
//     return 1;
//   }
//   return 0;
// };
// sort theo giá cả.
// const newArr = [...examArraySecond];

// console.log(newArr.sort, "mảng sau sort");
// console.log(examArraySecond, "mảng sau sort created at");
// console.log(
//   newArr.sort((a, b) => {
//     return sortByFieldName(a, b, "name");
//   }),
//   "name"
// );

// some, every

// some : trả ra giá trị Boolean. Trả ra true nếu ít nhất 1 phần tử trả ra true với method - Trả ra true nếu ít nhất 1 phần tử thỏa mãn điều kiện. Dừng ở ngay phần tử đầu tiên thỏa mãn
// every : trả ra giá trị Boolean. Trả ra true nếu toàn bộ phần tử trả ra true với method - Trả ra true nếu toàn bộ phần tử thỏa mãn điều kiện. Dừng ở ngày phần tử đầu tiên không thỏa mãn

// kiểm tra xem có bất cứ phần tử nào > 50 trong mang examArray hay không
// vd1 : dùng some

// const valid = examArray.some(o => o > 50);
// console.log(valid, "valid");
// if (valid) {
//   console.log("mảng có phần tử > 50");
// } else {
//   console.log("mảng không có phần tử > 50");
// }

// (p1,p2,p3)=>{
//   //blockcode
// }
// chỉ có 1 biến đầu vào
// p=>{
//   //blockcode
// }
// chỉ return rồi kết thúc
// (p1,p2,p3)=>{
//   return a
// }
// p => a

// vd2 : dùng every

// const valid = examArray.every(o => {
//   console.log(o);
//   return o < 50;
// });
// console.log(valid, "valid");
// if (valid) {
//   console.log("mảng không có phần tử > 50");
// } else {
//   console.log("mảng có phần tử > 50");
// }
