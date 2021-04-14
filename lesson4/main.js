// //
// // đầu vào :  cho 1 object và 1 key (mặc định key luôn là string và object luôn là dạng object)
// // yêu cầu : tạo 1 function tên hasKey(_param1, _param2) . _param1 : key , _param2 object
// // đầu ra : nếu object chứa key thì in ra màn hình giá trị của key . còn không thì in ra màn hình là : 'không tìm thấy trường này'

// // vd : hasKey('name',{age : 24}) ->  'không tìm thấy trường này'
// // vd : hasKey('age',{age : 24}) ->  24

// // let user = {
// //   name : 'Tuan',
// //   logName(){
// //     console.log(this.name);
// //   }
// // }

// // function hasKey(_key, _object) {
// //   let a = 1;
// //   if (true) { // block code .
// //     a = 2;
// //   }
// //   console.log(a);
// //   _object.hasOwnProperty(_key) ? console.log(_object[_key]) : console.log("không tìm thấy trường này");

// // }
// // a = true -> thực hiện/ trả ra b và bỏ qua c . Và ngược lại
// // hasKey(3, { a: 1, b: 2, 3: "c" });
// // hoisting

// // const hasKey = () => {
// //   console.log("trigger function");
// // };

// // c2 :  có mấy loại giá trị của 1 biến trong js
// // value :  ref

// // a= 1
// // a ='a'
// // a= null
// // a = 2

// // b = {}
// // b = []
// // b = [1,2,3]

// // x -> [1,2,3]
// // gọi b -> x -> [1,2,3,4,5,6]
// // a = []
// // b= [...a]
// // muteable , immuteable

// // state -> re-rendering

// let ar = [];
// // vd : 1 instance {
// //   id : unique,
// //   text : chứa nội dung
// // }
// document.querySelector("#myForm").addEventListener("submit", e => {
//   e.preventDefault();
//   let target = document.querySelector("#input");
//   let list = document.querySelector("#list-wrapper");
//   let value = target.value;
//   target.value = "";
//   ar.push({
//     text: value,
//     id: new Date().getTime(), // number
//   });
//   let txt = "";
//   ar.forEach(item => {
//     txt += `<p>${item.text} <button class="btn-remove" target-id="${item.id}">Xóa</button></p>`;
//   });

//   list.innerHTML = txt;

//   let btnArr = [...document.querySelectorAll(".btn-remove")];
//   btnArr.forEach(item => {
//     item.addEventListener("click", e => {
//       let idTarget = e.target.getAttribute("target-id"); //  string
//       ar.splice(
//         ar.findIndex(o => {
//           return o.id == idTarget;
//         }),
//         1
//       );
//     });
//   });
// });

// // c1 : từ mảng ban đầu . tạo ra 1 mảng mới chứa các phần tử có id # id-target . sau đó gán lại cho mảng ban đầu . immuteable
// // c2 : tại mảng ban đầu tiến hành xóa phần tử có id === id-target  muteable

// // b1 : tạo 1 mảng rỗng [] .
// // b2 : lặp qua từng phần tử trong mảng ban đầu . nếu functiont trả ra true -> push vào mảng b1 . không thì pass

// let logInfo = (_a, _b) => {
//   console.log("bien thu 1 la " + _a + " bien thu 2 la " + _b);
//   console.log(`bien thu 1 la ${_a} bien thu 2 la ${_b}`);
// };
