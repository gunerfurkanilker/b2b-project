<template>
  <div class="card shadow">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <!--begin::Icon-->
        <div class="symbol symbol-45px w-15px me-5">
          <i class="bi bi-gear-fill fs-1"></i>
        </div>
        <!--end::Icon-->
        <!--begin::Title-->
        <h6 class="fs-5 text-hover-primary m-0">Ayarlar</h6>
        <!--end::Title-->
      </div>
      <div class="card-toolbar"></div>
      <!--end::Card title-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0 pb-3 px-9">
      <!--begin::Heading-->
      <el-tabs
        :tab-position="'top'"
        class="demo-tabs"
      >
        <el-tab-pane label="ERP AYARLARI">
          <ERPSettings></ERPSettings>
        </el-tab-pane>
        <el-tab-pane label="AYARLAR">Config</el-tab-pane>
        <el-tab-pane label="MAİL AYARLARI">Role</el-tab-pane>
        <el-tab-pane label="KARGO LİSTESİ">Task</el-tab-pane>
      </el-tabs>
      
      <!--end::Heading-->
    </div>
    <!--end::Card body-->
  </div>
</template>

<script lang="ts">
import Swal from "sweetalert2/dist/sweetalert2.js";

import ERPSettings from "@/components/settings/ERPSettings.vue"

export default {
  components: {
    ERPSettings
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
    confirm() {
      Swal.fire({
        text: "Kullanıcı Başvurusu Kabul Edildi",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Tamam",
        customClass: {
          confirmButton: "btn btn-primary",
        },
      }).then(() => {});
    },
    rejectPrompt() {
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
        },
      }).then((confirm) => {
        if (confirm.isConfirmed) this.reject();
      });
    },
    reject() {
      Swal.fire({
        text: "Kullanıcı Başvurusu Reddedildi",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Tamam",
        customClass: {
          confirmButton: "btn btn-primary",
        },
      }).then(() => {});
    },
  },
};
</script>