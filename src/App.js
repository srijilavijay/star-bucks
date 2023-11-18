
import './App.css';
import Banner2_1 from './StarBucks/Banner2_1';
import Banner2_2 from './StarBucks/Banner2_2';
import Banner2_3 from './StarBucks/Banner2_3';
import Banner2_4 from './StarBucks/Banner2_4';
import Banner2_5 from './StarBucks/Banner2_5';
import Footer2 from './StarBucks/Footer2';
import Header2 from './StarBucks/Header2';
import Notify from './StarBucks/Notify';


function App() {
  return (
    <div className="App">
      <Header2/>
      <hr/>
      <Banner2_1/>
      <Banner2_2/>
      <Banner2_3/>
      <Banner2_4/>
      <Banner2_5/>
      <Notify/>
      <hr/>
      <Footer2/>
    </div>
  );
}

export default App;
