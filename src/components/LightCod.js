import Header from "./headers/Header";
import OurCourses from "./OurCourses";
import Infonrmation from "./Information";
import AboutUs from "./AboutUs";
import Form from "./Form";
import Map from "./Map";
import Footer from "./footer/Footer";
import FeedBack from "./FeadBack";

function lightCod() {
  return (
    <>
      <Header />
      <Infonrmation />
      <OurCourses />
      <AboutUs array={[""]} />
      <FeedBack />
      <Form />
      <Map />
      <Footer />
    </>
  );
}

export default lightCod;
