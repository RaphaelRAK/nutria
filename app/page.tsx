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
      
      {/* Mobile App Section */}
      <section className="py-24 bg-gradient-to-br from-forest-green/5 to-tech-blue/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-forest-green/20 to-tech-blue/20 rounded-[3rem] -z-10 translate-x-4 translate-y-4"></div>
                <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src="/iphone.png"
                    alt="Application mobile NutrIA pour l'analyse de la canne à sucre" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-forest-green mb-6">
                Intelligence Artificielle pour l&apos;Optimisation de la Canne à Sucre
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Notre application mobile embarque une IA de pointe spécialisée dans l&apos;analyse et l&apos;optimisation du taux de phytocyanine dans la canne à sucre. Cette innovation révolutionnaire permet aux agriculteurs de maximiser la qualité et le rendement de leurs cultures.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-xl mb-3 text-tech-blue">Analyse Prédictive Avancée</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-forest-green rounded-full mr-2"></span>
                      <span>Prévision précise des taux de phytocyanine</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-forest-green rounded-full mr-2"></span>
                      <span>Analyse des conditions environnementales</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-forest-green rounded-full mr-2"></span>
                      <span>Recommandations d&apos;irrigation personnalisées</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-xl mb-3 text-tech-blue">Fonctionnalités Intelligentes</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-forest-green rounded-full mr-2"></span>
                      <span>Surveillance en temps réel des cultures</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-forest-green rounded-full mr-2"></span>
                      <span>Alertes préventives automatisées</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-forest-green rounded-full mr-2"></span>
                      <span>Optimisation des cycles de croissance</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-xl mb-3 text-tech-blue">Bénéfices Concrets</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-forest-green rounded-full mr-2"></span>
                      <span>Augmentation moyenne de 25% du taux de phytocyanine</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-forest-green rounded-full mr-2"></span>
                      <span>Réduction de 30% des pertes de récolte</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-forest-green rounded-full mr-2"></span>
                      <span>ROI positif dès la première récolte</span>
                    </li>
                  </ul>
                </div>
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
      
      {/* Referral Program Section */}
      <section className="py-24 bg-gradient-to-r from-forest-green to-tech-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="inline-block px-4 py-2 bg-forest-green/10 text-forest-green rounded-full font-semibold text-sm mb-6">
                  Programme de Parrainage
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-4">
                  Parrainez un Agriculteur et Économisez Ensemble !
                </h2>
                <p className="text-gray-600 mb-8">
                  Recommandez NutrIA à vos collègues agriculteurs et bénéficiez tous les deux d&apos;avantages exclusifs. Une situation gagnant-gagnant pour développer l&apos;agriculture de demain.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center bg-forest-green/5 p-4 rounded-lg">
                    <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center text-forest-green mr-4">
                      🎁
                    </div>
                    <div>
                      <h3 className="font-semibold">5% de réduction</h3>
                      <p className="text-sm text-gray-600">Sur votre prochain abonnement annuel</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-tech-blue/5 p-4 rounded-lg">
                    <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center text-tech-blue mr-4">
                      🌱
                    </div>
                    <div>
                      <h3 className="font-semibold">Votre filleul économise aussi</h3>
                      <p className="text-sm text-gray-600">5% de réduction sur son premier abonnement</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full md:w-auto px-8 py-4 bg-forest-green text-white rounded-lg font-semibold hover:bg-forest-green/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Parrainer Maintenant
                </button>
              </div>
              
              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-br from-forest-green/90 to-tech-blue/90 mix-blend-multiply"></div>
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop" 
                  alt="Agriculteurs travaillant ensemble" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl font-bold mb-4">5%</div>
                    <div className="text-xl font-semibold">de réduction</div>
                    <div className="text-sm opacity-90">pour vous et votre filleul</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-semibold text-xl mb-2">Réseau d&apos;entraide</h3>
              <p className="opacity-90">Développez votre réseau professionnel et partagez vos expériences</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="font-semibold text-xl mb-2">Accès Privilégié</h3>
              <p className="opacity-90">Webinaires exclusifs et conseils personnalisés pour les parrains</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
              <div className="text-3xl mb-4">🌟</div>
              <h3 className="font-semibold text-xl mb-2">Programme Fidélité</h3>
              <p className="opacity-90">Cumulez des points pour chaque parrainage réussi</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 