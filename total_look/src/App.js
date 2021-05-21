//import logo from './logo.svg';
import './App.css';
import ModalLogin from './components/ModalLogin/ModalLogin';
import ModalProduct from './components/ModalProduct/ModalProduct';

function App() {
 return(<> <ModalLogin />
  <ModalProduct />
 </>)
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;