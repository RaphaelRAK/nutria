import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <main className="pt-16">
      <Header />
      
      {/* Contact Hero */}
      <section className="py-16 bg-light-gray">
        <div className="container">
          <h1 className="text-4xl font-bold text-forest-green text-center mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-center max-w-2xl mx-auto mb-8">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous aider à 
            trouver la solution qui correspond le mieux à vos besoins.
          </p>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-forest-green mb-6">
                Nos coordonnées
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  {/* <div className="text-tech-blue mr-4 mt-1">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Téléphone</h3>
                    <p>0262 012 645</p>
                    <p className="text-sm text-gray-500">Lundi au vendredi, 9h-18h</p>
                  </div> */}
                </div>
                
                <div className="flex items-start">
                  <div className="text-tech-blue mr-4 mt-1">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p>nutria.iaandfood@gmail.com</p>
                    
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-tech-blue mr-4 mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Adresse</h3>
                    <p>Parc Technologique Universitaire, 2 Rue Joseph Wetzell</p>
                    <p>Sainte-Clotilde 97490, La Réunion</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-tech-blue mr-4 mt-1">
                    <FaTwitter />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Réseaux sociaux</h3>
                    <p>@NutrIA</p>
                  </div>
                </div>
              </div>
              
              {/* Map placeholder */}
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Carte Google Maps</p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-forest-green mb-6">
                Envoyez-nous un message
              </h2>
              
              <form className="space-y-6">
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
                
                <div>
                  <label htmlFor="subject" className="block text-dark-gray mb-2">Sujet</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                    placeholder="L'objet de votre message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-dark-gray mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                    placeholder="Votre message"
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full"
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-light-gray">
        <div className="container">
          <h2 className="text-3xl font-bold text-forest-green text-center mb-12">
            Questions fréquentes
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-tech-blue mb-2">Comment fonctionne NutrIA ?</h3>
              <p>
                NutrIA collecte des données sur vos cultures, votre sol et les conditions météorologiques. 
                Notre algorithme d&apos;IA analyse ces données pour vous fournir des recommandations 
                personnalisées sur la gestion de vos cultures.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-tech-blue mb-2">Combien coûte votre service ?</h3>
              <p>
                Nos tarifs varient en fonction de la taille de votre exploitation et des fonctionnalités 
                dont vous avez besoin. Contactez-nous pour obtenir un devis personnalisé.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-tech-blue mb-2">Mes données sont-elles sécurisées ?</h3>
              <p>
                Absolument. NutrIA est certifiée RGPD et nous mettons en œuvre les mesures de sécurité les 
                plus strictes pour protéger vos données. Nous ne partageons jamais vos informations avec des 
                tiers sans votre consentement explicite.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default ContactPage; 