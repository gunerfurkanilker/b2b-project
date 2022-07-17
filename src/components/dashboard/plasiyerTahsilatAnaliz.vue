<template>
  <div class="card shadow">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <!--begin::Icon-->
        <div class="symbol symbol-45px w-15px me-5">
          <i class="bi bi-file-ruled fs-1"></i>
        </div>
        <!--end::Icon-->
        <!--begin::Title-->
        <a href="#" class="fs-5 text-hover-primary m-0">
          {{ title }}
        </a>
        <!--end::Title-->
      </div>
      <div class="card-toolbar">
        <select class="form-select form-select-sm" aria-label="Select example">
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
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="table table-hover table-rounded table-striped border gy-7 gs-7"
        >
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bold">
              <th class="min-w-150px">Plasiyer Kodu</th>
              <th class="min-w-140px">Plasiyer Adı</th>
              <th class="min-w-140px">KDV Dahil Satış Tutarı (TL)	</th>
              <th class="min-w-140px">Toplam Tahsilat Tutarı</th>
              <th class="min-w-140px">Nakit Tahsilat Tutarı	</th>
              <th class="min-w-140px">Çek Tahsilat Tutarı</th>
              <th class="min-w-140px">Dekont Tahsilat Tutarı</th>
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

              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Heading-->
    </div>
    <!--end::Card body-->
  </div>
</template>

<script lang="ts">
export default {
  props:{
    title: {
      type:String
    }
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
        },
        {
          cell1: "01",
          cell2: "BÜLENT CULUM",
          cell3: "2.576.790,75",
          cell4: "1.713.944,67",
          cell5: "823.151,23",
          cell6: "389.769,64",
          cell7: "305.418,80",
        },
      ],
    };
  },
};
</script>