<template>
  <div class="row py-4">
    <div class="col-md-12 text-center">
      <h3 class="pb-3">Analiz Ekranı</h3>
    </div>
    <div class="col-md-4">
      <select
        class="form-select form-select-sm mb-3"
        aria-label="Select example"
      >
        <option>Tüm Cariler</option>
        <option v-for="i in 5" :key="i" :value="i">Cari {{ i }}</option>
      </select>
    </div>
    <div class="col-md-4">
      <select
        class="form-select form-select-sm mb-3"
        aria-label="Select example"
      >
        <option>Tüm Plasiyerler</option>
        <option v-for="i in 5" :key="i" :value="i">Plasiyer {{ i }}</option>
      </select>
    </div>
    <div class="col-md-4">
      <select
        class="form-select form-select-sm mb-3"
        aria-label="Select example"
      >
        <option>Tüm Şirketler</option>
        <option v-for="i in 5" :key="i" :value="i">Şirket {{ i }}</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 pb-3 text-center" v-if="false">
      <button
        class="btn btn-bg-secondary btn-hover-rise btn-sm me-5"
        @click="isCardView = true"
      >
        Kart Görünüm
      </button>
      <button
        class="btn btn-bg-secondary btn-hover-rise btn-sm me-5"
        @click="isCardView = false"
      >
        Tablo Görünüm
      </button>
    </div>
    <div class="col-md-12 mb-5" v-if="!isCardView">
      <basicAmountTable></basicAmountTable>
    </div>
    <div class="col-md-2 mb-5" v-if="isCardView">
      <basicAmountCard
        :title="'Toplam Stok Tutarı'"
        :number="'7.601.763,28 TRY'"
      ></basicAmountCard>
    </div>
    <div class="col-md-2 mb-5" v-if="isCardView">
      <basicAmountCard
        :title="'Toplam Tedarikçi'"
        :number="'53'"
      ></basicAmountCard>
    </div>
    <div class="col-md-2 mb-5" v-if="isCardView">
      <basicAmountCard
        :title="'Toplam B2B Sipariş Tutarı'"
        :number="'23.865.469,27 TRY'"
      ></basicAmountCard>
    </div>
    <div class="col-md-2 mb-5" v-if="isCardView">
      <basicAmountCard
        :title="'Toplam ERP Müşteri Sayısı'"
        :number="'1227'"
      ></basicAmountCard>
    </div>
    <div class="col-md-2 mb-5" v-if="isCardView">
      <basicAmountCard
        :title="'Toplam ERP Sipariş Sayısı'"
        :number="'3383'"
      ></basicAmountCard>
    </div>
    <div class="col-md-2 mb-5" v-if="isCardView">
      <basicAmountCard
        :title="'Toplam Teklif Sayısı'"
        :number="'0'"
      ></basicAmountCard>
    </div>
    <div class="col-md-2 mb-5" v-if="isCardView">
      <basicAmountCard
        :title="'Toplam B2B Müşteri Sayısı'"
        :number="'1341'"
      ></basicAmountCard>
    </div>
    <div class="col-md-2 mb-5" v-if="isCardView">
      <basicAmountCard
        :title="'Toplam B2B Sipariş Sayısı'"
        :number="'4973'"
      ></basicAmountCard>
    </div>
    <div class="col-md-2 mb-5" v-if="isCardView">
      <basicAmountCard
        :title="'Toplam ERP Sipariş Tutarı'"
        :number="'21.061.694,28 TRY'"
      ></basicAmountCard>
    </div>
    <div class="col-md-2 mb-5" v-if="isCardView">
      <basicAmountCard
        :title="'Toplam Teklif Satış Tutarı'"
        :number="'0,00 TRY'"
      ></basicAmountCard>
    </div>
    <div class="col-md-2 mb-5" v-if="isCardView">
      <basicAmountCard
        :title="'Toplam Alacak Tutarı'"
        :number="'2.898.176,17 TRY'"
      ></basicAmountCard>
    </div>
    <div class="col-md-2 mb-5" v-if="isCardView">
      <basicAmountCard
        :title="'Toplam Borç Tutarı'"
        :number="'-154.413,35 TRY'"
      ></basicAmountCard>
    </div>
  </div>
  <div class="row py-4">
    <div class="col-md-6">
      <monthlyEndorsementGraph></monthlyEndorsementGraph>
    </div>
    <div class="col-md-6">
      <bestSellingCurrentGraph></bestSellingCurrentGraph>
    </div>
  </div>
  <div class="row py-4">
    <div class="col-md-3">
      <buySellReportCard :title="'Satış Faturası Raporu'"></buySellReportCard>
    </div>
    <div class="col-md-3">
      <buySellReportCard :title="'Alış Faturası Raporu'"></buySellReportCard>
    </div>
    <div class="col-md-3">
      <buySellReportCard :title="'Satış İrsaliyesi Raporu'"></buySellReportCard>
    </div>
    <div class="col-md-3">
      <buySellReportCard :title="'Alış İrsaliyesi Raporu'"></buySellReportCard>
    </div>
  </div>
  <div class="row py-4">
    <div class="col-md-6 mb-5">
      <checkBillTable :title="'Müşteri Çekleri'"></checkBillTable>
    </div>
    <div class="col-md-6 mb-5">
      <checkBillTable :title="'Müşteri Senetleri'"></checkBillTable>
    </div>
    <div class="col-md-6 mb-5">
      <checkBillTable :title="'Borç Çekleri'"></checkBillTable>
    </div>
    <div class="col-md-6 mb-5">
      <checkBillTable :title="'Borç Senetleri'"></checkBillTable>
    </div>
  </div>
  <div class="row py-4">
    <div class="col-md-6 mb-5">
      <debtorPayeeTable :title="'Top 10 Borçlu Cari Listesi'"></debtorPayeeTable>
    </div>
    <div class="col-md-6 mb-5">
      <debtorPayeeTable :title="'Top 10 Alacaklı Cari Listesi'"></debtorPayeeTable>
    </div>
  </div>
  <div class="row py-4">
    <div class="col-md-12 mb-5">
      <bestSellerProducts :title="'En İyi Satılan Ürünler'"></bestSellerProducts>
    </div>
  </div>
  <div class="row py-4">
    <div class="col-md-12 mb-5">
      <plasiyerTahsilatAnaliz :title="'Plasiyer Tahsilat Analiz'"></plasiyerTahsilatAnaliz>
    </div>
  </div>
  <div class="row py-4">
    <div class="col-md-12 mb-5">
      <giderRaporu :title="'Gider Raporu'"></giderRaporu>
    </div>
  </div>
  <div class="row py-4">
    <div class="col-md-12 mb-5">
      <plasiyerTahsilatAnalizDetay :title="'Plasiyer Tahsilat Analiz Detay'"></plasiyerTahsilatAnalizDetay>
    </div>
  </div>
