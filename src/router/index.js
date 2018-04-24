import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = resolve => require(['@/views/Home.vue'],resolve);
const Workbench = resolve => require(['@/views/workbench/index.vue'], resolve);
const InfomationPush = resolve => require(['@/views/infomation-push/index.vue'], resolve);
const InfomationPushList = resolve => require(['@/views/infomation-push-list/index.vue'], resolve);
const PromotionalContentPush = resolve => require(['@/views/promotional-content-push/index.vue'], resolve);
const WorkbenchIconManagement = resolve => require(['@/views/workbench-icon-management/index.vue'], resolve);
const ApprovalIconManagement = resolve => require(['@/views/approval-icon-management/index.vue'], resolve);
const NotFound = resolve => require(['@/views/404.vue'],resolve);

let routes = [
    {
        path: '/home',
        component: Home,
        name: 'Home',
        children: [
            {
                path: 'workbench',
                component: Workbench,
                name: 'Workbench',
            },
            {
                path: 'infomationPush',
                component: InfomationPush,
                name: 'InfomationPush',
            },
            {
                path: 'infomationPushList',
                component: InfomationPushList,
                name: 'InfomationPushList',
            },
            {
                path: 'promotionalContentPush',
                component: PromotionalContentPush,
                name: 'PromotionalContentPush',
            },
            {
                path: 'workbenchIconManagement',
                component: WorkbenchIconManagement,
                name: 'WorkbenchIconManagement',
            },
            {
                path: 'approvalIconManagement',
                component: ApprovalIconManagement,
                name: 'ApprovalIconManagement',
            }
        ]
    },
    {
        path: '/',
        redirect: { path: '/home/workbench' }
    },
    {
        path: '/404',
        component: NotFound,
    },
    {
        path: '*',
        component: NotFound,
    }
];

const router = new VueRouter({
	mode: 'history',       // 需要后台配置支持
	routes
})

router.beforeEach((to, from, next) => {
	next();
})


export default router;