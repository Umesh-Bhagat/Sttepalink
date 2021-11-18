import Dashboard from "../Layouts/Dashboard/Dashboard.jsx";
import Pricing from "../Layouts/Pricing/PricingPlanDis.jsx";
import OfficeStaff from "../Views/NonOfficialAccounts/NonOfficialPersonal.jsx";
import OfficialAccounts from "../Views/AuthorisedSection/AuthorisedSection.jsx";
import AboutUs from "../Layouts/AboutUs/AboutUs.jsx";
import OffersPage from "../Layouts/OffersPage/OffersPage.jsx";
import SignUp from "../Layouts/SignUp/SignUp.jsx";
import login from "../Layouts/LoginPage/login.jsx";
import LogOut from "../Layouts/LogOut/LogOut.jsx";

const indexRoutes = [
    {path: "/dashboard", component: Dashboard},
    {path: "/pricing" , component : Pricing},
    {path: "/YourCourses" , component : Dashboard},
    {path: "/UserProfile", component: Dashboard},
    {path: "/Info-page", component: Dashboard},
    {path: "/PricingPlan", component: Dashboard},
    {path: "/Notification", component: Dashboard},
    {path: "/OtherThings", component: Dashboard},
    {path: "/StaffAccounts", component: OfficeStaff},
    {path: "/OfficialAccounts", component: OfficialAccounts},
    {path: "/AboutUs" , component: AboutUs},
    {path : "/Offers" , component: OffersPage},
    {path:"/Login", component:login},
    {path: "/signUp", component: SignUp},
    {path: "/LogOut",component:LogOut}
];


export default indexRoutes;
