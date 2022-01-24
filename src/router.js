import { createWebHistory, createRouter } from "vue-router";



const routes=[
    {
      path: "/",
      alias: "/login",
      name: "Login",
      component: () => import("./components/Login/login")
    },
    {
      path: "/new_repair",
      name: "New Repair",
      component: () => import("./components/NewRepair/newRepair")
    },
  ];
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;

