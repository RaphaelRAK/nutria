import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  FaSeedling, 
  FaChartLine, 
  FaBug, 
  FaLeaf, 
  FaDatabase, 
  FaChartBar,
  FaUsers,
  FaTree,
  FaIndustry,
  FaAward
} from 'react-icons/fa';

const AboutPage = () => {
  const services = [
    {
      icon: <FaChartLine />,
      title: 'Prédiction de rendement',
      description: 'Anticipez vos rendements grâce à notre IA qui analyse les données historiques et les conditions environnementales.'
    },
    {
      icon: <FaSeedling />,
      title: 'Optimisation des cultures',
      description: 'Recevez des recommandations personnalisées pour optimiser vos méthodes de culture et votre utilisation des ressources.'
    },
    {
      icon: <FaBug />,
      title: 'Détection de maladies',
      description: 'Identifiez précocement les maladies et ravageurs grâce à notre système de détection par intelligence artificielle.'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Saisir vos données',
      description: 'Entrez les informations sur vos cultures, votre sol et vos pratiques agricoles.'
    },
    {
      number: 2,
      title: 'Analyse par IA',
      description: 'Notre algorithme analyse vos données et les combine avec des informations météorologiques et agronomiques.'
    },
    {
      number: 3,
      title: 'Résultats optimisés',
      description: 'Recevez des recommandations précises pour améliorer vos rendements tout en respectant l\'environnement.'
    }
  ];

  const values = [
    {
      icon: <FaUsers className="text-4xl text-forest-green" />,
      title: 'Respecter les agriculteurs',
      description: 'Nous travaillons main dans la main avec les agriculteurs, en valorisant leur expertise et leur savoir-faire. Notre technologie est conçue pour les accompagner, pas pour les remplacer.'
    },
    {
      icon: <FaTree className="text-4xl text-forest-green" />,
      title: 'Respecter l\'environnement',
      description: 'La préservation des écosystèmes est au cœur de notre démarche. Nous développons des solutions qui favorisent une agriculture durable et responsable.'
    },
    {
      icon: <FaIndustry className="text-4xl text-forest-green" />,
      title: 'Respecter l\'industrielle',
      description: 'Nous reconnaissons l\'importance de l\'industrie agricole et travaillons à créer des synergies entre innovation technologique et processus industriels existants.'
    },
    {
      icon: <FaAward className="text-4xl text-forest-green" />,
      title: 'Engagement qualité',
      description: 'Nous nous engageons à fournir des outils d\'une qualité irréprochable, constamment mis à jour et améliorés pour répondre aux besoins évolutifs de nos utilisateurs.'
    }
  ];

  return (
    <main className="pt-16">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-light-gray">
        <div className="container">
          <h1 className="text-4xl font-bold text-forest-green text-center mb-8">
            Révolutionner l&apos;agriculture avec l&apos;IA
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                NutrIA est née de la volonté de mettre l&apos;intelligence artificielle au service d&apos;une 
                agriculture plus durable et plus performante. Notre équipe d&apos;experts en agronomie et en 
                technologie a développé une solution innovante qui analyse les données agricoles et fournit des 
                recommandations personnalisées aux agriculteurs.
              </p>
              <p>
                Nous croyons fermement que l&apos;agriculture de demain doit concilier productivité et respect 
                de l&apos;environnement. C&apos;est pourquoi notre plateforme est conçue pour aider les 
                agriculteurs à optimiser leurs rendements tout en réduisant leur impact écologique.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div 
                className="h-80 bg-tech-blue"
                style={{
                  backgroundImage: "linear-gradient(225deg, #1976D2, #2E7D32)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Nos Valeurs Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-forest-green text-center mb-12">
            Nos Valeurs Fondamentales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-light-gray rounded-lg p-6 shadow-md flex">
                <div className="mr-4 flex-shrink-0 mt-1">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-forest-green text-center mb-12">
            Une IA au service des agriculteurs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'bg-light-gray' : 'bg-white'}`}>
                <div className="text-3xl text-tech-blue mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How it Works */}
      <section className="py-16 bg-light-gray">
        <div className="container">
          <h2 className="text-3xl font-bold text-forest-green text-center mb-12">
            Comment ça marche ?
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center mb-8 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-forest-green text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Engagement durable */}
      <section className="py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "linear-gradient(135deg, #2E7D32, #1B5E20)",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="absolute inset-0 bg-forest-green bg-opacity-80 z-0"></div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-3xl font-bold text-center mb-8">
              Notre engagement durable
            </h2>
            <p className="mb-4 text-lg">
              Chez NutrIA, la durabilité est au cœur de notre mission. Nous nous engageons à développer des 
              solutions qui aident les agriculteurs à adopter des pratiques plus respectueuses de l&apos;environnement.
            </p>
            <p className="mb-4 text-lg">
              Notre technologie permet de réduire significativement l&apos;utilisation d&apos;intrants chimiques, 
              d&apos;optimiser la consommation d&apos;eau et d&apos;énergie, et de préserver la biodiversité des sols.
            </p>
            <p className="text-lg">
              En choisissant NutrIA, vous contribuez à construire une agriculture plus durable pour les 
              générations futures.
            </p>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-lg mx-auto p-6 border border-golden-yellow rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-golden-yellow flex items-center justify-center text-white text-3xl">
                <FaLeaf />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">
              Certifications et engagements
            </h3>
            <p className="text-center mb-6">
              NutrIA est certifiée RGPD et s&apos;engage à respecter les plus hauts standards en matière de 
              protection des données personnelles et de sécurité informatique.
            </p>
            <div className="flex justify-center space-x-6">
              <div className="flex flex-col items-center">
                <FaDatabase className="text-2xl text-tech-blue mb-2" />
                <span className="text-sm font-medium">RGPD</span>
              </div>
              <div className="flex flex-col items-center">
                <FaChartBar className="text-2xl text-forest-green mb-2" />
                <span className="text-sm font-medium">ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default AboutPage; 