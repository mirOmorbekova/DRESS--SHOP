import './App.css';
import Cart from './Components/Cart/Cart';
import Dresses from './Components/DressesComponents/Dresses';
import Allcategories from './Components/Filter/Allcategories';


function App() {
  return (<div>
    <div className='container'>
            <Allcategories/>
            <Cart/>
      </div>
      <div className='block1'>
            <Dresses/>
     </div>
     <p>*Created for educational purpose!</p>
     </div>
     
     
    
     
  );
}

export default App;
