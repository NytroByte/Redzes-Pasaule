import backg from "../media/images/landing_backg.jpg";

function LandingPage() {
    return (
        <div className="landingcontainer">
            <div className="background">
                <img src={backg}/>
            </div>
            <div className="mainHeader">
                <h1>Redzes Pasaule</h1>
            </div>
        </div>
    )
}

export default LandingPage;