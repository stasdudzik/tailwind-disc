import "./App.css";
import SideBar from "./components/SideBar";
import ContentContainer from "./components/ContentContainer";
import ChannelBar from "./components/ChannelBar";
function App() {
  return (
    <div className="flex">
      <SideBar />
      <ContentContainer />
      <ChannelBar />
    </div>
  );
}

export default App;
