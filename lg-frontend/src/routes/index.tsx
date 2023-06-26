import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ListGames } from 'pages';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListGames />} />
      </Routes>
    </BrowserRouter>
  );
}
