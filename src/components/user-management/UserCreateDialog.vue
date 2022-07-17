<template>
  <el-dialog
    @close="dialogClose"
    v-model="userCreateDialog"
    title="Kullanıcı Oluştur"
    width="80%"
    center
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12 py-5 text-center">
          <div class="symbol symbol-100px symbol-circle mb-7">
            <img src="media/avatars/blank.png" alt="image" />
          </div>
        </div>
        <div class="col-md-6 py-5">
          <label class="form-label">Ad(*)</label>
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="Ad"
          />
        </div>
        <div class="col-md-6 py-5">
          <label class="form-label">Soyad(*)</label>
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="Soyad"
          />
        </div>
        <div class="col-md-6 py-5">
          <label class="form-label">T.C Kimlik No(*)</label>
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="T.C Kimlik No"
          />
        </div>
        <div class="col-md-6 py-5">
          <label class="form-label">E-Mail(*)</label>
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="E-Mail"
          />
        </div>
        <div class="col-md-6 py-5">
          <label class="form-label">Kullanıcı Adı(*)</label>
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="E-Mail"
          />
        </div>
        <div class="col-md-6 py-5">
          <label class="form-label">Şifre(*)</label>
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="Şifre"
          />
        </div>
        <div class="col-md-6 py-5">
          <label class="form-label">Telefon(*)</label>
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="Telefon"
          />
        </div>
        <div class="col-md-6 py-5">
          <label class="form-label">Role Grup(*)</label>
          <select class="form-select form-select-sm">
            <option>Role Grup Seçin</option>
            <option>Yönetici</option>
            <option>Plasiyer</option>
            <option>Müşteri</option>
          </select>
        </div>
        <div class="col-md-6 py-5">
          <label class="form-label">Role(*)</label>
          <select class="form-select form-select-sm">
            <option>Yönetici</option>
            <option>Muhasebe</option>
          </select>
        </div>
        <div class="col-md-6 py-5">
          <label class="form-label">Plasiyer Kodu(*)</label>
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="Plasiyer Kodu"
          />
        </div>
        <div class="col-md-6 py-5">
          <label class="form-label">Cari Kodu(*)</label>
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="Cari Kodu"
          />
        </div>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogClose">İptal</el-button>
        <el-button type="primary" @click="createUser()">Kaydet</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>


import Swal from "sweetalert2/dist/sweetalert2.js";

export default {
  props: ["userCreateDialog"],
  methods: {
    dialogClose() {
      this.$emit("dialogClose");
    },
    createUser(){
      Swal.fire({
          text: "Kullanıcı bilgileri kaydedildi",
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
  },
};
</script>