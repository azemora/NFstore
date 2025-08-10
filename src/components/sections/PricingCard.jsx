// /src/components/sections/PricingCard.jsx
import React from 'react';
import { images } from '../../assets';

const PricingCard = ({ title, price, bottles, save, mostPopular = false, totalPrice }) => {
  
  const cardClasses = mostPopular
    ? 'border-4 border-blue-600 transform lg:scale-105 shadow-2xl z-10'
    : 'border border-gray-300 shadow-lg';
    
  const buttonClasses = mostPopular
    ? 'bg-yellow-400 hover:bg-yellow-500'
    : 'bg-yellow-300 hover:bg-yellow-400';

  const bottleImages = {
    1: images.product1,
    3: images.product3,
    6: images.product6,
  };
  const productImage = bottleImages[bottles];

  // MUDANÇA 1: Aumentamos a largura máxima de 'max-w-sm' para 'max-w-md'
  return (
    <div className={`bg-white rounded-2xl p-8 flex flex-col items-center text-center relative w-full max-w-md ${cardClasses}`}>
      {mostPopular && (
        // MUDANÇA 2: Tradução
        <span className="absolute -top-4 bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider">
          Mais Popular
        </span>
      )}
      
      {/* MUDANÇA 3: Tradução dos Títulos */}
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-500 mb-4">{bottles} Frascos</p>
      
      <img src={productImage} alt={`${bottles} frascos do produto`} className="h-40 md:h-48 my-6" />

      <p className="text-6xl font-extrabold text-gray-900">R${price}</p>
      <p className="text-gray-600 mb-5">por frasco</p>
      
      <hr className="w-full my-4 border-t border-gray-200" />
      
      <p className="text-green-800 font-semibold text-xl my-4">
        VOCÊ ECONOMIZA R$ {save}
      </p>

      <button className={`w-full py-4 rounded-xl text-black font-bold text-lg uppercase transition-transform duration-300 transform hover:scale-105 ${buttonClasses}`}>
        ADICIONAR AO CARRINHO
      </button>

      {/* MUDANÇA 4: Adicionamos o título para os métodos de pagamento */}
      <h4 className="mt-8 mb-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">Métodos de Pagamento</h4>
      <img src={images.paymentMethods} alt="Métodos de pagamento" className="h-10" />
      
      {totalPrice && (
        <p className="text-gray-500 text-sm mt-2">TOTAL: <span className="font-bold">R$ {totalPrice}</span></p>
      )}
    </div>
  );
}

export default PricingCard;