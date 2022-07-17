<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <div class="card shadow">
          <div class="card-title text-center pt-5 mt-5">
            <h6>Kullanıcı Düzenle</h6>
          </div>
          <div class="card-body">
            <div class="container">
              <div class="row">
                <div class="col-md-12 py-5 text-center">
                  <div
                    class="symbol symbol-100px symbol-circle mb-7"
                    style="position: relative"
                  >
                    <img src="media/avatars/300-1.jpg" alt="image" />
                  </div>
                </div>
                <div class="col-md-6 py-5">
                  <label class="form-label">Ad(*)</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Ad"
                  />
                </div>
                <div class="col-md-6 py-5">
                  <label class="form-label">Soyad(*)</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Soyad"
                  />
                </div>
                <div class="col-md-6 py-5">
                  <label class="form-label">T.C Kimlik No(*)</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="T.C Kimlik No"
                  />
                </div>
                <div class="col-md-6 py-5">
                  <label class="form-label">E-Mail(*)</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="E-Mail"
                  />
                </div>
                <div class="col-md-6 py-5">
                  <label class="form-label">Kullanıcı Adı(*)</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="E-Mail"
                  />
                </div>
                <div class="col-md-6 py-5">
                  <label class="form-label">Şifre(*)</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Şifre"
                  />
                </div>
                <div class="col-md-6 py-5">
                  <label class="form-label">Telefon(*)</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Telefon"
                  />
                </div>
                <div class="col-md-6 py-5">
                  <label class="form-label">Role Grup(*)</label>
                  <select class="form-select form-select-sm">
                    <option>Role Grup Seçin</option>
                    <option>Yönetici</option>
                    <option>Plasiyer</option>
                    <option>Müşteri</option>
                  </select>
                </div>
                <div class="col-md-6 py-5">
                  <label class="form-label">Role(*)</label>
                  <select class="form-select form-select-sm">
                    <option>Yönetici</option>
                    <option>Muhasebe</option>
                  </select>
                </div>
                <div class="col-md-6 py-5">
                  <label class="form-label">Plasiyer Kodu(*)</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Plasiyer Kodu"
                  />
                </div>
                <div class="col-md-6 py-5">
                  <label class="form-label">Cari Kodu(*)</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Cari Kodu"
                  />
                </div>
                <div class="col-md-12 py-5 text-end">
                  <button class="btn btn-sm btn-primary">
                    <i class="bi bi-save fs-3"></i> Kaydet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>