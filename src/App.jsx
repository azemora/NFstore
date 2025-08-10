// /src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importe as páginas que criamos
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <BrowserRouter>
      {/* O componente <Routes> envolve todas as nossas rotas individuais */}
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<HomePage />} />

        {/* Rota para a página de detalhes do produto */}
        {/* O :productName é um parâmetro dinâmico. Podemos acessá-lo na página. */}
        <Route path="/produto/:productName" element={<ProductDetailPage />} />

        {/* Você pode adicionar outras rotas aqui no futuro, como: */}
        {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
        {/* <Route path="/contato" element={<ContactPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;