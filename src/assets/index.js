// /src/assets/index.js

// 1. Importamos cada imagem individualmente
import product1Bottle from './product-1-bottle.png';
import product3Bottles from './product-3-bottles.png';
import product6Bottles from './product-6-bottles.png';
import paymentMethods from './payment-methods.png';

// ADICIONE ESTES NOVOS ÍCONES
import securePayments from './secure_payments_dark.svg';
import sslSecured from './ssl_secured_dark.svg';
import virusScanned from './virus_scanned_dark.svg';


// 2. Exportamos todas elas em um único objeto nomeado 'images'
export const images = {
  product1: product1Bottle,
  product3: product3Bottles,
  product6: product6Bottles,
  paymentMethods: paymentMethods,
  // ADICIONE AS NOVAS CHAVES AQUI
  securePayments: securePayments,
  sslSecured: sslSecured,
  virusScanned: virusScanned,
};