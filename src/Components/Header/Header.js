import './Header.css';

function Header(props) {
  return (
    <div className="container">
      <nav>
        <button id="options">Options</button>
        <h1 className="logo">LOGO</h1>
        <button className="rightbutton">Search</button>
        <button className="rightbutton">Profile</button>
        <button className="rightbutton">Cart</button>
      </nav>
    </div>
  )
}

export default Header;
