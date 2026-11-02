import { BrowserRouter, Route, Routes } from 'react-router'
import '../tools/css/reset.css'
import '../tools/css/theme.css'
import '../tools/css/page.css'
import Layout from '../tools/components/Layout'
import Home from '../tools/pages/Home'
import NotFound from '../tools/pages/NotFound'

// add a page: create it in tools/pages and add a <Route> here
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
