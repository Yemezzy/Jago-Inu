import './App.css';
import AboutUs from './Pages/AboutUs';
import Firstpage from './Pages/FIrstpage';
import Rewards from './Pages/Rewards';
import Tokenomics from './Pages/Tokenomics';


function App() {
  return (
    <div className="bg-[#142028]">
      <Firstpage />
      <AboutUs />
      <Rewards />
      <Tokenomics/>
    </div>
  );
}

export default App;
