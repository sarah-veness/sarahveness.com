import { Routes, Route } from 'react-router-dom';
import { CardContainer, AuthButtons, Dashboard, CreatePost, Contact, Uses, UpdatePost, ShowPost } from '../components';
import { AdminLayout, PublicLayout } from '../layout';

import { ProtectedRoute } from '../routes'

function App() {

  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<CardContainer />} />
          <Route path="/reading" element={<CardContainer />} />
          <Route path="/uses" element={<Uses />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/writing" element={<CardContainer />} />
          <Route path="/writing/:id" element={<ShowPost />} />
        </Route>

        <Route path="/auth" element={<AuthButtons />} />

        <Route element={<AdminLayout />}>
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
        </Route>
      </Routes>
    </>
  )
}

export default App;
