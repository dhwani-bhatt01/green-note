import "./App.css";
import AppIntegration from "./components/App-Integration/App-Integration";
import DocScanning from "./components/Doc-Scanning/Doc-Scanning";
import Feedback from "./components/Feedback-Section/Feedback-Section";
import Footer from "./components/Footer/Footer";
import HeaderSignUp from "./components/Header-Sign-up/Header-Sign-up";
import HeroSection from "./components/Hero-Section/Hero-Section";
import Navbar from "./components/Navbar/Navbar";
import Plans from "./components/Plans/Plans";
import RichNotes from "./components/Rich-Notes/Rich-Notes";
import WebClipper from "./components/Web-Clipper/Web-Clipper";

export default function App() {
  return (
    <>
      <Navbar />
      <HeaderSignUp />
      <HeroSection />
      <Feedback />
      <AppIntegration />
      <DocScanning />
      <WebClipper />
      <RichNotes />
      <Plans />
      <Footer />
    </>
  );
}
