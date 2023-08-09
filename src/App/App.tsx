import { Routes, Route } from 'react-router-dom';
import { Nav, CardContainer, AuthButtons, Dashboard, NewPost, Contact, Uses } from '../components';

import { ProtectedRoute } from '../routes'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/writing" element={<CardContainer />} />
        <Route path="/reading" element={<CardContainer />} />
        <Route path="/uses" element={<Uses />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/auth" element={<AuthButtons />} />

        <Route
          path='/admin'
          element={<ProtectedRoute component={Dashboard} />}
        />
        <Route
          path='/admin/new-post'
          element={<ProtectedRoute component={NewPost} />}
        />
      </Routes>
    </>
  )
}

export default App;
