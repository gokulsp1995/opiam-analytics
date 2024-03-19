import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Integration from './components/Integration';
import Team from './components/Team';
import Package from './components/Package';
import Problem from './components/Problem';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header />
        <Body />
        <Integration />
        <Team />
        {/* <Package /> */}
        {/* <Problem /> */}
        <Services />
      <Footer />

    </div>
  );
}

export default App;
