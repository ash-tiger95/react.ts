import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main'
import { BrowserRouter as Router } from 'react-router-dom';
import MyResponsiveLine  from './components/MyResponsiveLine/MyResponsiveLine'
import { dataA } from './components/MyResponsiveLine/data';
// import { ResponsiveLine } from '@nivo/line'

function App() {
  const dataB = [
    {
      "id": "japan",
      "color": "hsl(349, 70%, 50%)",
      "data": [
        {
          "x": 0,
          "y": 31
        },
        {
          "x": 118,
          "y": 22
        },
        {
          "x": 119,
          "y": 239
        },
        {
          "x": 120,
          "y": 215
        }
      ]
    }
  ]

  return (
    <div>
      <Router>
      <Navbar/>
      </Router>
      <Main/>
      <div>
      <MyResponsiveLine data={dataB}/>
      </div>
      test
    </div>
  );
}

export default App;
