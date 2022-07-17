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
        
      </div>
      <!--end::Card title-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0 pb-3 px-9">
      <!--begin::Heading-->
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
            <select
              class="form-select form-select-sm my-3"
              aria-label="Select example"
            >
              <option>Miktar => Küçükten Büyüğe</option>
              <option>TL Fiyat => Küçükten Büyüğe</option>
              <option>Dovizli Fiyat => Küçükten Büyüğe</option>
            </select>
          </div>
          <div class="col-md-4">
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
          <div class="col-md-4">
            <div class="input-group input-group-sm my-3">
            <input
              type="text"
              class="form-control form-control-sm"
              placeholder="Filtreleme"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            

              <button type="button" class="btn btn-primary btn-sm" @click="tableData = []"><i class="bi bi-search fs-6"></i></button>
           
            </div>
          </div>
        </div>
            
        
          
            
          
        </div>
      <KTDatatable
        :table-header="tableHeaders"
        :table-data="tableData"
        :total="tableData.length"
        :rowsPerPage="3"
      >
        <template v-slot:cell-name="{ row: data }">
          {{ data.name }}
        </template>
        <template v-slot:cell-position="{ row: data }">
          {{ data.position }}
        </template>
        <template v-slot:cell-office="{ row: data }">
          {{ data.office }}
        </template>
        <template v-slot:cell-age="{ row: data }">
          {{ data.age }}
        </template>
        <template v-slot:cell-startDate="{ row: data }">
          {{ data.startDate }}
        </template>
        <template v-slot:cell-salary="{ row: data }">
          {{ data.salary }}
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
      test:false,
      tableHeaders: [
        {
          name: "Name",
          key: "name",
        },
        {
          name: "Position",
          key: "position",
        },
        {
          name: "Office",
          key: "office",
        },
        {
          name: "Age",
          key: "age",
        },
        {
          name: "Start date",
          key: "startDate",
        },
        {
          name: "Salary",
          key: "salary",
        },
      ],
      tableData: [
        {
          name: "Tiger Nixon",
          position: "System Architect",
          office: "Edinburgh",
          age: "61",
          startDate: "2011/04/25",
          salary: "$320,800",
        },
        {
          name: "Garrett Winters",
          position: "Accountant",
          office: "Tokyo",
          age: "63",
          startDate: "2011/07/25",
          salary: "$170,750",
        },
        {
          name: "Garrett Winters",
          position: "Accountant",
          office: "Tokyo",
          age: "63",
          startDate: "2011/07/25",
          salary: "$170,750",
        },
        {
          name: "Garrett Winters",
          position: "Accountant",
          office: "Tokyo",
          age: "63",
          startDate: "2011/07/25",
          salary: "$170,750",
        },
        {
          name: "Garrett Winters",
          position: "Accountant",
          office: "Tokyo",
          age: "63",
          startDate: "2011/07/25",
          salary: "$170,750",
        },
        {
          name: "Garrett Winters",
          position: "Accountant",
          office: "Tokyo",
          age: "63",
          startDate: "2011/07/25",
          salary: "$170,750",
        },
        {
          name: "Garrett Winters",
          position: "Accountant",
          office: "Tokyo",
          age: "63",
          startDate: "2011/07/25",
          salary: "$170,750",
        },
        {
          name: "Garrett Winters",
          position: "Accountant",
          office: "Tokyo",
          age: "63",
          startDate: "2011/07/25",
          salary: "$170,750",
        },
        {
          name: "Garrett Winters",
          position: "Accountant",
          office: "Tokyo",
          age: "63",
          startDate: "2011/07/25",
          salary: "$170,750",
        },
        {
          name: "Garrett Winters",
          position: "Accountant",
          office: "Tokyo",
          age: "63",
          startDate: "2011/07/25",
          salary: "$170,750",
        },
      ],
    };
  },
};
</script>