import { motion } from 'framer-motion'

const Section = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-20 max-w-7xl mx-auto ${className}`}>
        {title && (
            <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold mb-10 text-primary flex items-center"
            >
                <span className="mr-2 text-primary">#</span> {title}
                <div className="h-px bg-gray-700 flex-grow ml-4 max-w-[200px]"></div>
            </motion.h2>
        )}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    </section>
  )
}

export default Section
