// import logo from './logo.svg';

import './App.css';
import Bar1 from './components/Bar1';

import Searchfield from './components/Searchfield';
import Icon from './components/Icon';
import Card from './components/Card';
function App() {
  return (
    
    <div className="App">
     <Searchfield/>
     <h3> Facilty mangement &gt; maintainence services &gt; level3</h3>
     <hr/>
     <Bar1/>
     <hr/>
     <Icon/>
     <hr/>
     <Card/>
    </div>
    
   
  );
}

export default App;
