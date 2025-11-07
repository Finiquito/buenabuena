import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      {/* Header/Nav */}
      <nav className="fixed top-0 w-full bg-neutral-900/80 backdrop-blur-sm z-50 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="md-4">
            <Image 
              src="/logo-largo-fondo-blanco-gris.svg" 
              alt="Buena Buena"
              width={200}
              height={40}
            />
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#nosotros" className="hover:text-yellow-400 transition">Nosotros</a>
            <a href="#proyectos" className="hover:text-yellow-400 transition">Proyectos</a>
            <a href="#personas" className="hover:text-yellow-400 transition">Personas</a>
            <a href="#contacto" className="hover:text-yellow-400 transition">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
<section className="h-[85vh] flex items-center justify-center px-6 relative">
  <div className="max-w-6xl w-full">
    {/* Logo */}
    <div className="w-[280px] md:w-[380px] mb-12">
      <Image 
        src="/logo-fondo-negro.svg" 
        alt="Buena Buena"
        width={305}
        height={200}
        className="w-full h-auto"
      />
    </div>

    {/* Menú lateral oculto */}
<div className="fixed right-0 top-0 h-screen w-full pointer-events-none z-5 hidden md:block">
  {/* Área sensible al hover - más ancha */}
  <div className="absolute right-0 top-0 h-full w-32 pointer-events-auto group">
    
    {/* Línea horizontal que cruza toda la web - SIEMPRE VISIBLE */}
    <div className="fixed left-1/2 top-1/2 w-1/2 h-[1px] bg-gradient-to-r from-buena-gris/0 to-buena-gris/20 mt-9 z-4"></div>
    
    {/* Contenedor del menú que se desliza */}
    <div className="absolute right-30 top-1/2 -translate-y-1/2 translate-x-full group-hover:translate-x-25 transition-transform duration-700 ease-out w-[280px]">
      
      {/* SVG con las ramas orgánicas - MÁS ANCHAS */}
      <svg width="280" height="500" viewBox="0 0 280 500" className="absolute right-0 top-0">
        
        {/* Punto de conexión con línea principal */}
        <circle cx="19" cy="250" r="2" fill="#eade27" opacity="0.5"/>
        
        {/* Ramas que se bifurcan - MÁS SEPARADAS Y ANCHAS */}
        
        {/* Rama 1 - A Home (Amarilla) */}
        <path 
          d="M 20 250 Q 60 250, 80 150 T 150 50" 
          stroke="#eade27" 
          strokeWidth="1.5" 
          fill="none"
          opacity="0.6"
        />
        
        {/* Rama 2 - A Personas (Gris) */}
        <path 
          d="M 20 250 Q 60 250, 80 190 T 150 140" 
          stroke="white" 
          strokeWidth="1" 
          fill="none"
          opacity="0.2"
        />

         {/* Rama 2 - A Personas (Gris) */}
        <path 
          d="M 20 250 Q 60 250, 80 250 T 150 230" 
          stroke="white" 
          strokeWidth="1" 
          fill="none"
          opacity="0.2"
        />
        
        {/* Rama 3 - A Proyectos (Gris) */}
        <path 
          d="M 20 250 Q 60 250, 80 290 T 150 325" 
          stroke="white" 
          strokeWidth="1" 
          fill="none"
          opacity="0.2"
        />
        
        {/* Rama 4 - A Contacto (Gris) */}
        <path 
          d="M 20 250 Q 60 250, 80 330 T 150 420" 
          stroke="white" 
          strokeWidth="1" 
          fill="none"
          opacity="0.2"
        />
      </svg>
      
      {/* Items del menú - MÁS SEPARADOS */}
      <div className="relative pl-[170px] space-y-16 pt-8">
        <a 
          href="/" 
          className="block text-buena-amarillo hover:text-buena-amarillo/70 text-xl font-light transition-all duration-300 tracking-wide"
        >
          Home
        </a>
        <a 
          href="#personas" 
          className="block text-buena-gris/80 hover:text-buena-gris text-xl font-light transition-all duration-300 tracking-wide"
        >
          Personas
        </a>
        <a 
          href="#proyectos" 
          className="block text-buena-gris/80 hover:text-buena-gris text-xl font-light transition-all duration-300 tracking-wide"
        >
          Proyectos
        </a>
        <a 
          href="#proyectos" 
          className="block text-buena-gris/80 hover:text-white text-xl font-light transition-all duration-300 tracking-wide"
        >
          Somos
        </a>
        <a 
          href="#contacto" 
          className="block text-buena-gris/80 hover:text-white text-xl font-light transition-all duration-300 tracking-wide"
        >
          Contacto
        </a>
      </div>
    </div>
  </div>
