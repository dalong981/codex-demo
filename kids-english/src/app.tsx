import { HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import Today from './routes/Today';
import Library from './routes/Library';
import Progress from './routes/Progress';

export default function App() {
  return (
    <HashRouter>
      <div className="p-4">
        <nav className="flex space-x-4 mb-4">
          <NavLink to="/today" className={({isActive}) => isActive ? 'font-bold' : ''}>Today</NavLink>
          <NavLink to="/library" className={({isActive}) => isActive ? 'font-bold' : ''}>Library</NavLink>
          <NavLink to="/progress" className={({isActive}) => isActive ? 'font-bold' : ''}>Progress</NavLink>
        </nav>
        <Routes>
          <Route path="/today" element={<Today />} />
          <Route path="/lesson/:date" element={<Today />} />
          <Route path="/library" element={<Library />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="*" element={<Today />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
