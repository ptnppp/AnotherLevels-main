import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import Process from "./pages/Process.vue";
import SetPriceAuction from "./pages/SetPriceAuction.vue";
import SetPricefix from "./pages/SetPricefix.vue";
import CheckOut2 from "./pages/CheckOut2.vue";
import CheckOut1 from "./pages/CheckOut1.vue";
import CheckOut from "./pages/CheckOut.vue";
import ProfileCreator from "./pages/ProfileCreator.vue";
import AddWallet03 from "./pages/AddWallet03.vue";
import AddWallet02 from "./pages/AddWallet02.vue";
import AddWallet01 from "./pages/AddWallet01.vue";
import UploadArtWork from "./pages/UploadArtWork.vue";
import UploadArtWork1 from "./pages/UploadArtWork1.vue";
import About from "./pages/About.vue";
import DiscoverCreator from "./pages/DiscoverCreator.vue";
import JoinCommunity from "./pages/JoinCommunity.vue";
import MyProfileEdit from "./pages/MyProfileEdit.vue";
import MyProfileEmpty from "./pages/MyProfileEmpty.vue";
import UserProfile from "./pages/UserProfile.vue";
import PlaceABid from "./pages/PlaceABid.vue";
import ConnectWallet from "./pages/ConnectWallet.vue";
import DetailCurrentBid from "./pages/DetailCurrentBid.vue";
import DetailAuction from "./pages/DetailAuction.vue";
import DetailSold from "./pages/DetailSold.vue";
import Search from "./pages/Search.vue";
import SearchPopup from "./pages/SearchPopup.vue";
import Menu from "./pages/Menu.vue";
import Account from "./pages/Account.vue";
import Notification1 from "./pages/Notification1.vue";
import FAQ from "./pages/FAQ.vue";
import Home from "./pages/Home.vue";
import Process1 from "./pages/Process1.vue";
import Process2 from "./pages/Process2.vue";
import SetPriceAuction1 from "./pages/SetPriceAuction1.vue";
import SetPricefix1 from "./pages/SetPricefix1.vue";
import About1 from "./pages/About1.vue";
import DiscoverCreator1 from "./pages/DiscoverCreator1.vue";
import JoinCommunity1 from "./pages/JoinCommunity1.vue";
import MyProfileEdit1 from "./pages/MyProfileEdit1.vue";
import MyProfileEmpty1 from "./pages/MyProfileEmpty1.vue";
import UserProfile1 from "./pages/UserProfile1.vue";
import CheckOut21 from "./pages/CheckOut21.vue";
import CheckOut11 from "./pages/CheckOut11.vue";
import PlaceABid1 from "./pages/PlaceABid1.vue";
import ConnectWallet1 from "./pages/ConnectWallet1.vue";
import CheckOut3 from "./pages/CheckOut3.vue";
import DetailCurrentBid1 from "./pages/DetailCurrentBid1.vue";
import DetailAuction1 from "./pages/DetailAuction1.vue";
import DetailSold1 from "./pages/DetailSold1.vue";
import SearchResult from "./pages/SearchResult.vue";
import SearchPopup1 from "./pages/SearchPopup1.vue";
import Menu1 from "./pages/Menu1.vue";
import Account1 from "./pages/Account1.vue";
import Notification2 from "./pages/Notification2.vue";
import ProfileCreator1 from "./pages/ProfileCreator1.vue";
import FAQ1 from "./pages/FAQ1.vue";
import AddWallet031 from "./pages/AddWallet031.vue";
import AddWallet021 from "./pages/AddWallet021.vue";
import AddWallet011 from "./pages/AddWallet011.vue";
import InsideOpenArt from "./pages/InsideOpenArt.vue";
import DarkmodeProfile from "./pages/DarkmodeProfile.vue";
import DarkmodeSearch from "./pages/DarkmodeSearch.vue";
import DarkmodeItemDetail from "./pages/DarkmodeItemDetail.vue";
import Profile from "./pages/Profile.vue";
import Process3 from "./pages/Process3.vue";
import DarkmodeProcess from "./pages/DarkmodeProcess.vue";
import DarkmodeConnectWallet from "./pages/DarkmodeConnectWallet.vue";
import ConnectWallet2 from "./pages/ConnectWallet2.vue";
import Search1 from "./pages/Search1.vue";
import ItemDetail from "./pages/ItemDetail.vue";
import QuickLink from "./pages/QuickLink.vue";
import QuickLink1 from "./pages/QuickLink1.vue";
import QuickLink2 from "./pages/QuickLink2.vue";
import QuickLink3 from "./pages/QuickLink3.vue";
import ForCreator from "./pages/ForCreator.vue";
import ForCreator1 from "./pages/ForCreator1.vue";
import ForUser from "./pages/ForUser.vue";
import ForUser1 from "./pages/ForUser1.vue";
import ForCreator2 from "./pages/ForCreator2.vue";
import ForCreator3 from "./pages/ForCreator3.vue";
import ForUser2 from "./pages/ForUser2.vue";
import ForUser3 from "./pages/ForUser3.vue";
import Process4 from "./pages/Process4.vue";
import UploadArtWork2 from "./pages/UploadArtWork2.vue";
import UploadArtWork3 from "./pages/UploadArtWork3.vue";
import Home1 from "./pages/Home1.vue";
import "./global.css";

