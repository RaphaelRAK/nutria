import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import Footer from './components/Footer';
import { FaDna, FaChartLine, FaLeaf } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <FeatureCards />
      
      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-forest-green mb-6">
                Une technologie innovante au service de l&apos;agriculture
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Chez NutrIA, nous combinons l&apos;intelligence artificielle et l&apos;expertise agricole pour 
                vous aider à prendre les meilleures décisions pour vos cultures. Notre plateforme analyse vos 
                données, les conditions météorologiques et l&apos;état de vos sols pour vous fournir des 
                recommandations précises et personnalisées.
              </p>
              <p className="text-gray-700 mb-8 text-lg">
                Grâce à notre technologie, vous pouvez optimiser l&apos;utilisation des ressources, réduire 
                votre impact environnemental et augmenter vos rendements de manière significative.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green mr-4 shrink-0">
                    <FaDna />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Analyse de données avancée</h3>
                    <p className="text-gray-600">Nos algorithmes analysent des millions de points de données pour des recommandations optimales.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green mr-4 shrink-0">
                    <FaChartLine />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Amélioration continue</h3>
                    <p className="text-gray-600">Notre IA apprend en permanence pour affiner ses prédictions et s'adapter à votre exploitation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green mr-4 shrink-0">
                    <FaLeaf />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Respect de l'environnement</h3>
                    <p className="text-gray-600">Nos solutions favorisent des pratiques agricoles durables et respectueuses de la biodiversité.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-green/20 to-tech-blue/20 rounded-xl -z-10 translate-x-4 translate-y-4"></div>
              <div className="rounded-xl overflow-hidden shadow-2xl aspect-[4/3] relative">
                <img 
                  src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop"
                  alt="Agriculteur utilisant une tablette dans son champ" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-24 bg-light-gray relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-forest-green/5"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-tech-blue/5"></div>
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-green mb-4">Ce que disent nos clients</h2>
            <p className="text-gray-700 text-lg">Découvrez comment NutrIA a transformé l'agriculture de nos clients.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1520342868574-5fa3804e551c?q=80&w=1000&auto=format&fit=crop" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Marie Dupont</h4>
                  <p className="text-gray-500 text-sm">Viticultrice - Bordeaux</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Depuis que nous utilisons NutrIA, nous avons réduit notre consommation d'eau de 30% et augmenté nos rendements de près de 20%. Un investissement qui s'est rapidement rentabilisé."</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Jean Martin</h4>
                  <p className="text-gray-500 text-sm">Céréalier - Beauce</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Les prédictions de NutrIA m'ont permis d'anticiper des problèmes phytosanitaires et d'intervenir avant que les dégâts ne soient trop importants. Je recommande vivement."</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Sophie Leroux</h4>
                  <p className="text-gray-500 text-sm">Maraîchère - Provence</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"L'interface est intuitive et les recommandations sont pertinentes. J'apprécie particulièrement les alertes en temps réel qui me permettent de réagir rapidement aux changements climatiques."</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-forest-green to-tech-blue text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à révolutionner votre approche agricole ?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg">
            Rejoignez les agriculteurs qui transforment déjà leur exploitation avec NutrIA.
            Demandez une démonstration personnalisée dès aujourd&apos;hui.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-tech-blue px-10 py-4 rounded-lg font-bold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
          >
            Demander une démo
          </a>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 