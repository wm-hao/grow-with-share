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
import Blank from "./components/util/Blank";
import ProfitQry from "./components/chart/profit/ProfitQry";
import ProfitView from "./components/chart/profit/ProfitView";
import UserLogin from "./components/user/UserLogin";
import {USER_ID} from "./const/Constant";
import Book from "./components/books/Book";
import DailyConsumption from "./components/daily/consumption/DailyConsumption";
import Chance from "./components/chances/Chance";
import ChanceFile from "./components/chances/ChanceFile";
import ChanceList from "./components/chances/ChanceList";

Vue.use(VueRouter);

const routes = [
    {
        path: RouterPathConst.pathLogin,
        name: RouterPathConst.pathLogin,
        component: UserLogin,
    },
    {
        path: RouterPathConst.pathBlank,
        component: Blank
    },
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
                path: RouterPathConst.pathDashBoardDailyConsumption,
                name: RouterPathConst.pathDashBoardDailyConsumption,
                component: DailyConsumption,
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
                children: [
                    {
                        path: RouterPathConst.pathDashBoardChartProfitQry,
                        name: RouterPathConst.pathDashBoardChartProfitQry,
                        component: ProfitQry,
                    },
                    {
                        path: RouterPathConst.pathDashBoardChartProfitView,
                        name: RouterPathConst.pathDashBoardChartProfitView,
                        component: ProfitView,
                    },
                ]
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
            },
            {
                path: RouterPathConst.pathDashBoardBook,
                name: RouterPathConst.pathDashBoardBook,
                component: Book
            },
            {
                path: RouterPathConst.pathDashBoardChance,
                name: RouterPathConst.pathDashBoardChance,
                component: Chance,
                children: [
                    {
                        path: RouterPathConst.pathDashBoardChanceList,
                        name: RouterPathConst.pathDashBoardChanceList,
                        component: ChanceList,
                    },
                    {
                        path: RouterPathConst.pathDashBoardChanceFile,
                        name: RouterPathConst.pathDashBoardChanceFile,
                        component: ChanceFile,
                    },
                ]
            },
        ]
    }
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.path === RouterPathConst.pathLogin) {
        next();
    } else {
        let userId = sessionStorage.getItem(USER_ID);
        if (!userId || userId === 'null' || userId === '') {
            next(RouterPathConst.pathLogin);
        } else {
            next();
        }
    }
});


export default router
