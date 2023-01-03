import Header from "./Header/Header";
import LandingPage from "./LandingPage/LandingPage";
import About from "./about/About";
import Slideshow from "./Slideshow/Slideshow";
import Contacts from "./Contacts/contacts";
import Footer from "./Footer/footer";

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <LandingPage/>
      <About/>
      <Slideshow/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
