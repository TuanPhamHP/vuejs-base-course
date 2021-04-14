const computedArray = [1, 2, 3];
const statusArray = [
  {
    id: 1,
    shownText: "Đang học",
  },
  {
    id: 2,
    shownText: "Đã ngủ",
  },
];

let app = new Vue({
  el: "#root",
  data() {
    return {
      name: "Tuấn",
      currentStatus: 3,
      bill: 100,
      listBills: [{ amount: 100 }, { amount: 200 }],
    };
  },
  computed: {
    getCurrentStatus() {
      let ar = statusArray.filter(o => {
        return o.id === this.currentStatus;
      });

      return ar.length ? ar[0].shownText : "Không rõ trạng thái";
    },
    getTextLength() {
      return this.getCurrentStatus === "Không rõ trạng thái" ? 0 : this.getCurrentStatus.length;
    },
    getCurrentTipPercent() {
      let obj = {
        percent: 0,
      };
      if (this.bill < 50) {
        obj.percent = 20;
      } else if (this.bill <= 200) {
        obj.percent = 15;
      } else {
        obj.percent = 10;
      }
      return obj.percent;
    },
    getCurrentTipAmount() {
      return (this.bill * this.getCurrentTipPercent) / 100;
    },
  },
  methods: {
    onSubmitBill() {
      const _this = this;
      this.listBills.push({
        amount: _this.bill,
      });
      this.bill = "";
    },
  },
});

// Computed : là 1 function gồm các đặc điểm sau
// Không nhận biến
// Data input phải là 1 state, hoặc 1 computed, props hoặc 1 biến được khai báo trong scope
// Được coi như là 1 data bình thường .
// Bắt buộc 1 computed phải trả ra 1 giá trị .

// những cách sử dụng trong thực tế

// dùng computed thay data khi mà data được lấy về mà phải qua 1 quá trình xử lý.
// dùng computed khi muốn xử lý tiếp 1 computed khác

// list data rendering forEach

// listBills: [{amount :100},{amount :200}]
// =>
// listBillsComputed: [
//   {
//   amount :100,
//   tipPercent : 15,
//   tipAmount : 15
//   },
//   {
//     amount :200,
//     tipPercent : 10,
//     tipAmount : 20
//     }
// ],
