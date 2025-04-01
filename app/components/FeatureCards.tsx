import { 
  FaLeaf, 
  FaCogs, 
  FaCertificate,
  FaChartLine,
  FaWater,
  FaShieldAlt 
} from 'react-icons/fa';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
};

const FeatureCard = ({ title, description, icon, index }: FeatureCardProps) => {
  return (
    <div
      className="relative bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
    >
      <div className="p-8">
        <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 bg-gradient-to-br from-forest-green/10 to-forest-green/5 rounded-full"></div>
        
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-forest-green to-tech-blue flex items-center justify-center text-white text-3xl transform transition-transform group-hover:rotate-6 group-hover:scale-110 mb-6">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-dark-gray">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="h-1 w-full bg-gradient-to-r from-forest-green to-tech-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </div>
  );
};

const FeatureCards = () => {
  const features = [
    {
      title: "Une IA au service des agriculteurs",
      description: "Notre solution utilise l'intelligence artificielle pour analyser vos données agricoles et optimiser vos cultures.",
      icon: <FaCogs />,
    },
    {
      title: "Agriculture durable",
      description: "Réduisez votre impact environnemental tout en améliorant vos rendements grâce à nos recommandations personnalisées.",
      icon: <FaLeaf />,
    },
    {
      title: "Certifications éthiques",
      description: "Nous respectons les normes RGPD et garantissons la confidentialité et la sécurité de vos données.",
      icon: <FaCertificate />,
    },
    {
      title: "Analyse prédictive",
      description: "Anticipez vos rendements et prenez des décisions éclairées grâce à nos algorithmes d'IA prédictive.",
      icon: <FaChartLine />,
    },
    {
      title: "Gestion optimisée des ressources",
      description: "Économisez l'eau et les intrants agricoles grâce à une gestion intelligente basée sur les besoins réels des cultures.",
      icon: <FaWater />,
    },
    {
      title: "Sécurité des données",
      description: "Vos données sont protégées par les technologies de chiffrement les plus avancées et ne sont jamais partagées.",
      icon: <FaShieldAlt />,
    }
  ];

  return (
    <section className="py-24 bg-light-gray">
      <div className="container">
        <div
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-4">
            Nos solutions innovantes
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez comment NutrIA peut transformer votre approche agricole grâce à des technologies de pointe et une expertise approfondie.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards; 