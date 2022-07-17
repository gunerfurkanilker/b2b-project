<template>
  <div class="card shadow">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <!--begin::Icon-->
        <div class="symbol symbol-45px w-15px me-5">
          <i class="bi bi-person-check fs-1"></i>
        </div>
        <!--end::Icon-->
        <!--begin::Title-->
        <h6 class="fs-5 text-hover-primary m-0">Kullanıcı Başvuruları</h6>
        <!--end::Title-->
      </div>
      <div class="card-toolbar">
      </div>
      <!--end::Card title-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0 pb-3 px-9">
      <!--begin::Heading-->
      <div class="d-flex py-3 w-100">
        <div>
          <span class="fs-6 text-muted my-auto mx-1">Sayfada</span>
          <div
            class="btn-group btn-group-sm"
            role="group"
            aria-label="First group"
          >
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio1"
              autocomplete="off"
              checked
            />
            <label class="btn btn-secondary" for="btnradio1">10</label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
            />
            <label class="btn btn-secondary" for="btnradio2">20</label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio3"
              autocomplete="off"
            />
            <label class="btn btn-secondary" for="btnradio3">30</label>
          </div>
          <span class="fs-6 text-muted my-auto mx-1">Kayıt Göster</span>
        </div>
        <div class="ms-auto">
          <div class="input-group">
            <input
              type="text"
              class="form-control form-control-sm"
              placeholder="Filtreleme"
            />

            <button
              type="button"
              class="btn btn-primary btn-sm"
              @click="tableData = []"
            >
              <i class="bi bi-search fs-6"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="table table-hover table-rounded table-striped border gy-7 gs-7"
        >
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bold">
              <th class="min-w-140px">Cari Kod</th>
              <th class="min-w-150px">Ad Soyad</th>
              <th class="min-w-140px">TCK No</th>
              <th class="min-w-140px">Telefon</th>
              <th class="min-w-140px">E-Posta</th>
              <th class="min-w-140px">Başvuru Tarihi</th>
              <th class="min-w-140px">IP Adres</th>
              <th class="min-w-140px">Durum</th>
              <th class="min-w-200px text-center">Onay / Red</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in dataList" :key="index">
              <tr>
                <td>
                  {{ item.cell1 }}
                </td>
                <td>
                  {{ item.cell2 }}
                </td>
                <td>
                  {{ item.cell3 }}
                </td>
                <td>
                  {{ item.cell4 }}
                </td>
                <td>
                  {{ item.cell5 }}
                </td>
                <td>
                  {{ item.cell6 }}
                </td>
                <td>
                  {{ item.cell7 }}
                </td>
                <td>
                  {{ item.cell8 }}
                </td>
                <td class="text-center">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-success me-2"
                    @click="confirm"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Onayla"
                  >
                    <i class="bi bi-check-all fs-3"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-danger me-2"
                    @click="rejectPrompt"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Reddet"
                  >
                    <i class="bi bi-x-circle-fill fs-7"></i>
                  </button>
                </td>
              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <div class="d-flex justify-content-center">
          <el-pagination background layout="prev, pager, next" :total="50" />
        </div>
        
        <!--end::Table-->
      </div>
      <!--end::Heading-->
    </div>
    <!--end::Card body-->
   
  </div>
</template>

<script lang="ts">



import Swal from "sweetalert2/dist/sweetalert2.js";

export default {
  components: {
    
  },
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      dataList: [
        {
          cell1: "00",
          cell2: "MERKEZ",
          cell3: "3.244.575,17",
          cell4: "4.086.602,99",
          cell5: "1.129.055,38",
          cell6: "355.875,00",
          cell7: "2.341.672,61",
          cell8: "2.341.672,61",
        },
        {
          cell1: "01",
          cell2: "BÜLENT CULUM",
          cell3: "2.576.790,75",
          cell4: "1.713.944,67",
          cell5: "823.151,23",
          cell6: "389.769,64",
          cell7: "305.418,80",
          cell8: "2.341.672,61",
        },
      ],
    };
  },
  methods: {
    confirm(){
      Swal.fire({
          text: "Kullanıcı Başvurusu Kabul Edildi",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Tamam",
          customClass: {
            confirmButton: "btn btn-primary",
          },
        }).then(() => {
          
        });
    },
    rejectPrompt(){
      Swal.fire({
          text: "Kullanıcıyı Başvurusunu Reddetmek İstiyor Musunuz?",
          icon: "question",
          buttonsStyling: false,
          confirmButtonText: "Evet",
          showCancelButton: true,
          cancelButtonText: "İptal",
          customClass: {
            confirmButton: "btn btn-danger",
            cancelButton: "btn btn-secondary",
          }
        }).then((confirm) => {
          if(confirm.isConfirmed)
            this.reject();
        });
    },
    reject(){
      Swal.fire({
          text: "Kullanıcı Başvurusu Reddedildi",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Tamam",
          customClass: {
            confirmButton: "btn btn-primary",
          },
        }).then(() => {
          
        });
    }
  },
};
</script>