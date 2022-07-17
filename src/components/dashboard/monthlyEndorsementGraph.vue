<template>
  <div class="card shadow">
    <div class="card-header border-0">
      <div class="card-title m-0">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label fw-bold fs-3 mb-1">Aylık Ciro Grafiği</span>
          <span class="text-muted fw-semobold fs-7"
            ></span
          >
        </h3>
      </div>
    </div>
    <div class="card-body pt-0 pb-3 px-9">
      <apexchart
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>


<script lang="ts">

import VueApexCharts from "vue3-apexcharts";

export default {
  components:{
    'apexchart': VueApexCharts
  },
  data(){
    return {
      chartOptions: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
            },
            yaxis: {
              title: {
                text: 'Miktar x 1000 TRY'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return val*1000 + " TRY"
                }
              }
            }
      },
      series : [
      {
        name: "Dovizli KDV Hariç",
        data: [44, 55, 57, 56, 61, 58, 36, 74, 41, 76, 11, 24],
      },
      {
        name: "KDV Hariç",
        data: [76, 85, 101, 98, 87, 105, 77, 42, 9, 41, 66, 89],
      },
    ]

    }
  }
}


</script>