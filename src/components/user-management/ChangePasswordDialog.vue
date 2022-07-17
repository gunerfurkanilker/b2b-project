<template>
  <el-dialog @close="dialogClose" v-model="changePasswordDialog" title="Şifre Değiştir" width="400px" center>
    <input type="text" class="form-control form-control-sm" placeholder="Yeni Şifre Değiştir">
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogClose">İptal</el-button>
        <el-button type="primary" @click="changePassword"
          >Kaydet</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script>

import Swal from "sweetalert2/dist/sweetalert2.js";

export default {
  props:["changePasswordDialog"],
  computed:{
    templateInstance(){
      return this;
    }
  },
  methods:{
    dialogClose() {
      this.$emit("dialogClose");
    },
    changePassword(){
      Swal.fire({
          text: "Şifre Değiştirme İşlemi Başarılı",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Tamam",
          customClass: {
            confirmButton: "btn btn-primary",
          },
        }).then(() => {
          this.dialogClose();
        });
    }
  }
}
</script>