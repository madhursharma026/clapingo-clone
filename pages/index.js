import Footer from "./components/Footer";
import Header from "./components/Header";
import Section1 from "./components/Homepage/Section1";
import Section2 from "./components/Homepage/Section2";
import Section3 from "./components/Homepage/Section3";
import Section4 from "./components/Homepage/Section4";
import Section5 from "./components/Homepage/Section5";
import Section6 from "./components/Homepage/Section6";
import Section7 from "./components/Homepage/Section7";

export default function Home() {
  return (
    <>
      <Header selectedMenu="Home" />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </>
  )
}
