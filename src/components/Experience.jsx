import Section from './Section'

const experiences = [
    {
        company: "Populus Empowerment Network (PEN)",
        role: "Software Engineer",
        period: "July 2023 - Present",
        description: [
            "Launched a production-ready Flutter app serving over 15,000 users, integrating Strapi CMS.",
            "Designed Node.js API endpoints for topic-based push notifications, increasing user interaction by 35%.",
            "Developed Next.js + React Leaflet interactive dashboards with Redux state management.",
            "Optimized development workflows using Vite and Dockerized backend services for Azure deployment."
        ],
        tags: ["Flutter", "Node.js", "React", "Next.js", "Docker", "Azure"]
    },
    {
        company: "Peninsular Research Operations",
        role: "Software Developer",
        period: "Sept 2022 - June 2023",
        description: [
            "Built modular UI-configurable chart components in Angular/Chart.js.",
            "Integrated Form.io for drag-and-drop form builders.",
            "Transitioned into Flutter hybrid mobile app development with GetX state management."
        ],
        tags: ["Angular", "Chart.js", "Flutter", "GetX"]
    },
    {
        company: "Elixir Business Solutions",
        role: "Software Developer",
        period: "Dec 2020 - Sept 2022",
        description: [
            "Delivered 5+ pixel-perfect Angular UI projects.",
            "Developed cross-platform apps in Ionic Angular with Node.js/MongoDB backends.",
            "Maintained 5+ CI/CD pipelines in Azure DevOps, reducing deployment time by 40%.",
            "Explored advanced rendering with Next.js."
        ],
        tags: ["Angular", "Ionic", "Node.js", "MongoDB", "Azure DevOps"]
    }
]

const Experience = () => {
  return (
    <Section id="experience" title="Where I've Worked">
        <div className="relative border-l border-gray-700 ml-3 md:ml-6 space-y-12">
            {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-12 group">
                    {/* Timeline Dot */}
                    <span className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-gray-600 group-hover:bg-primary transition-colors border-2 border-secondary"></span>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-200 group-hover:text-primary transition-colors">
                            {exp.role} <span className="text-primary">@ {exp.company}</span>
                        </h3>
                        <span className="font-mono text-xs text-gray-500 mt-1 sm:mt-0">{exp.period}</span>
                    </div>

                    <ul className="list-disc marker:text-primary space-y-2 ml-4 text-gray-400 mb-4">
                        {exp.description.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                        {exp.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </Section>
  )
}

export default Experience
