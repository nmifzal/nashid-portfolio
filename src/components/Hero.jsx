import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 max-w-7xl mx-auto pt-20 relative">
      <div className="w-full text-center relative z-10">
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-mono mb-4 text-lg"
        >
            Hi, my name is
        </motion.p>
        
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-gray-100 mb-4 tracking-tight"
        >
            Mohammed Nashid Mifzal P.
        </motion.h1>
        
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-gray-400 mb-8"
        >
            I build things for the web & mobile.
        </motion.h2>
        
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-xl mx-auto text-gray-400 text-lg mb-12 leading-relaxed"
        >
            I'm a Frontend Engineer specializing in building scalable web and mobile interfaces using <span className="text-primary">React</span>, <span className="text-primary">Angular</span>, and <span className="text-primary">Flutter</span>.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <a href="#experience" className="px-8 py-4 border-2 border-primary text-primary rounded hover:bg-primary/10 transition-colors font-mono text-sm">
                Check out my work
            </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
