import { Navbar } from "./Components/Navbar";
import { HeaderBanner } from "./Components/HeaderBanner";
import { MobileAnimation } from "./Components/MobileAnimation";
import { Explore } from "./Components/Explore";
import { Reward } from "./Components/Reward";
import { Exprience } from "./Components/Exprience";
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
    </>
  );
}

export default App;
