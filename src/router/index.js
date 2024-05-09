import { createRouter, createWebHistory } from "vue-router";

const gen403Routes = (pathList) => {
    return pathList.map((path) => ({
        path: path,
        component: () => import("../views/403.vue"),
    }));
};

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: () => import("../views/HomeView.vue"),
        },
        {
            path: "/issue/overview",
            component: () => import("../views/issue/OverView.vue"),
        },
        // 403 (Not Complete Pages) (Only For Deploy Environment)
        ...gen403Routes([
            "/intro",
            "/issue/label",
            "/issue/changetrend",
            "/disc/overview",
            "/disc/catgory",
            "/disc/changetrend",
        ]),
        // 404
        {
            path: "/:pathMatch(.*)*",
            component: () => import("../views/404.vue"),
        },
    ],
});

export default router;
