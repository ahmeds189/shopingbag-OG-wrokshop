// this file contains all the constants and static data
import { HiHome } from 'react-icons/hi'
import { IoShirt, IoWatch } from 'react-icons/io5'
import { BsFillLaptopFill } from 'react-icons/bs'
import { GiConverseShoe } from 'react-icons/gi'
import { FaBlog } from 'react-icons/fa'
import { MdContactPage, MdEmail } from 'react-icons/md'

export const navbarLinks = [
  'My Account',
  'Wishlist',
  'My Cart',
  'Checkout',
  'Login',
]

export const categories = [
  {
    id: 1,
    name: 'Home',
    icon: HiHome,
  },
  {
    id: 2,
    name: 'Clothing',
    icon: IoShirt,
  },
  {
    id: 3,
    name: 'Electronics',
    icon: BsFillLaptopFill,
  },
  {
    id: 4,
    name: 'Shoes',
    icon: GiConverseShoe,
  },
  {
    id: 5,
    name: 'Watches',
    icon: IoWatch,
  },
  {
    id: 6,
    name: 'Blog',
    icon: FaBlog,
  },
  {
    id: 7,
    name: 'Pages',
    icon: MdContactPage,
  },
  {
    id: 8,
    name: 'Contact',
    icon: MdEmail,
  },
]
