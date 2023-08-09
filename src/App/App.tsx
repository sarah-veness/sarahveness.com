import { Routes, Route } from 'react-router-dom';
import { Nav, CardContainer, AuthButtons, Dashboard } from '../components';

import { ProtectedRoute } from '../routes'

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

        <Route
          path='/admin'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path='/new-post'
          element={
            <ProtectedRoute>
              <h1>new post</h1>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App;
