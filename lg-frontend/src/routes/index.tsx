import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ListGames } from 'pages';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/legend-games" element={<ListGames />} />
      </Routes>
    </BrowserRouter>
  );
}
