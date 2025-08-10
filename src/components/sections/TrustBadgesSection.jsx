import React from 'react';
import { images } from '../../assets';

// Um componente para um único selo
const Badge = ({ icon, text }) => (
// MUDANÇA CRUCIAL: flex-col para texto embaixo do ícone, items-center para centralizar

<div className="flex flex-col items-center text-center gap-2">
<img src={icon} alt={text} className="h-40 w-40" /> {/* Ajustei o tamanho para um exemplo */}
<p className="text-gray-600 font-semibold text-lg">{text}</p>
</div>
);

const TrustBadgesSection = () => {
return (
<section className="py-12 sm:py-20">
<div className="max-w-7xl mx-auto px-2">
{/* Container flex para alinhar os badges horizontalmente com um gap maior */}
<div className="flex flex-row justify-center items-start gap-32">
<Badge icon={images.securePayments} text="Pagamento 100% Seguro" />
<Badge icon={images.sslSecured} text="Site com Selo SSL" />
<Badge icon={images.virusScanned} text="Ambiente Livre de Vírus" />
</div>
</div>
</section>
);
};

export default TrustBadgesSection;
