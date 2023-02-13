import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Janku from './page/Janku';
import Yokohama from './page/Yokohama';
import Jirou from './page/Jirou';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
          <Route path='/' element={<Home />} />
         <Route path='/janku' element={<Janku />} />
          <Route path='/yokohama' element={<Yokohama />} />
          <Route path='/jirou' element={<Jirou />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


