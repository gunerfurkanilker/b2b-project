<template>
  <div class="card shadow">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <!--begin::Icon-->
        <div class="symbol symbol-45px w-15px me-5">
          <i
            class="bi bi-clipboard-data fs-3"
          ></i>
        </div>
        <!--end::Icon-->
        <!--begin::Title-->
        <a href="#" class="fs-7 text-hover-primary m-0">
          {{ title }}
        </a>
        <!--end::Title-->
      </div>
      <!--end::Card title-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0 pb-3 px-9">
      <!--begin::Heading-->
      <div class="fs-3 fw-bold text-hover-inverse-light">
        {{ number }}
      </div>
      <div class="fs-9 fw-bold text-hover-inverse-light">
        Tüm Zamanlar
      </div>
      <!--end::Heading-->
    </div>
    <!--end::Card body-->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    number: {
      type: String,
    }
  },
};
</script>