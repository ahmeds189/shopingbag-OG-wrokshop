// this file contains all the constants and static data
import { HiHome } from "react-icons/hi";
import { IoShirt, IoWatch } from "react-icons/io5";
import { BsFillLaptopFill } from "react-icons/bs";
import { GiConverseShoe } from "react-icons/gi";
import { FaBlog } from "react-icons/fa";
import { MdContactPage, MdEmail } from "react-icons/md";

export const navbarLinks = [
  "My Account",
  "Wishlist",
  "My Cart",
  "Checkout",
  "Login",
];

export const categories = [
  {
    id: 1,
    name: "Home",
    icon: HiHome,
    tooltip: false,
  },
  {
    id: 2,
    name: "Clothing",
    icon: IoShirt,
    tooltip: "new",
  },
  {
    id: 3,
    name: "Electronics",
    icon: BsFillLaptopFill,
    tooltip: false,
  },
  {
    id: 4,
    name: "Shoes",
    icon: GiConverseShoe,
    tooltip: "hot",
  },
  {
    id: 5,
    name: "Watches",
    icon: IoWatch,
    tooltip: false,
  },
  {
    id: 6,
    name: "Blog",
    icon: FaBlog,
    tooltip: false,
  },
  {
    id: 7,
    name: "Pages",
    icon: MdContactPage,
    tooltip: false,
  },
  {
    id: 8,
    name: "Contact",
    icon: MdEmail,
    tooltip: false,
  },
];
