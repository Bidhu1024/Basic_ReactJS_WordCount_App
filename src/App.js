
import './App.css';

import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
   <Navbar title ="TextUtils" about = "About TextUtils"/>
   <div className="container">
   <Textform heading = "Enter your Text here to Analyze"/>
   </div>
   
   </>
  );
}

export default App;
