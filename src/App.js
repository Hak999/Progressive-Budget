import { Offline, Online } from "react-detect-offline";
import Header from './header';
import OfflineD from './offline';
import OnlineD from './online';
function App() {
  return (
    <div>
    <Header />
    <Online><OnlineD /></Online>
    <Offline><OfflineD /></Offline>
  </div>
  );
}

export default App;
