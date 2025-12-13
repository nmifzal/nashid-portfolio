import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center px-6 md:px-20 max-w-7xl mx-auto pt-20">
      <div className="w-full">
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
            className="text-4xl md:text-6xl font-bold text-gray-400 mb-8"
        >
            I build things for the web & mobile.
        </motion.h2>
        
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-xl text-gray-400 text-lg mb-12 leading-relaxed"
        >
            I'm a Frontend Engineer specializing in building scalable web and mobile interfaces using <span className="text-primary">React</span>, <span className="text-primary">Angular</span>, and <span className="text-primary">Flutter</span>. I focus on pixel-perfect UI and high-performance applications.
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
    </section>
  )
}

export default Hero
