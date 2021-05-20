// 1 mảng bất kì
// cứ mỗi 1 giây thì in 1 phần tử .

// - API :

// FE - BE

const array = [1, 2, 3, "a", "llalala"];

// for (let i = 0; i < array.length; i++) {
//   const fakeApiResponseTime = Math.floor(Math.random() * 5000);
//   setTimeout(() => {
//     console.log(array[i]);
//   }, fakeApiResponseTime * i);
// }

// BẤT ĐỒNG BỘ
// BẤT ĐỒNG BỘ => ĐỒNG BỘ.

// BÀI TOÁN CHỌN ĐỊA CHỈ .
// QUỐC GIA -> THÀNH PHỐ -> QUẬN HUYỆN -> XÃ -> ....

const logBySever = _params => {
  // giả vờ xử lý phía sever
  return new Promise((resolve, reject) => {
    const fakeApiResponseTime = Math.floor(Math.random() * 2000);
    setTimeout(() => {
      const a = _params + " da xu li qua sever" + ` sau ${fakeApiResponseTime} ms`;
      return resolve(a);
    }, fakeApiResponseTime);
  });
};

// -> fullfil -> response
const handleFakeCallApi = idx => {
  return new Promise((resolve, reject) => {
    logBySever(array[idx])
      .then(
        res => {
          console.log(res, "được console từ hàm thứ 2");
          if (idx < array.length) {
            return handleFakeCallApi(idx + 1);
          }
        },
        err => {
          console.log(err, "đây là error");
        }
      )
      .then(() => {
        resolve("ket thuc mang");
      });
  });
};
handleFakeCallApi(0).then(res => {
  console.log(res, " log cuoi cung");
});
// res = response
// err = error

// [p1, p2 ,p3]

// p1 là 1 promise
// p1.then()

// [p1, p2 ,p3].then()
// async await
