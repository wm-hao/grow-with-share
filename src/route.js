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
import RouterPathConst from "./const/RouterConst";
import AccountBalance from "./components/asset/AccountBalance";
import JournalPanel from "./components/journal/JournalPanel";

Vue.use(VueRouter);

const routes = [
    {
        path: RouterPathConst.pathBase,
        redirect: RouterPathConst.pathDashBoardIndex
    },
    {
        path: RouterPathConst.pathDashBoard,
        name: RouterPathConst.pathDashBoard,
        component: DashBoard,
        children: [
            {
                path: RouterPathConst.pathDashBoardIndex,
                name: RouterPathConst.pathDashBoardIndex,
                component: SystemIndex,
            },
            {
                path: RouterPathConst.pathDashBoardTradeQuery,
                name: RouterPathConst.pathDashBoardTradeQuery,
                component: TradeQuery,
            },
            {
                path: RouterPathConst.pathDashBoardJournal,
                name: RouterPathConst.pathDashBoardJournal,
                component: JournalPanel
            },
            {
                path: RouterPathConst.pathDashBoardTradeEdit,
                name: RouterPathConst.pathDashBoardTradeEdit,
                component: TradeEdit,
                children: [
                    {
                        path: RouterPathConst.pathDashBoardTradeInsert,
                        name: RouterPathConst.pathDashBoardTradeInsert,
                        component: TradeInsert,
                    },
                    {
                        path: RouterPathConst.pathDashBoardTradeImport,
                        name: RouterPathConst.pathDashBoardTradeImport,
                        component: TradeImport,
                    },
                ]
            },
            {
                path: RouterPathConst.pathDashBoardChartFrequency,
                name: RouterPathConst.pathDashBoardChartFrequency,
                component: TradeChartFrequency,
                children: [
                    {
                        path: RouterPathConst.pathDashBoardChartFrequencyDays,
                        name: RouterPathConst.pathDashBoardChartFrequencyDays,
                        component: FrequencyDays,
                    },
                    {
                        path: RouterPathConst.pathDashBoardChartFrequencyYearMonth,
                        name: RouterPathConst.pathDashBoardChartFrequencyYearMonth,
                        component: FrequencyYearMonth,
                    },
                ]
            },
            {
                path: RouterPathConst.pathDashBoardChartTop,
                name: RouterPathConst.pathDashBoardChartTop,
                component: TradeChartTop
            },
            {
                path: RouterPathConst.pathDashBoardChartProfit,
                name: RouterPathConst.pathDashBoardChartProfit,
                component: TradeChartProfit,
            },
            {
                path: RouterPathConst.pathDashBoardChartKeep,
                name: RouterPathConst.pathDashBoardChartKeep,
                component: TradeChartKeepDuration,
            },
            {
                path: RouterPathConst.pathDashBoardAsset,
                name: RouterPathConst.pathDashBoardAsset,
                component: AccountBalance
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
