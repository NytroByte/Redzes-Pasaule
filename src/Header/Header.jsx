import logo from "../media/images/logo.png";

function Header() {
    return (
        <div className="header_container">
            <div className="headerLinks">
                <a href="#">Par mums</a>
                <a href="#">Kontakti</a>
            </div>
            <div className="headerLogo">
                <img src={logo} alt="" />
            </div>
        </div>
    )
}

export default Header;