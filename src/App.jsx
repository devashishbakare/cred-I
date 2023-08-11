import { Navbar } from "./Components/Navbar";
import { HeaderBanner } from "./Components/HeaderBanner";
function App() {
  return (
    <>
      <div className="h-[10vh] min-h-[100px] w-full">
        <Navbar />
      </div>
      <div className="h-[90vh] min-h-[800px] w-full">
        <HeaderBanner />
      </div>
    </>
  );
}

export default App;
