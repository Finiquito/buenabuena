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
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl">
          <div className="w-[260px] md:w-[360px] mb-6">
            <Image 
              src="/logo-fondo-negro.svg" 
              alt="Buena Buena"
              width={305}
              height={200}
              className="w-full h-auto"
            />
          </div>
          <p className="text-xl md:text-2xl text-buena-gris max-w-5xl leading-relaxed font-normal py-5">
           Buena Buena es (o quiere ser) un colectivo de creativos donde valoramos el trabajo honesto
            y la colaboración real. Trabajamos desde distintas partes del mundo, 
            nos unimos por proyecto, compartimos ideas y decisiones, manteniendo
             cada uno su identidad y autonomía.
          </p>
          <div className="bg-buena-amarillo rounded-2xl text-black inline-block px-6 py-2 mt-10 text-lg font-semibold">
            CREATIVIDAD ORGÁNICA
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 mt-10">
          <div>
            <h3 className="text-4xl font-normal mb-6 font-serif">
             Somos y queremos ser...
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-4 font-normal">
              Trabajamos desde distintas partes del mundo, nos unimos por proyecto, 
              compartimos conocimiento y decisiones, manteniendo cada uno su 
              identidad y autonomía.
            </p>
           <p className="text-white/70 text-lg leading-relaxed font-normal">
            Llevamos casi dos décadas trabajando con todo tipo de organizaciones 
            y personas: desde empresas y municipalidades hasta emprendedores con 
            una idea y ganas de hacerla realidad.
          </p>
          </div>
          <div>
            <div className="p-8 rounded-lg mt-8">
              <p className="text-white/70 text-lg leading-relaxed font-normal">
                Podemos ayudarte a:
                Crear o lanzar tu marca, tu proyecto o empresa. Te acompañamos 
                desde la estrategia hasta la ejecución, con diseño que funciona 
                y creatividad que conecta.
              </p>
            </div>
          </div>
        </div>
          
        </div>
      </section>


      {/* Personas */}
      <section id="personas" className="py-32 bg-buena-light px-6 border-t border-buena-gris30">
        <div className="max-w-7xl mx-auto">
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