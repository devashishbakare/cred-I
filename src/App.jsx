import { Navbar } from "./Components/Navbar";
import { HeaderBanner } from "./Components/HeaderBanner";
import { MobileAnimation } from "./Components/MobileAnimation";
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
    </>
  );
}

export default App;
