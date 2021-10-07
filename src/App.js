import './App.css';
import Feed from './component/feed/Feed';
// import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Protection from './component/protection/Protection';
import Questions from './component/questions/Questions';
import Tracer from './component/tracker/Tracker';
function App() {
  return (
    <div className="app">
      <Header />
      <Feed />
      <Tracer />
      <Protection/>
      <Questions/>
      {/* <Footer/> */}
      
    </div>
  );
}

export default App;
