export default {
  methods: {
    parseDateToDMY(_date) {
      if (!_date) {
        return "---";
      }
      const date = new Date(_date);
      if (isNaN(date.getDate())) {
        return "---";
      }
      // valid date
      return `${String(date.getDate()).padStart(2, 0)}-${String(date.getMonth() + 1).padStart(2, 0)} :${date.getFullYear()}`;
    },
  },
};
