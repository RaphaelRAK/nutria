import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-20 pb-32 flex items-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 to-forest-green/50"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">NutrIA : </span>
            <span className="text-golden-yellow">L&apos;IA pour une agriculture durable et performante</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Optimisez vos rendements tout en respectant l&apos;environnement grâce à notre technologie d&apos;intelligence artificielle de pointe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/about" 
              className="btn bg-tech-blue text-white px-8 py-4 rounded-lg font-medium hover:bg-tech-blue/90 transition shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Découvrir notre solution
            </Link>
            <Link 
              href="/contact" 
              className="btn bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition flex items-center justify-center"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="hidden lg:block absolute right-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-tl from-tech-blue/20 to-transparent rounded-tl-[100px] backdrop-blur-sm"></div>
    </div>
  );
};

export default Hero; 