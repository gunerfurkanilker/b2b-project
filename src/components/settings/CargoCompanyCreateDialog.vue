<template>
  <el-dialog @close="dialogClose" v-model="showDialog" title="Firma Oluştur" width="600px" center>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 py-5">
          <label class="form-label">Firma Adı</label>
          <input
            type="text"
            class="form-control form-control-sm form-control-solid"
            placeholder="Firma Adı"
          />
        </div>
        <div class="col-md-6 py-5">
          <label class="form-label">Durum</label>
          <select
          type="text"
          class="form-select form-select-sm form-select-solid"
        >
          <option v-for="i in 5" :key="i" :value="i">
            {{ "Netsis Kod : " + i }}
          </option>
        </select>
        </div>
      </div>
    </div>
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
  props:["showDialog"],
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
          text: "İşlem Başarılı",
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