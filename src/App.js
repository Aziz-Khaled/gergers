import './App.css';

import {Routes , Route} from 'react-router-dom'
import Register from './Component/Register';
import HomePage from './Component/HomePage/HomePage';
import Formulaire from './Component/Formulaire';

function App() {

  return (
    <div className="App">


        <Routes>
            <Route path='/' element ={<HomePage/>} />
            <Route path='Register' element ={<Register/>} />
            <Route path='formulaire' element ={<Formulaire/>} />
        </Routes>


    </div>
  );
}

export default App;
