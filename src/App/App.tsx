import { Routes, Route } from 'react-router-dom';
import { Nav, CardContainer, AuthButtons } from '../components';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/writing" element={<CardContainer />} />
        <Route path="/reading" element={<CardContainer />} />
        <Route path="/uses" element={<CardContainer />} />
        <Route path="/contact" element={<CardContainer />} />

        <Route path="/auth" element={<AuthButtons />} />
      </Routes >
    </>
  );
}

export default App;
