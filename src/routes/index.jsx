import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Wishlist } from '../pages/Wishlist/Wishlist';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/wishlist/" element={<Wishlist />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