</template>

<script lang="ts">
import basicAmountCard from "@/components/dashboard/basicAmountCard.vue";
import basicAmountTable from "@/components/dashboard/basicAmountTable.vue";
import monthlyEndorsementGraph from "@/components/dashboard/monthlyEndorsementGraph.vue";
import bestSellingCurrentGraph from "@/components/dashboard/bestSellingCurrentGraph.vue";
import buySellReportCard from "@/components/dashboard/buySellReportCard.vue";
import checkBillTable from "@/components/dashboard/checkBillTable.vue";
import debtorPayeeTable from "@/components/dashboard/debtorPayeeTable.vue";
import bestSellerProducts from "@/components/dashboard/bestSellerProducts.vue";
import plasiyerTahsilatAnaliz from "@/components/dashboard/plasiyerTahsilatAnaliz.vue";
import giderRaporu from "@/components/dashboard/giderRaporu.vue";
import plasiyerTahsilatAnalizDetay from "@/components/dashboard/plasiyerTahsilatAnalizDetay.vue";

export default {
  components: {
    basicAmountCard,
    basicAmountTable,
    monthlyEndorsementGraph,
    bestSellingCurrentGraph,
    buySellReportCard,
    checkBillTable,
    debtorPayeeTable,
    bestSellerProducts,
    plasiyerTahsilatAnaliz,
    giderRaporu,
    plasiyerTahsilatAnalizDetay
  },
  data() {
    return {
      isCardView: true,
    };
  },
};
</script>