</div>


    {/* Frase potente */}
    <h1 className="text-5xl md:text-6xl font-grotesk font-normal leading-tight max-w-4xl mb-16">
      Trabajo honesto<br/>
      <span className="text-white/70">Colaboración real</span><br/>
      <span className="text-white/50">Ideas que funcionan</span>
    </h1>

    {/* Tag arquitectónico - Módulo amarillo flotante */}
    <div className="relative inline-block group cursor-pointer">
      <div className="absolute -inset-4 bg-buena-gris/10 rounded-3xl blur-xl group-hover:bg-buena-amarillo/20 transition-all duration-500"></div>
      <div className="relative">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-buena-amarillo rounded-full animate-pulse"></div>
          <div className="border-l-1 border-buena-amarillo pl-6 py-3">
            <span className="text-2xl md:text-3xl font-light tracking-wider text-white/90">
              CREATIVIDAD ORGÁNICA
            </span>
          </div>
          <div className="w-16 h-[2px] bg-buena-amarillo/50"></div>
        </div>
      </div>
    </div>
  </div>

  {/* Indicador de scroll */}
 
</section>

{/* 3 Bloques que se asoman */}
<section className="px-6 pb-32 -mt-16">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
    
    {/* Bloque 1 */}
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-buena-amarillo/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative p-8 border-t border-white/10 hover:border-buena-amarillo/30 transition-all duration-500">
        <div className="text-4xl font-semibold font-grotesk text-white/30 mb-6">QUÉ</div>
        <p className="text-white/70 text-lg leading-relaxed">
          Diseño, ilustración, desarrollo web, fotografía, escritura y dirección creativa 
          desde distintas partes del mundo.
        </p>
      </div>
    </div>

    {/* Bloque 2 */}
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-buena-amarillo/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative p-8 border-t border-white/10 hover:border-buena-amarillo/30 transition-all duration-500">
        <div className="text-4xl font-semibold font-grotesk text-white/30 mb-6">CÓMO</div>
        <p className="text-white/70 text-lg leading-relaxed">
          Nos organizamos como colectivo colaborativo. Las decisiones se toman 
          entre quienes participan de cada proyecto.
        </p>
      </div>
    </div>

    {/* Bloque 3 */}
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-buena-amarillo/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative p-8 border-t border-white/10  hover:border-buena-amarillo/30 transition-all duration-500">
        <div className="text-4xl font-semibold font-grotesk text-white/30 mb-6">PARA QUÉ</div>
        <p className="text-white/70 text-lg leading-relaxed">
          Estrategia de marca, publicaciones, identidad visual, campañas publicitarias y plataformas digitales. Proyectos de cualquier escala.
        </p>
      </div>
    </div>

  </div>
