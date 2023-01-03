import Header from "./Header/Header";
import LandingPage from "./LandingPage/LandingPage";
import About from "./about/About";
import Slideshow from "./Slideshow/Slideshow";
import Contacts from "./Contacts/contacts";

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <LandingPage/>
      <About/>
      <Slideshow/>
      <Contacts/>
    </div>
  );
}

export default App;
