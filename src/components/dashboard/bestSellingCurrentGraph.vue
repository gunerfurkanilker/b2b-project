<template>
  <div class="card shadow">
    <div class="card-header border-0">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">En İyi Satış Grafiği</span>
        <span class="text-muted fw-semobold fs-7"></span>
      </h3>
      <div class="card-toolbar">
        <div class="d-flex">
          <select
            class="form-select form-select-sm"
            aria-label="Select example"
          >
            <option>Grup Kod</option>
            <option v-for="i in 5" :key="i" :value="i">Kod {{ i }}</option>
          </select>
          <select
            class="form-select form-select-sm "
            aria-label="Select example"
          >
            <option>Yıllık</option>
            <option>Haftalık</option>
            <option>Aylık</option>
            <option>Günlük</option>
          </select>
        </div>
      </div>
    </div>
    <div class="card-body pt-0 pb-3 px-0">
      <apexchart :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>


<script lang="ts">
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          width: 500,
          type: "donut",
        },
        responsive: [{
              breakpoint: 1000,
              options: {
                chart: {
                  width: 500
                },
                legend: {
                  position: 'bottom'
                }
              }
            }],
        labels: [
            "İstavroz GU/H",
            "6200",
            "6300",
            "AKS RULMANI DAC/13AH/VKBC/BWD",
            "İNÇ KRONİK RULMAN",
            "3000",
            "KLİMA",
            "6000",
            "ŞANZUMAN 62/22 DG/B17-99",
            "YAĞ KEÇESİ FEKO/SKT/FDT/CORTEG",
          ],
      },
      series: [12, 90, 24, 56, 61, 58, 36, 74, 41, 76],
    };
  },
};
</script>