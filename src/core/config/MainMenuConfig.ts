const DocMenuConfig = [
  {
    pages: [
      {
        heading: "Anasayfa",
        route: "/dashboard",
        svgIcon: "media/icons/duotune/art/art002.svg",
        fontIcon: "bi-graph-up",
      },
      {
        heading: "Ürün Arama",
        route: "/builder",
        svgIcon: "media/icons/duotune/general/gen019.svg",
        fontIcon: "bi-search",
      },
      {
        sectionTitle: "Cari",
        route: "/pages",
        svgIcon: "media/icons/duotune/general/gen022.svg",
        fontIcon: "bi-building",
        sub: [
          {
            heading: "Cari Listesi",
            route: "/crafted/pages/profile/overview",
          },
          {
            heading: "Yeni Cari",
            route: "/crafted/pages/profile/projects",
          },
          {
            heading: "Onaydaki Cariler",
            route: "/crafted/pages/profile/campaigns",
          },
          {
            heading: "B2B Carileri",
            route: "/crafted/pages/profile/documents",
          },
        ],
      },
      {
        sectionTitle: "Sipariş İşlemleri",
        route: "/pages",
        svgIcon: "media/icons/duotune/general/gen022.svg",
        fontIcon: "bi-bag-check",
        sub: [
          {
            heading: "Siparişler",
            route: "/crafted/pages/profile/overview",
          },
          {
            heading: "B2B Siparişleri",
            route: "/crafted/pages/profile/projects",
          },
          {
            heading: "Bekleyen Siparişler",
            route: "/crafted/pages/profile/campaigns",
          }
        ],
      },
      {
        heading: "Kampanya",
        route: "/builder",
        svgIcon: "media/icons/duotune/general/gen019.svg",
        fontIcon: "bi-bookmark",
      },
      {
        sectionTitle: "Online Tahsilat",
        route: "/pages",
        svgIcon: "media/icons/duotune/general/gen022.svg",
        fontIcon: "bi-credit-card",
        sub: [
          {
            heading: "Tahsilat Yap",
            route: "/crafted/pages/profile/overview",
          },
          {
            heading: "Tahsilatlar",
            route: "/crafted/pages/profile/projects",
          }
        ],
      },
      {
        heading: "Teklif",
        route: "/builder",
        svgIcon: "media/icons/duotune/general/gen019.svg",
        fontIcon: "bi-arrow-left-right",
      },
      {
        heading: "Takvim",
        route: "/builder",
        svgIcon: "media/icons/duotune/general/gen019.svg",
        fontIcon: "bi-calendar",
      },

      {
        sectionTitle: "Yönetim",
        svgIcon: "media/icons/duotune/general/gen022.svg",
        fontIcon: "bi-gear",
        sub: [
          {
            heading: "Kullanıcı Yönetimi",
            route: "/user-management",
          },
          {
            heading: "Kullanıcı Başvuruları",
            route: "/user-applicants",
          },
          {
            heading: "Ayarlar",
            route: "/settings",
          },
          {
            heading: "Duyurular",
            route: "/crafted/pages/profile/projects",
          },
          {
            heading: "Pos Yönetimi",
            route: "/crafted/pages/profile/projects",
          },
          {
            heading: "Slider Yönetimi",
            route: "/crafted/pages/profile/projects",
          },
          {
            heading: "Ödeme Tipleri",
            route: "/crafted/pages/profile/projects",
          },
          {
            heading: "Sepet Kategorileri",
            route: "/crafted/pages/profile/projects",
          },
          {
            heading: "Stok Kategorileri",
            route: "/crafted/pages/profile/projects",
          },
          {
            heading: "Detaylı Raporlama",
            route: "/crafted/pages/profile/projects",
          },
          {
            heading: "Hedefler",
            route: "/crafted/pages/profile/projects",
          },
          {
            heading: "Potansiyeller",
            route: "/crafted/pages/profile/projects",
          },
          {
            heading: "Takvim Kategorileri",
            route: "/crafted/pages/profile/projects",
          }
          
        ],
      },


    ],
  },
];

export default DocMenuConfig;