const routes = [
  {
    path: "/",
    name: "Process",
    component: Process,
  },
  {
    path: "/set-priceauction",
    name: "SetPriceAuction",
    component: SetPriceAuction,
  },
  {
    path: "/set-pricefix",
    name: "SetPricefix",
    component: SetPricefix,
  },
  {
    path: "/check-out-2",
    name: "CheckOut2",
    component: CheckOut2,
  },
  {
    path: "/check-out-1",
    name: "CheckOut1",
    component: CheckOut1,
  },
  {
    path: "/check-out",
    name: "CheckOut",
    component: CheckOut,
  },
  {
    path: "/profile-creator",
    name: "ProfileCreator",
    component: ProfileCreator,
  },
  {
    path: "/add-wallet-03",
    name: "AddWallet03",
    component: AddWallet03,
  },
  {
    path: "/add-wallet-02",
    name: "AddWallet02",
    component: AddWallet02,
  },
  {
    path: "/add-wallet-01",
    name: "AddWallet01",
    component: AddWallet01,
  },
  {
    path: "/upload-artwork",
    name: "UploadArtWork",
    component: UploadArtWork,
  },
  {
    path: "/upload-artwork1",
    name: "UploadArtWork1",
    component: UploadArtWork1,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/discover-creator",
    name: "DiscoverCreator",
    component: DiscoverCreator,
  },
  {
    path: "/join-community",
    name: "JoinCommunity",
    component: JoinCommunity,
  },
  {
    path: "/my-profile-edit",
    name: "MyProfileEdit",
    component: MyProfileEdit,
  },
  {
    path: "/my-profile-empty",
    name: "MyProfileEmpty",
    component: MyProfileEmpty,
  },
  {
    path: "/user-profile",
    name: "UserProfile",
    component: UserProfile,
  },
  {
    path: "/place-a-bid",
    name: "PlaceABid",
    component: PlaceABid,
  },
  {
    path: "/connect-wallet",
    name: "ConnectWallet",
    component: ConnectWallet,
  },
  {
    path: "/detail-current-bid",
    name: "DetailCurrentBid",
    component: DetailCurrentBid,
  },
  {
    path: "/detail-auction",
    name: "DetailAuction",
    component: DetailAuction,
  },
  {
    path: "/detail-sold",
    name: "DetailSold",
    component: DetailSold,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/search-popup",
    name: "SearchPopup",
    component: SearchPopup,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/notification",
    name: "Notification1",
    component: Notification1,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQ,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/process",
    name: "Process1",
    component: Process1,
  },
  {
    path: "/process1",
    name: "Process2",
    component: Process2,
  },
  {
    path: "/set-priceauction1",
    name: "SetPriceAuction1",
    component: SetPriceAuction1,
  },
  {
    path: "/set-pricefix1",
    name: "SetPricefix1",
    component: SetPricefix1,
  },
  {
    path: "/about1",
    name: "About1",
    component: About1,
  },
  {
    path: "/discover-creator1",
    name: "DiscoverCreator1",
    component: DiscoverCreator1,
  },
  {
    path: "/join-community1",
    name: "JoinCommunity1",
    component: JoinCommunity1,
  },
  {
    path: "/my-profile-edit1",
    name: "MyProfileEdit1",
    component: MyProfileEdit1,
  },
  {
    path: "/my-profile-empty1",
    name: "MyProfileEmpty1",
    component: MyProfileEmpty1,
  },
  {
    path: "/user-profile1",
    name: "UserProfile1",
    component: UserProfile1,
  },
  {
    path: "/check-out-21",
    name: "CheckOut21",
    component: CheckOut21,
  },
  {
    path: "/check-out-11",
    name: "CheckOut11",
    component: CheckOut11,
  },
  {
    path: "/place-a-bid1",
    name: "PlaceABid1",
    component: PlaceABid1,
  },
  {
    path: "/connect-wallet1",
    name: "ConnectWallet1",
    component: ConnectWallet1,
  },
  {
    path: "/check-out1",
    name: "CheckOut3",
    component: CheckOut3,
  },
  {
    path: "/detail-current-bid1",
    name: "DetailCurrentBid1",
    component: DetailCurrentBid1,
  },
  {
    path: "/detail-auction1",
    name: "DetailAuction1",
    component: DetailAuction1,
  },
  {
    path: "/detail-sold1",
    name: "DetailSold1",
    component: DetailSold1,
  },
  {
    path: "/search-result",
    name: "SearchResult",
    component: SearchResult,
  },
  {
    path: "/search-popup1",
    name: "SearchPopup1",
    component: SearchPopup1,
  },
  {
    path: "/menu1",
    name: "Menu1",
    component: Menu1,
  },
  {
    path: "/account1",
    name: "Account1",
    component: Account1,
  },
  {
    path: "/notification1",
    name: "Notification2",
    component: Notification2,
  },
  {
    path: "/profile-creator1",
    name: "ProfileCreator1",
    component: ProfileCreator1,
  },
  {
    path: "/faq1",
    name: "FAQ1",
    component: FAQ1,
  },
  {
    path: "/add-wallet-031",
    name: "AddWallet031",
    component: AddWallet031,
  },
  {
    path: "/add-wallet-021",
    name: "AddWallet021",
    component: AddWallet021,
  },
  {
    path: "/add-wallet-011",
    name: "AddWallet011",
    component: AddWallet011,
  },
  {
    path: "/inside-openart",
    name: "InsideOpenArt",
    component: InsideOpenArt,
  },
  {
    path: "/darkmode-profile",
    name: "DarkmodeProfile",
    component: DarkmodeProfile,
  },
  {
    path: "/darkmode-search",
    name: "DarkmodeSearch",
    component: DarkmodeSearch,
  },
  {
    path: "/darkmode-item-detail",
    name: "DarkmodeItemDetail",
    component: DarkmodeItemDetail,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/process2",
    name: "Process3",
    component: Process3,
  },
  {
    path: "/darkmode-process",
    name: "DarkmodeProcess",
    component: DarkmodeProcess,
  },
  {
    path: "/darkmode-connect-wallet",
    name: "DarkmodeConnectWallet",
    component: DarkmodeConnectWallet,
  },
  {
    path: "/connect-wallet2",
    name: "ConnectWallet2",
    component: ConnectWallet2,
  },
  {
    path: "/search1",
    name: "Search1",
    component: Search1,
  },
  {
    path: "/item-detail",
    name: "ItemDetail",
    component: ItemDetail,
  },
  {
    path: "/quick-link",
    name: "QuickLink",
    component: QuickLink,
  },
  {
    path: "/quick-link1",
    name: "QuickLink1",
    component: QuickLink1,
  },
  {
    path: "/quick-link2",
    name: "QuickLink2",
    component: QuickLink2,
  },
  {
    path: "/quick-link3",
    name: "QuickLink3",
    component: QuickLink3,
  },
  {
    path: "/for-creator",
    name: "ForCreator",
    component: ForCreator,
  },
  {
    path: "/for-creator1",
    name: "ForCreator1",
    component: ForCreator1,
  },
  {
    path: "/for-user",
    name: "ForUser",
    component: ForUser,
  },
  {
    path: "/for-user1",
    name: "ForUser1",
    component: ForUser1,
  },
  {
    path: "/for-creator2",
    name: "ForCreator2",
    component: ForCreator2,
  },
  {
    path: "/for-creator3",
    name: "ForCreator3",
    component: ForCreator3,
  },
  {
    path: "/for-user2",
    name: "ForUser2",
    component: ForUser2,
  },
  {
    path: "/for-user3",
    name: "ForUser3",
    component: ForUser3,
  },
  {
    path: "/process3",
    name: "Process4",
    component: Process4,
  },
  {
    path: "/upload-artwork2",
    name: "UploadArtWork2",
    component: UploadArtWork2,
  },
  {
    path: "/upload-artwork3",
    name: "UploadArtWork3",
    component: UploadArtWork3,
  },
  {
    path: "/home1",
    name: "Home1",
    component: Home1,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title
      ? toRoute?.meta?.title
      : "AnotherLevels";
  window.document.title = documentTitle;
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description);
  }
  next();
});

const addMetaTag = (value) => {
  let element = document.querySelector(`meta[name='description']`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = `<meta name="description" content="${value}" />`;
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

createApp(App).use(router).mount("#app");

export default router;
