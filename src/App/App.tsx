import { Routes, Route } from 'react-router-dom';
import { Nav, CardContainer, AuthButtons, Dashboard, CreatePost, Contact, Uses, UpdatePost, ShowPost } from '../components';

import { ProtectedRoute } from '../routes'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/reading" element={<CardContainer />} />
        <Route path="/uses" element={<Uses />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/writing" element={<CardContainer />} />
        <Route path="/writing/:id" element={<ShowPost />} />

        <Route path="/auth" element={<AuthButtons />} />

        <Route
          path='/admin'
          element={<ProtectedRoute component={Dashboard} />}
        />
        <Route
          path='/admin/new-post'
          element={<ProtectedRoute component={CreatePost} />}
        />
        <Route
          path='/admin/edit-post/:id'
          element={<ProtectedRoute component={UpdatePost} />}
        />

      </Routes>
    </>
  )
}

export default App;
