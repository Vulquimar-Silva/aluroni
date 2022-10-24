import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Menu from 'components/Menu';
import Cardapio from './pages/Cardapio';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound';
import Prato from './pages/Prato';

export default function AppRoutes() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Inicio />} />
            <Route path='/cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
          </Route>
          <Route path= 'prato/:id' element={<Prato />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}