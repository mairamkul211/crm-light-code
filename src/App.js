import AboutUs from "./components/AboutUs";
import Footer from "./components/footer/Footer";
import Header from "./components/headers/Header";
import Infonrmation from "./components/Information";
import OurCourses from "./components/OurCourses";


function App() {
  return (
    <div className="App">
      <Header />
      <Infonrmation />
      <OurCourses />
      <AboutUs/>
      <Footer />
    </div>
  );
}

export default App;
