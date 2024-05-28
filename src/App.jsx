import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar/Navbar.jsx';
import MyScanner from './MyScanner/MyScanner.jsx';
import Divscan from './Divscan/Divscan.jsx';
import PublicScanner from './PublicScanner/PublicScanner.jsx';
import Cards from "./Cards/ScannerCards.jsx";



function App() {  
 

  return (
    <>
    <Navbar/>
   <MyScanner/>
   <Divscan/>
   <PublicScanner/>
   <Cards/>
  
    </>
  )
}

export default App
