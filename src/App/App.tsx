import { Routes, Route } from 'react-router-dom';
import {
  Writing,
  AuthButtons,
  Dashboard,
  NewPost,
  Contact,
  Uses,
  EditPost,
  ShowPost,
  Reading,
} from '../components';
import { AdminLayout, PublicLayout } from '../layout';

import { ProtectedRoute } from '../routes';

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Writing />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/uses" element={<Uses />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/post/:id" element={<ShowPost />} />
        </Route>

        <Route path="/auth" element={<AuthButtons />} />

        <Route element={<AdminLayout />}>
          <Route
            path="/admin"
            element={<ProtectedRoute component={Dashboard} />}
          />
          <Route
            path="/admin/new-post"
            element={<ProtectedRoute component={NewPost} />}
          />
          <Route
            path="/admin/edit-post/:id"
            element={<ProtectedRoute component={EditPost} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
