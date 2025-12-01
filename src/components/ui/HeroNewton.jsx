<section
  className="
    w-full h-[50vh] flex flex-col items-center justify-center 
    text-white text-center px-6
    bg-[url('/img/hero-bg.jpg')] bg-cover bg-center bg-no-repeat
    relative
  "
>
  {/* Capa de degradado institucional */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#013055]/80 via-[#007a75]/70 to-[#013055]/80"></div>

  {/* Contenido por encima del fondo */}
  <div className="relative z-10">
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl md:text-2xl font-bold font-montserrat leading-tight"
    >
      ¡Bienvenidos al Colegio<br />Privado de Ciencias Isaac Newton!
    </motion.h1>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="mt-10"
    >
      <a href="#mas-info">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <ChevronDown size={40} className="text-[#fccc00]" />
        </motion.div>
      </a>
    </motion.div>
  </div>
</section>
