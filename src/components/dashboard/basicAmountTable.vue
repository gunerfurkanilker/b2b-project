<template>
  <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="table table-hover table-rounded table-striped border gy-7 gs-7"
        >
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bold">
              <th class="min-w-150px">Başlık</th>
              <th class="min-w-140px">Değer</th>
              <th class="min-w-120px">Periyot</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in dataList" :key="index">
              <tr>
                <td>
                  {{ item.title }}
                </td>
                <td>
                  {{ item.value }}
                </td>
                <td>
                  {{ item.period }}
                </td>
              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
</template>

<script lang="ts">

export default {
  data(){
    return {
      dataList:[
        {
          title: 'Toplam Stok Tutarı',
          value: '7.601.763,28 TRY',
          period: 'Tüm Zamanlar'
        },
        {
          title: 'Toplam Tedarikçi',
          value: '53',
          period: 'Tüm Zamanlar'
        },
        {
          title: 'Toplam B2B Sipariş Tutarı',
          value: '23.865.469,27 TRY',
          period: 'Tüm Zamanlar'
        },
        {
          title: 'Toplam ERP Müşteri Sayısı',
          value: '1227',
          period: 'Tüm Zamanlar'
        },
        {
          title: 'Toplam ERP Sipariş Sayısı',
          value: '3383',
          period: 'Tüm Zamanlar'
        },
        {
          title: 'Toplam Teklif Sayısı',
          value: '0',
          period: 'Tüm Zamanlar'
        },
        {
          title: 'Toplam B2B Müşteri Sayısı',
          value: '1341',
          period: 'Tüm Zamanlar'
        },
        {
          title: 'Toplam B2B Sipariş Sayısı',
          value: '4973',
          period: 'Tüm Zamanlar'
        },
        {
          title: 'Toplam ERP Sipariş Tutarı',
          value: '21.061.694,28 TRY',
          period: 'Tüm Zamanlar'
        },
        {
          title: 'Toplam Teklif Satış Tutarı',
          value: '0,00 TRY',
          period: 'Tüm Zamanlar'
        },
        {
          title: 'Toplam Alacak Tutarı',
          value: '22.898.176,17 TRY',
          period: 'Tüm Zamanlar'
        },
        {
          title: 'Toplam Borç Tutarı',
          value: '-154.413,35 TRY',
          period: 'Tüm Zamanlar'
        },

      ]
    }
  }
}

</script>