import AboutUs from "./components/AboutUs";
import Footer from "./components/footer/Footer";
import Header from "./components/headers/Header";
import Infonrmation from "./components/Information";
import Map from "./components/Map";
import OurCourses from "./components/OurCourses";


function App() {
  return (
    <div className="App">
      <Header />
      <Infonrmation />
      <OurCourses />
      <AboutUs array={[""]} />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
