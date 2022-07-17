<template>
  <div>
    <div class="table-responsive">
      <!--begin::Table-->
      <div class="w-100 py-5 text-end">
        <button
          href="#"
          class="btn btn-sm btn-primary m-1"
          @click="openAddCompanyDialog"
        >
          <i class="bi bi-truck fs-3"></i> Firma Ekle
        </button>
      </div>
      <table
        class="table table-hover table-rounded table-striped border gy-7 gs-7"
      >
        <!--begin::Table head-->
        <thead>
          <tr class="fw-bold">
            <th class="min-w-150px">Kargo Firma Adı</th>
            <th class="min-w-140px">Durum</th>
            <th class="min-w-200px text-center">İşlem</th>
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
              <td class="text-center">
                <button
                  type="button"
                  class="btn btn-sm btn-icon btn-warning me-2"
                  @click="openEditCompanyDialog"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Düzenle"
                >
                  <i class="bi bi-pencil-fill fs-7"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-icon btn-danger me-2"
                  @click="deletePrompt"
                  ata-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Firmayı Sil"
                >
                  <i class="bi bi-trash fs-7"></i>
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
    <CargoCompanyCreateDialog @dialogClose="closeAddCompanyDialog"
      :showDialog="addCompanyDialog"></CargoCompanyCreateDialog>
    <CargoCompanyEditDialog @dialogClose="closeEditCompanyDialog"
      :showDialog="editCompanyDialog"></CargoCompanyEditDialog>
  </div>
</template>

<script>

import CargoCompanyCreateDialog from "@/components/settings/CargoCompanyCreateDialog.vue";
import CargoCompanyEditDialog from "@/components/settings/CargoCompanyEditDialog.vue";

import Swal from "sweetalert2/dist/sweetalert2.js";

export default {
  components: {
    CargoCompanyCreateDialog,
    CargoCompanyEditDialog
  },
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {

      addCompanyDialog: false,
      editCompanyDialog: false,
      dataList: [
        {
          cell1: "00",
          cell2: "MERKEZ",
          
        },
        {
          cell1: "01",
          cell2: "BÜLENT CULUM",
        },
      ],

    };
  },
  methods: {
    openAddCompanyDialog() {
      this.addCompanyDialog = true;
    },
    closeAddCompanyDialog() {
      this.addCompanyDialog = false;
    },
    openEditCompanyDialog() {
      this.editCompanyDialog = true;
    },
    closeEditCompanyDialog() {
      this.editCompanyDialog = false;
    },
    deletePrompt() {
      Swal.fire({
        text: "Firmayı Silmek İstediğinize Emin Misiniz ?",
        icon: "warning",
        buttonsStyling: false,
        confirmButtonText: "Evet",
        showCancelButton: true,
        cancelButtonText: "İptal",
        customClass: {
          confirmButton: "btn btn-danger",
          cancelButton: "btn btn-secondary",
        },
      }).then((confirm) => {
        if (confirm.isConfirmed) this.deleteCompany();
      });
    },
    deleteCompany() {
      Swal.fire({
        text: "Firma Silindi",
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