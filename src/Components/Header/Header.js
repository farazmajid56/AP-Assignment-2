import './Header.css';

function Header(props) {
  return (
    <div className="container">
      <nav>
        <img className="lefticon" src="/options.svg" alt="Options"/>
        <h1 className="logo">LOGO</h1>
        <img className="righticon" src="/search.svg" alt="Search"/>
        <img className="righticon" src="/profile.svg" alt="Profile"/>
        <img className="righticon" src="/cart.svg" alt="Cart"/>
      </nav>
    </div>
  )
}

export default Header;
