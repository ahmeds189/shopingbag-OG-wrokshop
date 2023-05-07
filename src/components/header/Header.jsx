import { useState, useRef, useEffect } from "react";
import { navbarLinks, categories } from "../../constants";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdOutlineSearch } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiOutlineShoppingCart, HiMenuAlt2 } from "react-icons/hi";
import "./header.scss";

const Links = ({ onToggle }) => (
  <nav className="links">
    <ul>
      <li>
        $USD <TiArrowSortedDown />
      </li>
      <li>
        English <TiArrowSortedDown />
      </li>
      {navbarLinks.map((link, i) => (
        <li key={i}>
          <a href="#">{link}</a>
        </li>
      ))}
      <button type="button" onClick={onToggle}>
        <HiMenuAlt2 size={32} />
      </button>
    </ul>
  </nav>
);

const Search = () => (
  <div className="search">
    <h1>
      shoping<span>bag</span>
    </h1>
    <div className="bar">
      <li>
        Categories <TiArrowSortedDown />
      </li>
      <input type="text" placeholder="Search Here" />
      <MdOutlineSearch size={25} />
    </div>
    <div className="icons">
      <MdOutlineSearch size={30} />
      <FaRegHeart size={25} />
      <div>
        <HiOutlineShoppingCart size={25} />
        <span>0</span>
      </div>
    </div>
  </div>
);

const Categories = () => (
  <nav className="categoties">
    <ul>
      {categories.map((item) => (
        <li key={item.id}>
          <a href="#">{item.name}</a>
        </li>
      ))}
    </ul>
  </nav>
);

const MobileNav = ({ isActive, onToggle, onBlur }) => {
  let navRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!navRef.current.contains(e.target)) {
        onBlur(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <aside className={isActive ? "active" : null} ref={navRef}>
      <nav>
        <div>
          <h1>
            shoping<span>bag</span>
          </h1>
          <IoClose size={43} onClick={onToggle} />
        </div>
        <div className="bar">
          <input type="text" placeholder="Search Here" />
          <MdOutlineSearch size={30} />
        </div>
        <ul>
          {navbarLinks.map((link, i) => (
            <li key={i}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
        <h3>Categories</h3>
        <ul>
          {categories.map((item) => (
            <li key={item.id}>
              <a href="#">{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <p>shopingbag 2023 &copy;</p>
    </aside>
  );
};

const Header = () => {
  const [shownav, setShownav] = useState(false);

  const toggleNav = () => setShownav(!shownav);

  return (
    <header>
      <div className="container">
        <Links onToggle={toggleNav} />
        <Search />
        <Categories />
        <MobileNav
          isActive={shownav}
          onToggle={toggleNav}
          onBlur={setShownav}
        />
      </div>
    </header>
  );
};

export default Header;
