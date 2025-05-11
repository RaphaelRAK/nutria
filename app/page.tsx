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
      
      {/* Video Showcase Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-forest-green/5 to-transparent"></div>
        {/* Éléments décoratifs */}
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-tech-blue/5 blur-xl"></div>
        <div className="absolute bottom-12 left-12 w-32 h-32 rounded-full bg-forest-green/5 blur-lg"></div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-forest-green/5 opacity-50">
            <path fill="currentColor" d="M38.6,-65.1C50.9,-59.4,62.3,-49.8,68.6,-37.4C74.9,-25,76,-9.9,73.4,4.2C70.8,18.3,64.5,31.3,56.3,43.9C48.2,56.5,38.1,68.7,25.5,74.1C13,79.6,-2,78.3,-15.7,73.4C-29.4,68.5,-41.8,60,-51.5,48.7C-61.1,37.5,-68,23.5,-71.7,8.3C-75.3,-7,-75.7,-23.5,-68.7,-35.4C-61.7,-47.3,-47.3,-54.7,-33.9,-60C-20.5,-65.3,-7.9,-68.5,4.1,-75.2C16.1,-81.9,32.3,-92.2,38.6,-65.1Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-forest-green/10 text-forest-green text-sm font-semibold mb-4">
              <span className="mr-2">✨</span>
              <span>Nouvelle version disponible</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
              Découvrez NutrIA <span className="text-tech-blue">en action</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Notre application mobile intelligente met la puissance de l&apos;IA au service de l&apos;agriculture 
              pour optimiser vos cultures et maximiser vos rendements.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-tech-blue/10 text-tech-blue">Intelligence artificielle</span>
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-forest-green/10 text-forest-green">Analyse prédictive</span>
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-golden-yellow/10 text-golden-yellow">Expérience optimisée</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-2 bg-tech-blue/10 text-tech-blue rounded-full font-semibold text-sm mb-6">
                Application mobile
              </div>
              <h3 className="text-3xl font-bold text-forest-green mb-4">
                Une technologie de pointe dans votre poche
              </h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Notre application NutrIA met la puissance de l&apos;intelligence artificielle dans votre smartphone. 
                Accédez à des analyses détaillées, recevez des recommandations personnalisées et optimisez vos cultures 
                où que vous soyez, quand vous le souhaitez.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center text-tech-blue mb-4">
                    <span className="text-xl">📊</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Interface intuitive</h4>
                  <p className="text-gray-600">Navigation simplifiée pour une prise en main rapide et efficace.</p>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green mb-4">
                    <span className="text-xl">🔔</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Notifications en temps réel</h4>
                  <p className="text-gray-600">Soyez alerté immédiatement des changements importants dans vos cultures.</p>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center text-tech-blue mb-4">
                    <span className="text-xl">🔄</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Synchronisation automatique</h4>
                  <p className="text-gray-600">Vos données accessibles sur tous vos appareils, tout le temps.</p>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green mb-4">
                    <span className="text-xl">📈</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Analyses détaillées</h4>
                  <p className="text-gray-600">Visualisez vos données sous forme de graphiques et tableaux facilement compréhensibles.</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-forest-green text-white rounded-lg font-semibold hover:bg-forest-green/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                  <span>Essayer gratuitement</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="px-8 py-4 bg-white text-tech-blue border border-tech-blue/30 rounded-lg font-semibold hover:bg-tech-blue/5 transition-all flex items-center justify-center">
                  <span>Voir la démo</span>
                </button>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="max-w-[400px] mx-auto md:mr-0 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-forest-green/20 to-tech-blue/20 rounded-[2rem] -z-10 translate-x-4 translate-y-4 transition-all group-hover:translate-x-5 group-hover:translate-y-5"></div>
                <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-gradient-to-b from-gray-100 to-white">
                  <video 
                    src="/videos/iphoneMockup.mp4" 
                    className="w-full object-contain mx-auto"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    controls
                    style={{ aspectRatio: '10/16', maxHeight: '650px' }}
                  />
                  <div className="absolute bottom-14 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm text-center font-medium">Voir notre application en action</p>
                  </div>
                </div>
                {/* Indicateur de lecture */}
                <div className="absolute bottom-4 right-4 bg-tech-blue w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="mt-4 text-center text-sm text-gray-600">
                  <p>Interface intuitive optimisée pour les appareils iOS et Android</p>
                  <p className="mt-1 text-xs text-tech-blue">Cliquez sur la vidéo pour contrôler la lecture</p>
                </div>
              </div>
              
              {/* Badge d'information */}
              <div className="hidden md:block absolute -right-8 top-1/3 bg-white rounded-lg shadow-lg p-3 transform rotate-12">
                <p className="text-forest-green text-sm font-bold">Interface moderne</p>
                <p className="text-xs text-gray-500">Expérience utilisateur optimale</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
                  <p className="text-gray-500 text-sm">Viticultrice - Saint Denis</p>
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
                  <p className="text-gray-500 text-sm">Céréalier - Sainte Marie</p>
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
                  <p className="text-gray-500 text-sm">Maraîchère - Tampon</p>
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