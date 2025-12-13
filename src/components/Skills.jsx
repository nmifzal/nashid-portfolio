import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Section from './Section';

const technologies = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const TiltCard = ({ tech }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseXFromCenter = e.clientX - rect.left - width / 2
        const mouseYFromCenter = e.clientY - rect.top - height / 2
        
        x.set(mouseXFromCenter / width)
        y.set(mouseYFromCenter / height)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full aspect-square bg-[#112240] rounded-xl flex flex-col items-center justify-center cursor-pointer group"
        >
            {/* Embossed Border Effect */}
            <div 
                className="absolute inset-0 rounded-xl border border-white/10 shadow-[inner_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none"
                style={{ transform: "translateZ(20px)" }}
            ></div>
            
            {/* Floating Content */}
            <div style={{ transform: "translateZ(50px)" }} className="flex flex-col items-center">
                <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-12 h-12 mb-3 grayscale group-hover:grayscale-0 transition-all duration-300 drop-shadow-lg" 
                />
                <span className="text-gray-400 font-mono text-sm font-bold group-hover:text-primary transition-colors">
                    {tech.name}
                </span>
            </div>
            
            {/* Bottom Shadow for depth */}
            <div 
                className="absolute -inset-2 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"
                style={{ transform: "translateZ(-10px)" }}
            ></div>
        </motion.div>
    )
}

const Skills = () => {
  return (
    <Section id="skills" title="Technical Skills & Tools">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center perspective-1000">
        {technologies.map((tech) => (
            <TiltCard key={tech.name} tech={tech} />
        ))}
      </div>
    </Section>
  )
}

export default Skills
