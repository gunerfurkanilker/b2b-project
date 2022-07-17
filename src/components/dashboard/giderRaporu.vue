<template>
  <div class="card shadow">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <!--begin::Icon-->
        <div class="symbol symbol-45px w-15px me-5">
          <i class="bi bi-receipt fs-1"></i>
        </div>
        <!--end::Icon-->
        <!--begin::Title-->
        <a href="#" class="fs-5 text-hover-primary m-0">
          {{ title }}
        </a>
        <!--end::Title-->
      </div>
      <div class="card-toolbar">
        <select
              class="form-select form-select-sm my-3"
              aria-label="Select example"
            >
              <option>Yıllık</option>
              <option>Haftalık</option>
              <option>Aylık</option>
              <option>Günlük</option>
            </select>
      </div>
      <!--end::Card title-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0 pb-3 px-9">
      <!--begin::Heading-->
     
      <KTDatatable
        :table-header="tableHeaders"
        :table-data="tableData"
        :total="tableData.length"
        :rowsPerPage="3"
      >
        <template v-slot:cell-hesap_kodu="{ row: data }">
          {{ data.hesap_kodu }}
        </template>
        <template v-slot:cell-hesap_adı="{ row: data }">
          {{ data.hesap_adı }}
        </template>
        <template v-slot:cell-tutar="{ row: data }">
          {{ data.tutar }}
        </template>
      </KTDatatable>
      <!--end::Heading-->
    </div>
    <!--end::Card body-->
  </div>
</template>

<script lang="ts">
import KTDatatable from "@/components/kt-datatable/KTDatatable.vue";

export default {
  components: {
    KTDatatable,
  },
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      test: false,
      tableHeaders: [
        {
          name: "Hesap Kodu",
          key: "hesap_kodu",
        },
        {
          name: "Hesap Adı",
          key: "hesap_adı",
        },
        {
          name: "Tutar",
          key: "tutar",
        },
      ],
      tableData: [
        {
          hesap_kodu: "770-01-018",
          hesap_adı: "BRÜT ÜCRETLER",
          tutar: "226.014,00",
        },
        {
          hesap_kodu: "770-01-001",
          hesap_adı: "KANUNEN KABUL EDİLMEYEN GİDERLER",
          tutar: "59.470,53",
        },
        {
          hesap_kodu: "760-01-016",
          hesap_adı: "SEYAHAT AKARYAKIT GİDERLERİ",
          tutar: "53.735,84",
        },
        {
          hesap_kodu: "770-01-019",
          hesap_adı: "İŞVEREN SSK HİSSESİ",
          tutar: "47.533,83",
        },
      ],
    };
  },
};
</script>