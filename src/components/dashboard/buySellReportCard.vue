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
              <th class="min-w-150px">Tutar (TL)</th>
              <th class="min-w-140px">Dovizli Tutar</th>
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
          title: "12.219.853,82",
          value: "3.476,86",
        },
      ],
    };
  },
};
</script>