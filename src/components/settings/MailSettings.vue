<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 py-5">
        <label class="form-label">E-Mail Gönderen Adı</label>
        <input
          type="file"
          class="form-control form-control-sm form-control-solid"
          placeholder="Dosya Seç"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">E-Mail Adresi</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Netsis Şube Kodu"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">E-Mail Şifre</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Netsis Kullanıcı Adı"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">E-Mail Port</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Netsis Kullanıcı Şifre"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">E-Mail Host</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Netsis Siparis Seri"
        />
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">E-Mail SSL</label>
        <div>
          <el-switch
            v-model="value1"
            active-text="Var"
            inactive-text="Yok"
          />
        </div>
      </div>
      <div class="col-md-12 py-5 text-end">
        <button
          href="#"
          class="btn btn-sm btn-primary m-1"
          @click="save"
        >
          <i class="bi bi-arrow-return-right fs-3"></i> Kaydet
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.js";

export default {

  data(){
    return {
      value1:false
    }
  },

  methods:{
    save(){
      Swal.fire({
          text: "Kayıt Başarılı",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Tamam",
          customClass: {
            confirmButton: "btn btn-primary",
          },
        }).then(() => {
          
        });
    }
    

  }
}
</script>