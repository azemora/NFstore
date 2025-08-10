// /src/pages/HomePage.jsx
import React from 'react';
import PricingCard from '../components/sections/PricingCard';
import TrustBadgesSection from '../components/sections/TrustBadgesSection';

const HomePage = () => {
  return (
    // A cor de fundo principal agora pode ser branca ou cinza,
    // pois a barra de título terá sua própria cor.
    <div className="bg-gray-100 font-sans">
      
      {/* MUDANÇA AQUI: Criamos uma seção <header> para o título */}
      <header className="bg-green-800 py-8 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-yellow-200 sm:text-4xl uppercase tracking-wider">
            ESCOLHA O SEU KIT
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Clique no botão abaixo para garantir seus resultados com Slim Life.
          </p>
        </div>
      </header>

      {/* O conteúdo principal da página fica aqui dentro */}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Container para os cards de preço */}
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8">
            
            <PricingCard 
              title="Melhor Valor"
              bottles={6}
              price={49}
              save={780}
              totalPrice={294}
              mostPopular={true}
            />

            <PricingCard 
              title="Bom Valor"
              bottles={3}
              price={59}
              save={360}
              totalPrice={177}
            />

            <PricingCard 
              title="Experimente"
              bottles={1}
              price={89}
              save={110}
              totalPrice={89}
            />

          </div>
        </div>

        {/* Nossa seção de selos de confiança */}
        <TrustBadgesSection />
      </main>

    </div>
  );
}

export default HomePage;