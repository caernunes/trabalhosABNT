import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TrabalhosAcademicos from './components/TrabalhosAcademicos';
import CitacoesDocumentos from './components/CitacoesDocumentos';
import SignInDrawer from './components/SignInDrawer';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';
import ToggleColorMode from './ThemeContext';
import { CssBaseline } from '@mui/material';

function App() {
  console.log('App component rendered');
  return (
    <ToggleColorMode>
      <CssBaseline />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Breadcrumbs />
        <SignInDrawer />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trabalhos-academicos" element={<TrabalhosAcademicos />} />
            <Route path="/citacoes-documentos" element={<CitacoesDocumentos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ToggleColorMode>
  );
}

export default App;
