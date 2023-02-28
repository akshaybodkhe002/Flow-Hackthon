// @material-ui/icons

import Person from "@material-ui/icons/Person";
import LocationOn from "@material-ui/icons/LocationOn";
import Login from "views/Login/login";
import App from "Wallet/Wallet"

// core components/views for Admin layout

import UserProfile from "views/UserProfile/UserProfile.js";
import DriverProfile from "views/DriverProfile/DriverProfile.js";
import ProductList from "views/allDrivers/drivers.js"
import Maps from "views/Maps/Maps.js";
import { DriveEta } from "@material-ui/icons";
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import RideShareSteps from "views/RideShareSteps/RideShareSteps";
import LoginIcon from '@mui/icons-material/Login';
// core components/views for RTL layout

const dashboardRoutes = [
 
  {
    path: "/steps",
    name: "Get a Cab",
    icon: FormatListNumberedIcon,
    component: RideShareSteps,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin" 
  },
  {
    path: "/driver",
    name: "Driver Profile",
    icon: DriveEta,
    component: DriverProfile,
    layout: "/admin"
  },
  
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  
  {
    path: "/alldrivers",
    name: "All Drivers List",
    icon: LocationOn,
    component: ProductList,
    layout: "/admin"
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: LoginIcon,
  //   component: Login,
  //   layout: "/admin"
  // },
  {
    path: "/wallet",
    name: "Wallet",
    icon: LoginIcon,
    component: App,
    layout: "/admin"
  },


];

export default dashboardRoutes;
