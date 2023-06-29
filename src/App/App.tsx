import { Routes, Route } from 'react-router-dom';
import { Nav, CardContainer } from '../components';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/writing" element={<CardContainer />} />
        <Route path="/uses" element={<CardContainer />} />
        <Route path="/contact" element={<CardContainer />} />

      </Routes>
      <CardContainer />
    </>
  );
}

export default App;
