<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 py-5 text-center">
        <img src="media/logos/star-rulmancilik.png" alt="">
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">Firma Logo</label>
        <input
          type="file"
          class="form-control form-control-sm form-control-solid"
          placeholder="Dosya Seç"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">Firma Adı (*)</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Netsis Şube Kodu"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">Firma Şehir</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Netsis Kullanıcı Adı"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">Firma İlçe</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Netsis Kullanıcı Şifre"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">Firma Adres</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Netsis Siparis Seri"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">Firma Telefon Numarası</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Netsis Cari Seri"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">Firma E-Posta Adresi</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Firma E-Posta Adresi"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">Firma Web Sitesi</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="NetOpen X Rest Url Adresi"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">Siparişin Gideceği Mail</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Siparişin Gideceği Mail"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">Siparişin Gideceği Mail (CC)</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="E-Logo Kullanıcı Şifre"
        />
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">Sipariş Bilgi Maili</label>
        <div>
          <el-switch
            v-model="value1"
            active-text="Evet"
            inactive-text="Hayır"
          />
        </div>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">Teklif Bilgi Maili</label>
        <div>
          <el-switch
            v-model="value1"
            active-text="Evet"
            inactive-text="Hayır"
          />
        </div>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">ERP Kilitli Cari Sipariş</label>
        <div>
          <el-switch
            v-model="value1"
            active-text="Evet"
            inactive-text="Hayır"
          />
        </div>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">Plasiyere Ticket Bilgi Maili</label>
        <div>
          <el-switch
            v-model="value1"
            active-text="Evet"
            inactive-text="Hayır"
          />
        </div>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">Onaysız Tekliflere Fligran Yazısı</label>
        <select
          type="text"
          class="form-select form-select-sm form-select-solid"
        >
          <option v-for="i in 5" :key="i" :value="i">
            {{ "Secenek : " + i }}
          </option>
        </select>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">Stok Listede Bakiye Gösterilsin Mi ?</label>
        <select
          type="text"
          class="form-select form-select-sm form-select-solid"
        >
          <option v-for="i in 5" :key="i" :value="i">
            {{ "Secenek : " + i }}
          </option>
        </select>
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