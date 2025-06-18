import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import NewsPage from './pages/NewsPage';
import ShopPage from './pages/ShopPage';
import TeamList from './pages/TeamListPage';
import GalleryEventPage from './pages/GalleryEventPage';
import GalleryGrid from './components/gallery/GalleryGrid';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teams" element={<TeamList />} />
          <Route path="/teams/:teamId" element={<TeamPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/gallery" element={<GalleryGrid />} />
          <Route path="/gallery/:eventId" element={<GalleryEventPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