</section>

      {/* Personas */}
      <section id="personas" className="py-32 bg-buena-light px-6 border-t border-buena-gris30">
        <div className="max-w-7xl mx-auto z-10 relative">
          <h2 className="text-5xl md:text-6xl font-normal text-buena-negro mb-4">Somos</h2>
          <p className="text-neutral-800 text-xl mb-12 max-w-2xl">
            Creativos y amigos trabajando desde distintas partes del mundo.
          </p>

          <div className="space-y-1">
            {/* Confirmados */}
            <div className="group border-t border-buena-gris/30 py-8 hover:bg-buena-amarillo transition-all duration-300 cursor-pointer -mb-px">
              <div className="flex justify-between items-center px-4">
                <div className="relative h-10 overflow-hidden w-full max-w-2xl">
                  <div className="absolute inset-0 group-hover:-translate-y-full transition-transform duration-500">
                    <span className="text-3xl md:text-4xl text-buena-negro  block leading-[2.5rem]">
                      Richard González Tapia
                    </span>
                  </div>
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-2xl md:text-3xl text-buena-negro block leading-[2.5rem]">
                      Diseñador Gráfico Chileno
                    </span>
                  </div>
                </div>
                <span className="text-xl md:text-2xl text-buena-negro/60 ml-4">Francia</span>
              </div>
            </div>

            <div className="group border-t border-buena-gris/30 py-8 hover:bg-buena-amarillo transition-all duration-300 cursor-pointer -mb-px">
              <div className="flex justify-between items-center px-4">
                <div className="relative h-10 overflow-hidden w-full max-w-2xl">
                  <div className="absolute inset-0 group-hover:-translate-y-full transition-transform duration-500">
                    <span className="text-3xl md:text-4xl text-buena-negro block leading-[2.5rem]">
                      Daniel Dorta 
                    </span>
                  </div>
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-2xl md:text-3xl text-buena-negro block leading-[2.5rem]">
                      Publicista & Creativo Venezolano
                    </span>
                  </div>
                </div>
                <span className="text-xl md:text-2xl text-buena-negro/60 ml-4">Panamá</span>
              </div>
            </div>

            <div className="group border-t border-buena-gris/30 py-8 hover:bg-white/50 transition-all duration-300 cursor-pointer opacity-30 -mb-px">
              <div className="flex justify-between items-center px-4">
                <div className="relative h-10 overflow-hidden w-full max-w-2xl">
                  <div className="absolute inset-0 group-hover:-translate-y-full transition-transform duration-500">
                    <span className="text-3xl md:text-4xl text-buena-negro font-normal block leading-[2.5rem]">Carlos Castillo <small className="text-[1.3rem] font-mono align-middle ml-2"> (por confirmar) </small></span>
                  </div>
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-2xl md:text-3xl text-buena-negro block leading-[2.5rem]">Diseñador y Dibujante Chileno </span>
                  </div>
                </div>
                <span className="text-xl md:text-2xl text-neutral-500">Chile</span>
              </div>
            </div>

            <div className="group border-t border-buena-gris/30 py-8 hover:bg-white/50 transition-all duration-300 cursor-pointer opacity-30 -mb-px">
              <div className="flex justify-between items-center px-4">
                <div className="relative h-10 overflow-hidden w-full max-w-2xl">
                  <div className="absolute inset-0 group-hover:-translate-y-full transition-transform duration-500">
                    <span className="text-3xl md:text-4xl text-buena-negro block leading-[2.5rem]">Josefina Frías V. <small className="text-[1.3rem] font-mono align-middle ml-2"> (por confirmar) </small></span>
                  </div>
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-2xl md:text-3xl text-buena-negro block leading-[2.5rem]">Escritora Digital Chilena   </span>
                  </div>
                </div>
                <span className="text-xl md:text-2xl text-neutral-500">España</span>
              </div>
            </div>

            <div className="group border-t border-buena-gris/30 py-8 hover:bg-white/50 transition-all duration-300 cursor-pointer opacity-30 -mb-px">
              <div className="flex justify-between items-center px-4">
                <div className="relative h-10 overflow-hidden w-full max-w-2xl">
                  <div className="absolute inset-0 group-hover:-translate-y-full transition-transform duration-500">
                    <span className="text-3xl md:text-4xl text-buena-negro block leading-[2.5rem]">José Luis Oportot   <small className="text-[1.3rem] font-mono align-middle ml-2"> (por confirmar) </small></span>
                  </div>
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-2xl md:text-3xl text-buena-negro block leading-[2.5rem]">Diseñador & Ilustrador Chileno</span>
                  </div>
                </div>
                <span className="text-xl md:text-2xl text-neutral-500">Chile</span>
              </div>
            </div>

            <div className="group border-t border-buena-gris/30 py-8 hover:bg-white/50 transition-all duration-300 cursor-pointer opacity-30 -mb-px">
              <div className="flex justify-between items-center px-4">
                <div className="relative h-10 overflow-hidden w-full max-w-2xl">
                  <div className="absolute inset-0 group-hover:-translate-y-full transition-transform duration-500">
                    <span className="text-3xl md:text-4xl text-buena-negro  block leading-[2.5rem]">Carlos Molina   <small className="text-[1.3rem] font-mono align-middle ml-2"> (por confirmar) </small> </span>
                  </div>
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-2xl md:text-3xl text-buena-negro block leading-[2.5rem]">Web Developer & Content Creator Venezolano</span>
                  </div>
                </div>
                <span className="text-xl md:text-2xl text-neutral-500">España</span>
              </div>
            </div>

            <div className="border-t border-buena-gris/10"></div>
          </div>
        </div>
      </section>

      

      {/* CTA Simple */}
      <section className="py-20 px-6 bg-buena-amarillo/80 text-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-lg mb-8">
            Conversemos sobre cómo podemos colaborar.
          </p>
          <a 
            href="#contacto" 
            className="inline-block bg-black text-white px-8 py-4 font-bold hover:bg-neutral-800 transition"
          >
            Hablemos →
          </a>
        </div>
      </section>

      {/* Footer simple */}
      <footer className="py-12 px-6 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto text-center text-neutral-500 text-sm">
          <p>© 2025 Buena Buena. Colectivo creativo.</p>
        </div>
      </footer>
    </main>
  )
}