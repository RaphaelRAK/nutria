import Header from '../components/Header';
import Footer from '../components/Footer';

const PricingPage = () => {
  return (
    <main className="pt-16">
      <Header />
      
      {/* Pricing Hero */}
      <section className="py-16 bg-light-gray">
        <div className="container">
          <h1 className="text-4xl font-bold text-forest-green text-center mb-4">
            Solutions adaptées à vos besoins
          </h1>
          <p className="text-lg text-center max-w-2xl mx-auto mb-8">
            Chez NutrIA, nous proposons des solutions personnalisées en fonction de la taille et des besoins 
            spécifiques de votre exploitation agricole. Consultez nos tarifs ci-dessous ou contactez-nous pour une offre sur mesure.
          </p>
        </div>
      </section>
      
      {/* Pricing Cards */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold text-forest-green text-center mb-12">
            Nos tarifs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* MIC Plan */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-forest-green">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center mb-6">MIC</h3>
                
                <div className="text-center mb-10">
                  <div className="flex justify-center items-baseline">
                    <span className="text-4xl font-bold">800 €</span>
                    <span className="text-gray-600 ml-1">/mois</span>
                  </div>
                  <p className="text-gray-500 mt-2">1ère année</p>
                </div>
                
                <ul className="space-y-4">
                  {/* <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-green mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Frais de 1ère année: </span>
                      <span className="font-bold">18 796,92 €</span>
                    </div>
                  </li> */}
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-green mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Abonnement après 12 mois: </span>
                      <span className="font-bold">500 €/mois</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-green mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Maintenance: </span>
                      <span className="font-bold">300 €</span>
                      <span> (ponctuel)</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="p-8 bg-gray-50 border-t">
                <h4 className="font-bold mb-4">Options mensuelles</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-tech-blue mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Optimisation: </span>
                      <span className="font-bold">100 €/mois</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-tech-blue mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Notifications: </span>
                      <span className="font-bold">100 €/mois</span>
                    </div>
                  </li>
                </ul>
                <a href="/contact" className="block text-center bg-tech-blue text-white font-medium py-3 rounded-md hover:bg-tech-blue/90 transition-colors">
                  Nous contacter
                </a>
              </div>
            </div>
            
            {/* PME Plan */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-tech-blue">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center mb-6">PME</h3>
                
                <div className="text-center mb-10">
                  <div className="flex justify-center items-baseline">
                    <span className="text-4xl font-bold">2 100 €</span>
                    <span className="text-gray-600 ml-1">/mois</span>
                  </div>
                  <p className="text-gray-500 mt-2">1ère année</p>
                </div>
                
                <ul className="space-y-4">
                  {/* <li className="flex items-start">
                    <svg className="w-5 h-5 text-tech-blue mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Frais de 1ère année: </span>
                      <span className="font-bold">18 796,92 €</span>
                    </div>
                  </li> */}
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-tech-blue mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Abonnement après 12 mois: </span>
                      <span className="font-bold">1 200 €/mois</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-tech-blue mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Maintenance: </span>
                      <span className="font-bold">500 €</span>
                      <span> (ponctuel)</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="p-8 bg-gray-50 border-t">
                <h4 className="font-bold mb-4">Options mensuelles</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-tech-blue mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Optimisation: </span>
                      <span className="font-bold">200 €/mois</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-tech-blue mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Notifications: </span>
                      <span className="font-bold">200 €/mois</span>
                    </div>
                  </li>
                </ul>
                <a href="/contact" className="block text-center bg-tech-blue text-white font-medium py-3 rounded-md hover:bg-tech-blue/90 transition-colors">
                  Nous contacter
                </a>
              </div>
            </div>
            
            {/* ETI Plan */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-purple-500">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center mb-6">ETI</h3>
                
                <div className="text-center mb-10">
                  <div className="flex justify-center items-baseline">
                    <span className="text-4xl font-bold">3 400 €</span>
                    <span className="text-gray-600 ml-1">/mois</span>
                  </div>
                  <p className="text-gray-500 mt-2">1ère année</p>
                </div>
                
                <ul className="space-y-4">
                  {/* <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Frais de 1ère année: </span>
                      <span className="font-bold">18 796,92 €</span>
                    </div>
                  </li> */}
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Abonnement après 12 mois: </span>
                      <span className="font-bold">2 000 €/mois</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Maintenance: </span>
                      <span className="font-bold">700 €</span>
                      <span> (ponctuel)</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="p-8 bg-gray-50 border-t">
                <h4 className="font-bold mb-4">Options mensuelles</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-tech-blue mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Optimisation: </span>
                      <span className="font-bold">350 €/mois</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-tech-blue mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Notifications: </span>
                      <span className="font-bold">350 €/mois</span>
                    </div>
                  </li>
                </ul>
                <a href="/contact" className="block text-center bg-tech-blue text-white font-medium py-3 rounded-md hover:bg-tech-blue/90 transition-colors">
                  Nous contacter
                </a>
              </div>
            </div>
            
            {/* GE Plan */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-amber-500">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center mb-6">GE</h3>
                
                <div className="text-center mb-10">
                  <div className="flex justify-center items-baseline">
                    <span className="text-4xl font-bold">4 800 €</span>
                    <span className="text-gray-600 ml-1">/mois</span>
                  </div>
                  <p className="text-gray-500 mt-2">1ère année</p>
                </div>
                
                <ul className="space-y-4">
                  {/* <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Frais de 1ère année: </span>
                      <span className="font-bold">18 796,92 €</span>
                    </div>
                  </li> */}
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Abonnement après 12 mois: </span>
                      <span className="font-bold">3 000 €/mois</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Maintenance: </span>
                      <span className="font-bold">1 000 €</span>
                      <span> (ponctuel)</span>
                    </div>
                  </li>
                </ul>
          </div>
          
              <div className="p-8 bg-gray-50 border-t">
                <h4 className="font-bold mb-4">Options mensuelles</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-tech-blue mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Optimisation: </span>
                      <span className="font-bold">500 €/mois</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-tech-blue mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span>Notifications: </span>
                      <span className="font-bold">500 €/mois</span>
                    </div>
                  </li>
                </ul>
                <a href="/contact" className="block text-center bg-tech-blue text-white font-medium py-3 rounded-md hover:bg-tech-blue/90 transition-colors">
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-light-gray p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-12">
            <p className="text-center text-lg mb-4">
              Pour plus d informations sur nos tarifs ou pour obtenir une offre personnalisée, contactez-nous.
            </p>
            <div className="text-center">
            <a 
              href="/contact" 
                className="inline-block bg-forest-green text-white font-bold px-8 py-3 rounded-lg hover:bg-forest-green/90 transition-all"
            >
              Contactez-nous
            </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-forest-green mb-6">
              Demandez une offre personnalisée
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-dark-gray mb-2">Nom complet</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-dark-gray mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="farmType" className="block text-dark-gray mb-2">Type d&apos;exploitation</label>
                  <select 
                    id="farmType" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                  >
                    <option value="">Sélectionnez une option</option>
                    <option value="cereals">Céréales</option>
                    <option value="vegetables">Maraîchage</option>
                    <option value="fruits">Arboriculture</option>
                    <option value="viticulture">Viticulture</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="size" className="block text-dark-gray mb-2">Taille (hectares)</label>
                  <input 
                    type="number" 
                    id="size" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                    placeholder="Superficie en hectares"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="location" className="block text-dark-gray mb-2">Localisation</label>
                <input 
                  type="text" 
                  id="location" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                  placeholder="Département ou région"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-dark-gray mb-2">Message (optionnel)</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                  placeholder="Précisez vos besoins spécifiques ou posez-nous vos questions"
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="btn btn-primary w-full md:w-auto"
                >
                  Envoyer ma demande
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-light-gray">
        <div className="container">
          <h2 className="text-3xl font-bold text-forest-green text-center mb-12">
            Pourquoi choisir NutrIA ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-tech-blue mb-3">Solution sur mesure</h3>
              <p>
                Nos offres sont entièrement personnalisées en fonction de vos besoins, de la taille de votre 
                exploitation et de vos objectifs spécifiques.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-tech-blue mb-3">Accompagnement dédié</h3>
              <p>
                Bénéficiez d&apos;un suivi personnalisé et d&apos;une assistance technique assurée par nos experts en 
                agronomie et en technologie.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-tech-blue mb-3">Retour sur investissement</h3>
              <p>
                Nos clients constatent en moyenne une augmentation de 15% de leurs rendements et une réduction de 
                20% de leurs coûts d&apos;exploitation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-forest-green text-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-6">
              <p className="text-xl italic mb-4">
                &quot;Depuis que nous utilisons NutrIA, nous avons augmenté notre taux de phycocyanine , Un investissement qui s'est rapidement rentabilisé.". 
              </p>
              <p className="font-bold">
                Lucas VORRONI, Spirulinier à Sainte Marie
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default PricingPage; 