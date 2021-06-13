<template>
  <div class="container" id="file-container">
    Post work

    <div class="d-flex comment-block">
      <label class="pointer" for="exampleFormControlFile1">
        <img src="../assets/upload_file_black_24dp.svg" alt="" />
      </label>
      <input type="file" multiple class="form-control-file d-none " id="exampleFormControlFile1" @change="handleFileChange" />
      <input class="border-0 w-100 bg-transparent" type="text" placeholder="Gửi tin nhắn" />
    </div>
    <div v-show="filesClipboard.length" class="files-preview-list">
      <small class="d-block"
        >Đã chọn <b>{{ filesClipboard.length }}</b> files.</small
      >
      <div class="img-preview-list">
        <img v-for="img in filesClipboardImgs" :key="img._id" :src="img.src" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
  // các limit thường thấy
  // 1: số lượng file
  // 2: độ lớn (dung lượng)
  // 3: loại file (type)
  export default {
    data() {
      return {
        fileLimits: {
          amount: {
            maxCount: 10,
            errorMsg: "Số lượng file quá lớn.",
          },
          size: {
            maxCount: 1 * 1024 * 1024 * 100,
            errorMsg: "Dung lượng file quá lớn.",
          },
          type: {
            maxCount: ["png", "jpg", "jpeg", "webp", "gif", "pdf", "txt", "rtf", "docx"],
            errorMsg: "File không hợp lệ.",
          },
        },
        filesClipboard: [],
      };
    },
    computed: {
      filesClipboardImgs() {
        return this.filesClipboard.filter(o => o.type === "image");
      },
      filesClipboardOthers() {
        return this.filesClipboard.filter(o => o.type !== "image");
      },
    },
    methods: {
      handleFileChange(event) {
        const files = event.target.files;
        const _this = this;
        // validation amount
        if (this.filesClipboard.length + event.target.files.length > this.fileLimits.amount.maxCount) {
          alert(this.fileLimits.amount.errorMsg);
          return;
        }
        for (let file of files) {
          // validation size
          if (file.size > _this.fileLimits.size.maxCount) {
            alert(_this.fileLimits.size.errorMsg);
            return;
          }
          // validation type
          if (!_this.fileLimits.type.maxCount.includes(_this.getFilesTypeViaName(file.name))) {
            console.log(_this.getFilesTypeViaName(file.name));
            alert(_this.fileLimits.type.errorMsg);
            return;
          }
          // detect file

          if (file.type.includes("image")) {
            const reader = new FileReader();
            reader.onload = async event => {
              const img = document.createElement("img");
              img.src = event.target.result;
              const { width, height } = await _this.getDimension(img);
              this.filesClipboard = this.filesClipboard.concat({
                name: file.name,
                src: event.target.result,
                type: "image",
                width,
                height,
                blob: file,
                sizes: file.size,
                _id: new Date().getTime(),
              });
            };
            reader.readAsDataURL(file);
          } else {
            // dạng file_name.path
            // ở đây file_name cần được limit
            // tối đa 10 kí tự
            // abcdefghzxczxjcnzkxcn.pdf -> abcdefghz...pdf
            // abcdefghz.pdf -> abcdefghz.pdf
          }
        }
      },
      getDimension(_img) {
        return new Promise(resolve => {
          _img.onload = () => {
            resolve({ width: _img.width, height: _img.height });
          };
        });
      },
      getFilesTypeViaName(_name) {
        if (!_name) {
          return undefined;
        }
        return _name.split(".").pop();
      },
    },
  };
</script>

<style lang="scss">
  .pointer {
    cursor: pointer;
  }
  .comment-block {
    border: 1px solid #fefefe;
    background-color: #e8e6e6;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 2px 4px;
    input {
      &:focus-within,
      &:focus {
        outline: none;
        border: unset !important;
      }
    }
  }
  .img-preview-list {
    display: flex;
    flex-wrap: wrap;
    img {
      margin: 12px 10px;
      width: 128px;
      height: 128px;
      display: block;
      object-fit: cover;
    }
  }
</style>
