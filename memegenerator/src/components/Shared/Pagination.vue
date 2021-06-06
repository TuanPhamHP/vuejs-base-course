<template>
  <div class="col-xl-12 col-md-12 col-sm-12 pagination-header">
    <p class="mb-0 font-size-14 counter-pagi">
      Đang xem
      {{ pagination.total !== 0 ? (pagination.current_page - 1) * pagination.per_page + 1 : 0 }}
      đến
      {{ pagination.current_page * pagination.per_page > pagination.total ? pagination.total : pagination.current_page * pagination.per_page }}
      trong tổng số {{ pagination.count }} mục
    </p>
    <div class="pagination">
      <div class="page-idx" :class="pagination.current_page === 1 ? 'disabled' : 'pointer'" @click="handleChangeCurrentPages(pagination.current_page - 1)">
        <img src="../../assets/global-chevron-left.svg" alt="" :class="pagination.current_page === 1 ? 'disabled' : 'pointer'" />
      </div>

      <span v-if="pagination.current_page > 1" @click.stop="handleChangeCurrentPages(1)">1</span>
      <span v-if="pagination.current_page > 3">...</span>
      <span v-if="pagination.current_page > 2" @click.stop="handleChangeCurrentPages(pagination.current_page - 1)">{{ pagination.current_page - 1 }}</span>
      <span class="active">{{ pagination.current_page }}</span>
      <span v-if="pagination.current_page + 1 < pagination.total_pages" @click.stop="handleChangeCurrentPages(pagination.current_page + 1)">{{ pagination.current_page + 1 }}</span>
      <span v-if="pagination.total_pages > 3 && pagination.current_page + 2 < pagination.total_pages">...</span>
      <span v-if="pagination.total_pages > 1 && pagination.current_page !== pagination.total_pages" @click.stop="handleChangeCurrentPages(pagination.total_pages)">{{ pagination.total_pages }}</span>

      <div class="page-idx" :class="pagination.current_page === pagination.total_pages ? 'disabled' : 'pointer'" @click="handleChangeCurrentPages(pagination.current_page + 1)">
        <img src="../../assets/global-chevron-right.svg" alt="" :class="pagination.current_page === pagination.total_pages ? 'disabled' : 'pointer'" />
      </div>
    </div>
    <div class="numb-per-page btn-no-outline input-group-pagination align-items-center" style="justify-content: flex-end">
      <p class="fullsize-text mb-0 font-size-14">Hiển thị</p>
      <select v-model="perPage" class="form-select btn-no-outline select-css focus-no-outline" aria-label="Default select example">
        <option v-for="option in optionsPageSize" :key="option" class="dropdown-item text-center" :value="option">
          {{ option }}
        </option>
      </select>
      <p class="fullsize-text mb-0 font-size-14">Bản ghi/trang</p>
    </div>
  </div>
</template>

<script>
  // Pagination
  // Login

  // 1 : infinite scroll - social network -> mobile
  // 2 : pagination bar -

  export default {
    name: "Pagination",
    components: {},
    props: {
      titleSelect: {
        type: String,
        default: "Hiển thị",
      },
      handleChangePerPages: {
        type: Function,
        default() {},
      },
      handleChangePage: {
        type: Function,
        default() {},
      },
      pagination: {
        type: Object,
        default() {},
      },

      // Flux
    },
    data() {
      return {
        isOpen: false,
        optionsPageSize: [1, 10, 25, 50, 100],
        currentPage: 1,
        perPage: 10,
      };
    },
    watch: {
      pagination: {
        deep: true,
        handler() {
          // code xu li
          console.log(this.pagination);
        },
      },
      perPage(_perPage) {
        this.handleChangePerPages(_perPage);
        this.isOpen = false;
      },
    },
    methods: {
      handleChangeCurrentPages(_currentPage) {
        if (_currentPage > 0 && _currentPage <= this.pagination.total_pages) {
          // this.currentPage = _currentPage;
          this.handleChangePage(_currentPage);
        }
      },
    },
  };
</script>

<style scoped lang="scss">
  .pagination-header {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  .form-select {
    cursor: pointer;
    border: none !important;
    border-bottom: 1px solid #000 !important;
    border-radius: 0 !important;
    padding-left: 4px;
    margin-left: 6px;
    margin-right: 6px;
  }
  .pagination {
    display: flex;
    //justify-content: space-between;
    margin: 0 auto;
  }
  .fullsize-text {
    white-space: nowrap;
  }
  span {
    cursor: pointer;
    text-align: center;
    display: inline-block;
    font-size: 14px;
    color: #2b2b2b;
    height: 32px;
    width: 32px;
    border-radius: 4px;
    margin: 0 2px;
    padding: 4px 10px;
    line-height: 24px;
    background: white;
  }

  span.active {
    background-color: #e6c866;
  }

  .page-idx {
    border-radius: 4px;
    /* border: solid 1px #d8dce6;
  background-color: #ffffff; */
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    align-items: center;

    .caret-left,
    .caret-right {
      width: 38px;
      height: 30px;
      text-align: center;
      font-size: 25px;
      padding-top: 3px;
      padding-bottom: 6px;
      cursor: pointer;
    }

    .caret-left {
      border-right: 1px solid rgba(184, 184, 184, 0.685);
    }

    .caret-right {
      border-left: 1px solid rgba(199, 199, 199, 0.685);
    }

    span {
      cursor: pointer;
      text-align: center;
      display: inline-block;
      font-size: 14px;
      color: #2b2b2b;
      height: 32px;
      width: 32px;
      border-radius: 4px;
      margin: 0 2px;
      padding: 4px 10px;
      line-height: 24px;

      &:hover {
        background-color: #d69245c4;
      }

      .numb-per-page {
        input {
          border-radius: 4px;
          border: none;
          box-shadow: 0 0 2px 0 #8f8f8f;
          background-color: #ffffff;
          width: 46px;
          height: 32px;
          line-height: 32px;
          padding: 0;
          //padding-left: 8px;
          &:focus {
            outline: none;
          }
        }
      }
    }
  }

  .select-css {
    border-radius: 4px;
    border: solid 1px #d8dce6;
    background-color: #ffffff;
    display: flex;
    align-items: center;
  }
  .input-group-pagination {
    //position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: stretch;
    align-items: stretch;
  }
</style>
