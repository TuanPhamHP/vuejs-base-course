import Vue from "vue";
import { tStr } from "validation_t/src";

// global directives
// có tính overwrite

Vue.directive("currency", {
  inserted: function(element, binding) {
    console.log(element); // element

    const myVal = element.innerText;
    let lastValue = tStr.getCurrency(myVal);
    if (binding.modifiers.afterward) {
      lastValue = lastValue + binding.value;
    }
    if (binding.modifiers.prefix) {
      lastValue = binding.value + lastValue;
    }
    element.innerText = lastValue;
  },
});
Vue.directive("currency", {
  inserted: function(element, binding) {
    console.log(element); // element

    console.log(binding);
  },
});
Vue.directive("errorMsg", {
  inserted: function(element) {
    // thông báo lỗi
    // DOM

    element.style.backgroundColor = "#de302350";
    element.style.color = "#ff0000";
  },
});
