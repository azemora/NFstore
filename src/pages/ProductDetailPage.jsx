// /src/pages/ProductDetailPage.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  // O hook useParams nos permite pegar parâmetros da URL, como o nome do produto
  const { productName } = useParams();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Página de Detalhes do Produto</h1>
      <h2 style={{ textTransform: 'capitalize' }}>Produto: {productName}</h2>
      <p>Aqui teremos a descrição completa, imagens, e mais informações sobre o {productName}.</p>

      <Link 
        to="/" 
        style={{ fontSize: '20px', color: 'blue', marginTop: '20px', display: 'block' }}
      >
        Voltar para a Home
      </Link>
    </div>
  );
}

export default ProductDetailPage;