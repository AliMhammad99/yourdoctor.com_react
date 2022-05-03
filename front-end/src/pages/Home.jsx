import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import HeroSection from "../components/HeroSection";
import HomeGuestSection2 from "../components/HomeGuestSection2";
import HomeGuestSection3 from "../components/HomeGuestSection3";
import HomeGuestFooter from "../components/HomeGuestFooter";

function Home() {
  return (
    <>
      <SignIn />
      <SignUp />
      <HeroSection />
      <HomeGuestSection2 />
      <HomeGuestSection3 />
      <HomeGuestFooter />
    </>
  );
}

export default Home;