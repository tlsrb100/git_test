import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { A } from './components/A';
import { B } from './components/B';
import { C } from './components/C';
import { Upper } from './components/Upper';

function App() {
  const testFunc = () => {
    console.log('dasd');
    console.log('dasd');
    console.log('dasd');
    console.log('dasd');
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<A />}>
          <Route path="/b" element={<Upper />} />
        </Route>
        <Route element={<C />}>
          <Route path="/c" element={<B />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
