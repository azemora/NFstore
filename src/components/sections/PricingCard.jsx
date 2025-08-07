import React from 'react';

// Vamos receber as propriedades (props) para tornar o card dinâmico
const PricingCard = ({ title, price, bottles, save, mostPopular = false }) => {
  
  // Lógica para aplicar estilos diferentes se for o mais popular
  const cardClasses = mostPopular
    ? 'border-4 border-blue-500 transform scale-105 shadow-2xl'
    : 'border border-gray-200 shadow-lg';
    
  const buttonClasses = mostPopular
    ? 'bg-yellow-400 hover:bg-yellow-500'
    : 'bg-yellow-300 hover:bg-yellow-400';

  return (
    <div className={`bg-white rounded-2xl p-6 md:p-8 flex flex-col items-center text-center relative ${cardClasses}`}>
      {mostPopular && (
        <span className="absolute -top-4 bg-red-500 text-white text-sm font-bold px-4 py-1 rounded-full">
          MAIS POPULAR
        </span>
      )}
      
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-500 mb-4">{bottles} Garrafas</p>
      
      <img src={`/src/assets/product-${bottles}-bottles.png`} alt={`${bottles} garrafas do produto`} className="h-48 my-4" />

      <p className="text-6xl font-extrabold text-gray-900">${price}</p>
      <p className="text-gray-600 mb-6">por garrafa</p>
      
      <p className="bg-green-100 text-green-800 font-semibold py-2 px-4 rounded-lg text-xl mb-6">
        VOCÊ ECONOMIZA ${save}
      </p>

      <button className={`w-full py-4 rounded-xl text-black font-bold text-lg transition-transform duration-300 transform hover:scale-105 ${buttonClasses}`}>
        ADICIONAR AO CARRINHO
      </button>

      <img src="/src/assets/payment-methods.png" alt="Métodos de pagamento" className="h-6 mt-4" />
    </div>
  );
}

export default PricingCard;