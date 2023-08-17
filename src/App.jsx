import { Navbar } from "./Components/Navbar";
import { HeaderBanner } from "./Components/HeaderBanner";
import { MobileAnimation } from "./Components/MobileAnimation";
import { Explore } from "./Components/Explore";
import { Reward } from "./Components/Reward";
import { Exprience } from "./Components/Exprience";
import { Features } from "./Components/Features";
import { displayFeatures } from "./Constants";
import { FeatureMd } from "./Components/FeatureMd";
import { Security } from "./Components/Security";
import { CredStory } from "./Components/CredStory";
import { Review } from "./Components/Review";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
function App() {
  return (
    <>
      <div className="h-[10vh] min-h-[100px] w-full">
        <Navbar />
      </div>
      <div className="h-[90vh] min-h-[800px] w-full">
        <HeaderBanner />
      </div>
      <div className="h-[60vh] min-h-[600px] w-full md:h-[70vh]">
        <MobileAnimation />
      </div>
      <div className="h-auto min-h-[900px] w-full">
        <Explore />
      </div>
      <div className="h-[40vh] min-h-[350px] w-full bg-white md:h-[20vh] md:min-h-[200px]">
        <Reward />
      </div>
      <div className="h-[120vh] min-h-[900px] w-full md:min-h-[700px] md:h-[92vh]">
        <Exprience />
      </div>
      <div className="h-auto w-full min-h-[850px] md:hidden">
        {displayFeatures.map((featureData, index) => (
          <>
            <Features key={index} feature={featureData} />
          </>
        ))}
      </div>
      <div className="hidden md:block h-[95vh] w-full min-h-[850px] overflow-y-scroll">
        <FeatureMd />
      </div>
      <div className="hidden md:block min-h-[500px] w-full bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/neopop-image-mock.png)] bg-cover bg-no-repeat bg-center bg-fixed"></div>
      <div className="h-[100vh] min-h-[900px] w-full">
        <Security />
      </div>
      <div className="h-[100vh] min-h-[900px] w-full">
        <CredStory />
      </div>
      <div className="h-[100vh] min-h-[900px] w-full md:h-[70vh] md:min-h-[690px]">
        <Review />
      </div>
      <div className="h-auto w-full">
        <About />
      </div>
      <div className="h-auto w-auto">
        <Contact />
      </div>
    </>
  );
}

export default App;
