import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListSpell from './Containers/ListSpell/ListSpell';
import SpellDetails from './Containers/SpellDetails/SpellDetails';
import SpellProvider from './Contexts/Context';

function App() {
  const getRoutes = () => (
    <Routes>
      <Route path="*" element={<ListSpell />} />
      <Route path="/listspell" element={<ListSpell />} />
      <Route path="/listspell/details" element={<SpellDetails />} />
    </Routes>
  );
  return (
    <SpellProvider>
      <BrowserRouter>{getRoutes()}</BrowserRouter>
    </SpellProvider>
  );
}

export default App;
