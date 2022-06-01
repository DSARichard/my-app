import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

function App() {
  const str = ("b" + "a" + + "a" + "a").toLowerCase()
  let num = Math.max()
  return (
    <div className="container">
      <Header/>
      <img src={logo} className="App-logo" alt="logo" />
      <div style={{ color: "goldenrod", }}>{str}</div>
      <div style={{ color: "goldenrod", }}>{num}</div>
    </div>
  );
}

export default App;
