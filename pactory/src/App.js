import Main from './components/Main/Main'
import Monitor from './components/Monitor/Monitor';
import About from './components/About/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Monitoring" element={<Monitor />} />
          <Route path="/Search" element={<About />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
