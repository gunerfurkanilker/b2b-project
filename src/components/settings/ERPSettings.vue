<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 py-5">
        <el-alert
          title="UYARI"
          type="error"
          description="Burada yapacağınız değişiklikler sistemde ciddi bozulmalara sebep olabilir. Bilmediğiniz durumlar için mutlaka sistem yöneticisine danışınız. Bilgi kutucuklarının üzerine mouse ile geldiğinizde, size ilgili alanla ilgili bilgiyi gösterecektir"
          show-icon
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">Netsis Şirket Adı (*)</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Netsis Şirket Adı"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">Netsis Şube Kodu (*)</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Netsis Şube Kodu"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">Netsis Kullanıcı Adı (*)</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Netsis Kullanıcı Adı"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">Netsis Kullanıcı Şifre (*)</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Netsis Kullanıcı Şifre"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">Netsis Siparis Seri (*)</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Netsis Siparis Seri"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">Netsis Cari Seri (*)</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Netsis Cari Seri"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">Netsis Cari Seri (*)</label>
        <select
          type="text"
          class="form-select form-select-sm form-select-solid"
        >
          <option v-for="i in 5" :key="i" :value="i">
            {{ "Netsis Kod : " + i }}
          </option>
        </select>
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">NetOpen X Rest Url Adresi</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="NetOpen X Rest Url Adresi"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">E-Logo Kullanıcı Adı</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="E-Logo Kullanıcı Adı"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">E-Logo Kullanıcı Şifre</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="E-Logo Kullanıcı Şifre"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">Özel Kod 1</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Özel Kod 1"
        />
      </div>
      <div class="col-md-6 py-5">
        <label class="form-label">Özel Kod 2</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Özel Kod 2"
        />
      </div>

      <div class="col-md-4 py-5">
        <label class="form-label">Dövizli Satış Var Mı ?</label>

        <el-switch
          class="ms-3"
          v-model="value1"
          active-text="Var"
          inactive-text="Yok"
        />

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
        <label class="form-label">Sipariş Onay Çalışsın Mı ?</label>
        <div>
          <el-switch
            v-model="value1"
            active-text="Evet"
            inactive-text="Hayır"
          />
        </div>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">Koşul Uygulaması Var Mı ?</label>
        <div>
          <el-switch v-model="value1" active-text="Var" inactive-text="Yok" />
        </div>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">Kampanya Uygulaması Var Mı ?</label>
        <div>
          <el-switch v-model="value1" active-text="Var" inactive-text="Yok" />
        </div>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">Plasiyer Teklif Onay</label>
        <div>
          <el-switch
            v-model="value1"
            active-text="Evet"
            inactive-text="Hayır"
          />
        </div>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">ERP Tahsilat Kaydı</label>
        <div>
          <el-switch
            class="ms-3"
            v-model="value1"
            active-text="Evet"
            inactive-text="Hayır"
          />
        </div>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">Stok Listede Bakiye Gösterilsin Mi ?</label>

        <el-switch
          class="ms-3"
          v-model="value1"
          active-text="Var"
          inactive-text="Yok"
        />

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
        <label class="form-label">Satış Fiyatı (*)</label>
        <select
          type="text"
          class="form-select form-select-sm form-select-solid"
        >
          <option v-for="i in 5" :key="i" :value="i">
            {{ "Seçenek 1 : " + i }}
          </option>
        </select>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">Stok Araması Nasıl Yapılsın (*)</label>
        <select
          type="text"
          class="form-select form-select-sm form-select-solid"
        >
          <option v-for="i in 5" :key="i" :value="i">
            {{ "Seçenek 1 : " + i }}
          </option>
        </select>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">Cari Araması Nasıl Yapılsın (*)</label>
        <select
          type="text"
          class="form-select form-select-sm form-select-solid"
        >
          <option v-for="i in 5" :key="i" :value="i">
            {{ "Seçenek 1 : " + i }}
          </option>
        </select>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">Ödeme Tipi İskontosu</label>
        <div>
          <el-switch
            v-model="value1"
            active-text="Var"
            inactive-text="Yok"
          />
        </div>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">Stok Bakiye Sepet Kontrolü</label>
        <div>
          <el-switch
            v-model="value1"
            active-text="Var"
            inactive-text="Yok"
          />
        </div>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">Ekstra Fiyat Alanı (*)</label>
        <select
          type="text"
          class="form-select form-select-sm form-select-solid"
        >
          <option v-for="i in 5" :key="i" :value="i">
            {{ "Seçenek 1 : " + i }}
          </option>
        </select>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">Minimum Stok Kısıtı</label>
        <div>
          <el-switch
            v-model="value1"
            active-text="Evet"
            inactive-text="Hayır"
          />
        </div>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">Maksimum Stok Kısıtı</label>
        <div>
          <el-switch
            v-model="value1"
            active-text="Evet"
            inactive-text="Hayır"
          />
        </div>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">Stok KDV Durumu (*)</label>
        <select
          type="text"
          class="form-select form-select-sm form-select-solid"
        >
          <option v-for="i in 5" :key="i" :value="i">
            {{ "Seçenek 1 : " + i }}
          </option>
        </select>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">Stok Sıralaması (*)</label>
        <select
          type="text"
          class="form-select form-select-sm form-select-solid"
        >
          <option v-for="i in 5" :key="i" :value="i">
            {{ "Seçenek 1 : " + i }}
          </option>
        </select>
      </div>
      <div class="col-md-4 py-5">
        <label class="form-label">Stok Bakiye Limiti</label>
        <input
          type="text"
          class="form-control form-control-sm form-control-solid"
          placeholder="Stok Bakiye Limiti"
        />
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

<script lang="ts">
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