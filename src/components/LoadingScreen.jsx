import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState([
    "> nashid-portfolio@1.0.0 build",
    "> vite build",
    "",
    "Building for production..."
  ])

  useEffect(() => {
    const timeouts = []
    
    const logs = [
      { text: "✓ 34 modules transformed.", delay: 800 },
      { text: "dist/index.html   0.45 kB", delay: 1400 },
      { text: "dist/assets/index.js  145.32 kB", delay: 2000 },
      { text: "dist/assets/index.css  22.15 kB", delay: 2400 },
      { text: "", delay: 2800 },
      { text: "Done in 2.85s.", delay: 3000 }
    ]

    logs.forEach(({ text: logText, delay }) => {
       const timeout = setTimeout(() => {
          setText(prev => [...prev, logText])
       }, delay)
       timeouts.push(timeout)
    })

    const finishTimeout = setTimeout(() => {
        onComplete()
    }, 3500)
    timeouts.push(finishTimeout)

    return () => timeouts.forEach(clearTimeout)
  }, [onComplete])

  return (
    <motion.div 
        className="fixed inset-0 z-50 bg-[#0a192f] text-gray-300 font-mono flex items-center justify-center p-4"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-2xl bg-[#112240] rounded-lg shadow-2xl overflow-hidden border border-gray-700/50">
        {/* Terminal Header */}
        <div className="bg-[#1d3557]/30 px-4 py-2 flex items-center gap-2 border-b border-gray-700/50">
           <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
           <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
           <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
           <div className="ml-2 text-xs text-gray-400">nashid — npm run build</div>
        </div>
        
        {/* Terminal Body */}
        <div className="p-6 h-64 overflow-y-auto overflow-x-hidden font-mono text-sm md:text-base leading-relaxed">
            {text.map((line, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`${line.startsWith('>') ? 'text-primary' : (line.includes('Done') ? 'text-green-400 font-bold' : 'text-gray-300')}`}
                >
                    {line}
                </motion.div>
            ))}
            <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-primary align-middle ml-1"
            />
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
