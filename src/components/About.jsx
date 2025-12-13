import Section from './Section'

const About = () => {
    const technologies = ['React', 'Angular', 'Flutter', 'Next.js', 'Typescript', 'Node.js', 'Redux', 'Zustand']

  return (
    <Section id="about" title="About Me">
        <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 text-gray-400 text-lg leading-relaxed space-y-4">
                <p>
                    Hello! My name is <strong className="text-primary">Nashid</strong> and I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
                </p>
                <p>
                    Fast-forward to today, I've had the privilege of creating software for <span className="text-primary">multiple startups</span> and <span className="text-primary">enterprise clients</span>. My main focus these days is building accessible, inclusive products and digital experiences.
                </p>
                <p>
                    I have 4+ years of broad experience in the frontend ecosystem, moving seamlessly between web (React/Angular) and mobile (Flutter) development.
                </p>
                <p>
                    Here are a few technologies I've been working with recently:
                </p>
                <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm max-w-md">
                    {technologies.map(tech => (
                        <li key={tech} className="flex items-center">
                            <span className="text-primary mr-2">▹</span> {tech}
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Image Placeholder or 3D Element */}
            <div className="relative group">
                <div className="relative z-10 w-full max-w-xs mx-auto aspect-square bg-gray-700/50 rounded-lg overflow-hidden flex items-center justify-center border-2 border-primary/20 hover:border-primary/50 transition-colors">
                    {/* In a real scenario, an image would go here. For now, a placeholder icon or initial. */}
                    <span className="text-6xl font-bold text-gray-500 group-hover:text-primary transition-colors">NM</span>
                </div>
                <div className="absolute top-4 left-4 w-full h-full border-2 border-primary rounded-lg -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-300"></div>
            </div>
        </div>
    </Section>
  )
}

export default About
