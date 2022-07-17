import { createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory } from "vue-router";
import store from "@/store";
import { Mutations, Actions } from "@/store/enums/StoreEnums";
import JwtService from "@/core/services/JwtService";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/dashboard.vue"),
      },
      {
        path: "/user-management",
        name: "userManagement",
        redirect: "/user-management/user-list",
        children:[
          {
            path: "user-list",
            name: "userList",
            component: () => import("@/views/administration/user-management/UserList.vue"),
          },
          {
            path: "add-user",
            name: "addUser",
            component: () => import("@/views/administration/user-management/AddUser.vue"),
          },
          {
            path: "edit-user/:id",
            name: "editUser",
            component: () => import("@/views/administration/user-management/EditUser.vue"),
          },

        ]
      },
      {
        path: "/user-applicants",
        name: "userApplicants",
        component: () => import("@/views/administration/user-applicants/UserApplicantsList.vue"),
      },
      {
        path: "/settings",
        name: "settings",
        component: () => import("@/views/administration/settings/Settings.vue"),
      },

    ],
  },
  {
    path: "/",
    component: () => import("@/components/page-layouts/Auth.vue"),
    children: [
      {
        path: "/sign-in",
        name: "sign-in",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignIn.vue"),
      },
      {
        path: "/sign-up",
        name: "sign-up",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignUp.vue"),
      },
      {
        path: "/password-reset",
        name: "password-reset",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/PasswordReset.vue"),
      },
    ],
  },
  {
    // the 404 route, when none of the above matches
    path: "/404",
    name: "404",
    component: () => import("@/views/on-build/OnBuild.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  // reset config to initial state
  store.commit(Mutations.RESET_LAYOUT_CONFIG);

  store.dispatch(Actions.VERIFY_AUTH, { api_token: JwtService.getToken() });

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
