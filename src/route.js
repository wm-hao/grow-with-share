import Vue from 'vue';
import VueRouter from 'vue-router';
import DashBoard from "./components/DashBoard";
import SystemIndex from "./components/home/SystemIndex";
import TradeEdit from "./components/trade/TradeEdit";
import TradeQuery from "./components/trade/TradeQuery";
import TradeInsert from "./components/trade/TradeInsert";
import TradeImport from "./components/trade/TradeImport";
import TradeChartFrequency from "./components/chart/TradeChartFrequency";
import TradeChartTop from "./components/chart/TradeChartTop";
import TradeChartProfit from "./components/chart/TradeChartProfit";
import TradeChartKeepDuration from "./components/chart/TradeChartKeepDuration";
import FrequencyYearMonth from "./components/chart/frequency/FrequencyYearMonth";
import FrequencyDays from "./components/chart/frequency/FrequencyDays";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/dashboard/index'
    },
    {
        path: '/dashboard',
        name: 'DashBoard',
        component: DashBoard,
        children: [
            {
                path: '/dashboard/index',
                name: 'Index',
                component: SystemIndex,
            },
            {
                path: '/dashboard/trade/query',
                name: 'TradeQuery',
                component: TradeQuery,
            },
            {
                path: '/dashboard/trade/edit',
                name: 'TradeEdit',
                component: TradeEdit,
                children: [
                    {
                        path: '/dashboard/trade/edit/insert',
                        name: 'TradeEditInsert',
                        component: TradeInsert,
                    },
                    {
                        path: '/dashboard/trade/edit/import',
                        name: 'TradeEditImport',
                        component: TradeImport,
                    },
                ]
            },
            {
                path: '/dashboard/chart/frequency',
                name: 'TradeChartFrequency',
                component: TradeChartFrequency,
                children: [
                        {
                            path: '/dashboard/chart/frequency/days',
                            name: 'TradeChartFrequencyDays',
                            component: FrequencyDays,
                        },
                        {
                            path: '/dashboard/chart/frequency/yearmonth',
                            name: 'TradeChartFrequencyYearMonth',
                            component: FrequencyYearMonth,
                        },
                    ]
            },
            {
                path: '/dashboard/chart/top',
                name: 'TradeChartTop',
                component: TradeChartTop,
            },
            {
                path: '/dashboard/chart/profit',
                name: 'TradeChartProfit',
                component: TradeChartProfit,
            },
            {
                path: '/dashboard/chart/keep',
                name: 'TradeChartKeepDuration',
                component: TradeChartKeepDuration,
            }
        ]
    }
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    next();
});


export default router
