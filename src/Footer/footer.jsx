import logo from "../media/images/logo.png"

function Footer() {
    return(
        <div className="footerContainer">
            <div className="footerCopyright">
                <h2>Copyright © 2023 Redzes Pasaule <img src={logo} alt="" /></h2>
            </div>
        </div>
    )
}

export default Footer;