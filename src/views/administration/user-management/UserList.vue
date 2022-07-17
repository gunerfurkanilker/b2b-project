<template>
  <div class="card shadow">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <!--begin::Icon-->
        <div class="symbol symbol-45px w-15px me-5">
          <i class="bi bi-person-lines-fill fs-1"></i>
        </div>
        <!--end::Icon-->
        <!--begin::Title-->
        <h6 class="fs-5 text-hover-primary m-0"> Kullanıcı Listesi </h6>
        <!--end::Title-->
      </div>
      <div class="card-toolbar">
        <button href="#" class="btn btn-sm btn-success m-1">
          <i class="bi bi-file-earmark-excel-fill fs-3"></i> Excel
        </button>
        <button href="#" class="btn btn-sm btn-danger m-1">
          <i class="bi bi-file-pdf-fill fs-3"></i> PDF
        </button>
        <button href="#" class="btn btn-sm btn-dark m-1">
          <i class="bi bi-printer-fill fs-3"></i> Yazdır
        </button>
        <button
          href="#"
          class="btn btn-sm btn-primary m-1"
          @click="openUserCreateDialog"
        >
          <i class="bi bi-person-plus-fill fs-3"></i> Kullanıcı Ekle
        </button>
      </div>
      <!--end::Card title-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0 pb-3 px-9">
      <!--begin::Heading-->
      <div class="d-flex py-3 w-100">
        <div>
          <span class="fs-6 text-muted my-auto mx-1">Sayfada</span>
          <div
            class="btn-group btn-group-sm"
            role="group"
            aria-label="First group"
          >
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio1"
              autocomplete="off"
              checked
            />
            <label class="btn btn-secondary" for="btnradio1">10</label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
            />
            <label class="btn btn-secondary" for="btnradio2">20</label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio3"
              autocomplete="off"
            />
            <label class="btn btn-secondary" for="btnradio3">30</label>
          </div>
          <span class="fs-6 text-muted my-auto mx-1">Kayıt Göster</span>
        </div>
        <div class="ms-auto">
          <div class="input-group">
            <input
              type="text"
              class="form-control form-control-sm"
              placeholder="Filtreleme"
            />

            <button
              type="button"
              class="btn btn-primary btn-sm"
              @click="tableData = []"
            >
              <i class="bi bi-search fs-6"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="table table-hover table-rounded table-striped border gy-7 gs-7"
        >
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bold">
              <th class="min-w-150px">Ad Soyad</th>
              <th class="min-w-140px">E-Posta</th>
              <th class="min-w-140px">Telefon</th>
              <th class="min-w-140px">Cari Kod</th>
              <th class="min-w-140px">Plasiyer Kod</th>
              <th class="min-w-140px">Son Giriş Tarihi</th>
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
                <td class="text-center">
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-warning me-2"
                    @click="openUserEditDialog"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Düzenle"
                  >
                    <i class="bi bi-pencil-fill fs-7"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-secondary me-2"
                    @click="openChangePasswordDialog"
                    ata-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Şifre Değiştir"
                  >
                    <i class="bi bi-key-fill fs-7"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-icon btn-danger me-2"
                    @click="deletePrompt"
                    ata-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Kullanıcıyı Sil"
                  >
                    <i class="bi bi-person-dash-fill fs-7"></i>
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
      <!--end::Heading-->
    </div>
    <!--end::Card body-->
    <ChangePasswordDialog
      @dialogClose="closeChangePasswordDialog"
      :changePasswordDialog="changePasswordDialog"
    ></ChangePasswordDialog>
    <UserCreateDialog
      @dialogClose="closeUserCreateDialog"
      :userCreateDialog="userCreateDialog"
    ></UserCreateDialog>
    <UserEditDialog
      @dialogClose="closeUserEditDialog"
      :userEditDialog="userEditDialog"
    ></UserEditDialog>
  </div>
</template>

<script lang="ts">

import ChangePasswordDialog from "@/components/user-management/ChangePasswordDialog.vue";
import UserCreateDialog from "@/components/user-management/UserCreateDialog.vue";
import UserEditDialog from "@/components/user-management/UserEditDialog.vue";

import Swal from "sweetalert2/dist/sweetalert2.js";

export default {
  components: {
    ChangePasswordDialog,
    UserCreateDialog,
    UserEditDialog,
  },
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      changePasswordDialog: false,
      userCreateDialog: false,
      userEditDialog: false,
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
  methods: {
    openChangePasswordDialog :() => {
      this.changePasswordDialog = true;
    },
    closeChangePasswordDialog:() => {
      this.changePasswordDialog = false;
    },
    openUserCreateDialog:() => {
      this.userCreateDialog = true;
    },
    closeUserCreateDialog:() => {
      this.userCreateDialog = false;
    },
    openUserEditDialog:() => {
      this.userEditDialog = true;
    },
    closeUserEditDialog:() => {
      this.userEditDialog = false;
    },
    deletePrompt:() =>{
      Swal.fire({
          text: "Kullanıcıyı Silmek İstediğinize Emin Eiminiz",
          icon: "warning",
          buttonsStyling: false,
          confirmButtonText: "Evet",
          showCancelButton: true,
          cancelButtonText: "İptal",
          customClass: {
            confirmButton: "btn btn-danger",
            cancelButton: "btn btn-secondary",
          }
        }).then((confirm) => {
          if(confirm.isConfirmed)
            this.deleteUser();
        });
    },
    deleteUser:() =>{
      Swal.fire({
          text: "Kullanıcı Silindi",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Tamam",
          customClass: {
            confirmButton: "btn btn-primary",
          },
        }).then(() => {
          
        });
    }
  },
};
</script>