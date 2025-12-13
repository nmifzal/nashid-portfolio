import { motion } from 'framer-motion'
import Section from './Section'

const skillCategories = [
    {
        title: "Frontend",
        skills: ["React", "Angular", "Next.js", "Bootstrap", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
        title: "Mobile",
        skills: ["Flutter", "Ionic", "React Native"]
    },
    {
        title: "Backend & DB",
        skills: ["Node.js", "Express.js", "MongoDB", "Firebase"]
    },
    {
        title: "State Management",
        skills: ["Redux", "Zustand", "RxJS", "GetX"]
    },
    {
        title: "Languages",
        skills: ["JavaScript", "TypeScript", "Dart"]
    },
    {
        title: "DevOps & Tools",
        skills: ["Azure DevOps", "Docker", "Git", "CI/CD", "Postman"]
    }
]

const Skills = () => {
    return (
        <Section id="skills" title="Technical Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <motion.div 
                        key={index}
                        whileHover={{ y: -5 }}
                        className="bg-[#112240] p-6 rounded-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/30"
                    >
                        <h3 className="text-primary font-bold mb-4 text-lg">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map(skill => (
                                <span key={skill} className="text-gray-400 text-sm font-mono border border-gray-700 px-2 py-1 rounded hover:text-white transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}

export default Skills
