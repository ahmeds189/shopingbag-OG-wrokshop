import { navbarLinks } from '../../constants'
import { TiArrowSortedDown } from 'react-icons/ti'
import { MdOutlineSearch } from 'react-icons/md'
import './header.scss'

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li>
              $USD <TiArrowSortedDown />
            </li>
            <li className="full">
              English <TiArrowSortedDown />
            </li>
            {navbarLinks.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </nav>

        <div className="search">
          <h1>
            shoping<span>bag</span>
          </h1>
          <div>
            <li>
              Categories <TiArrowSortedDown />
            </li>
            <input type="text" placeholder="Search Here" />
            <MdOutlineSearch size={25} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
