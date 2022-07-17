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
        <template v-slot:cell-tarih="{ row: data }">
          {{ data.tarih }}
        </template>
        <template v-slot:cell-cari_kod="{ row: data }">
          {{ data.cari_kod }}
        </template>
        <template v-slot:cell-cari_ad="{ row: data }">
          {{ data.cari_ad }}
        </template>
        <template v-slot:cell-aciklama="{ row: data }">
          {{ data.aciklama }}
        </template>
        <template v-slot:cell-plasiyer_kodu="{ row: data }">
          {{ data.plasiyer_kodu }}
        </template>
        <template v-slot:cell-plasiyer_adi="{ row: data }">
          {{ data.plasiyer_adi }}
        </template>
        <template v-slot:cell-alacak="{ row: data }">
          {{ data.alacak }}
        </template>
        <template v-slot:cell-tip="{ row: data }">
          {{ data.tip }}
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
          name: "Tarih",
          key: "tarih",
        },
        {
          name: "Cari Kod",
          key: "cari_kod",
        },
        {
          name: "Cari Adı",
          key: "cari_ad",
        },
        {
          name: "Açıklama",
          key: "aciklama",
        },
        {
          name: "Plasiyer Kodu",
          key: "plasiyer_kodu",
        },
        {
          name: "Plasiyer Adı",
          key: "plasiyer_adi",
        },
        {
          name: "Alacak",
          key: "alacak",
        },
        {
          name: "Tip",
          key: "tip",
        },
      ],
      tableData: [
        {
          tarih: "13-07-2022",
          cari_kod: "00408",
          cari_ad: "ÖNDER RULMAN OTOMOTİV YEDEK PARÇA LTD.ŞTİ.",
          aciklama: "HAVALE İŞ BANKASI 1.SANAYİ",
          plasiyer_kodu: "03",
          plasiyer_adi: "NUTULLAH SUBAŞI",
          alacak: "11.754,00",
          tip: "Dekont",
        },
        {
          tarih: "13-07-2022",
          cari_kod: "00120",
          cari_ad: "GÜVEN MAKİNA-SÜLEYMAN YALÇINKAYA",
          aciklama: "HAVALE VAKIFBANK MERSİNLİ ŞB.",
          plasiyer_kodu: "00",
          plasiyer_adi: "MERKEZ",
          alacak: "17.000,00",
          tip: "Dekont",
        },
        {
          tarih: "07-07-2022",
          cari_kod: "00446",
          cari_ad: "DOST MOTORLU ARAÇLAR SAN.TİC LTD.ŞTİ",
          aciklama: "VİSA TAHSİLAT(04)",
          plasiyer_kodu: "02",
          plasiyer_adi: "HASAN KALBURCU",
          alacak: "1.324,57",
          tip: "Nakit / K.K",
        },
        {
          tarih: "07-07-2022",
          cari_kod: "00446",
          cari_ad: "DOST MOTORLU ARAÇLAR SAN.TİC LTD.ŞTİ",
          aciklama: "VİSA TAHSİLAT(04)",
          plasiyer_kodu: "02",
          plasiyer_adi: "HASAN KALBURCU",
          alacak: "1.324,57",
          tip: "Nakit / K.K",
        },
        {
          tarih: "07-07-2022",
          cari_kod: "00446",
          cari_ad: "DOST MOTORLU ARAÇLAR SAN.TİC LTD.ŞTİ",
          aciklama: "VİSA TAHSİLAT(04)",
          plasiyer_kodu: "02",
          plasiyer_adi: "HASAN KALBURCU",
          alacak: "1.324,57",
          tip: "Nakit / K.K",
        },
        {
          tarih: "07-07-2022",
          cari_kod: "00446",
          cari_ad: "DOST MOTORLU ARAÇLAR SAN.TİC LTD.ŞTİ",
          aciklama: "VİSA TAHSİLAT(04)",
          plasiyer_kodu: "02",
          plasiyer_adi: "HASAN KALBURCU",
          alacak: "1.324,57",
          tip: "Nakit / K.K",
        },
        {
          tarih: "07-07-2022",
          cari_kod: "00446",
          cari_ad: "DOST MOTORLU ARAÇLAR SAN.TİC LTD.ŞTİ",
          aciklama: "VİSA TAHSİLAT(04)",
          plasiyer_kodu: "02",
          plasiyer_adi: "HASAN KALBURCU",
          alacak: "1.324,57",
          tip: "Nakit / K.K",
        }
      ],
    };
  },
};
</script>