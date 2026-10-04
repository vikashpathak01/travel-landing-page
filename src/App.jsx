import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import HeroContent from "./components/HeroContent/HeroContent";
import Services from "./components/Services/Services";
import Places from "./components/Places/Places";
import BookTrip from "./components/BookTrip/BookTrip";
import Testimonials from "./components/Testimonials/Testimonials";
import CompanyNames from "./components/CompanyNames/CompanyNames";
import Subscribe from "./components/subscribe/subscribe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
       <Navbar />
      <HeroContent/>
      <Services/>
      <Places />
      <BookTrip />
      <Testimonials/>
      <CompanyNames />
      <Subscribe/>
      <Footer/>
      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/bookATrip" element={<BookATrip/>} />
        <Route path="/destinations" element={<Destinations/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/subscribe" element={<Subscribe/>} />
      </Routes> */}
    </>
  );
}

export default App;
