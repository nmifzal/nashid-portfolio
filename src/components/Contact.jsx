import { Linkedin, Mail } from 'lucide-react'
import Section from './Section'

const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch" className="mb-20 text-center">
        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex justify-center gap-6 mb-12">
            <a 
                href="mailto:nmifzal@gmail.com" 
                className="flex items-center gap-2 px-6 py-3 bg-transparent border border-primary text-primary rounded hover:bg-primary/10 transition-colors"
            >
                <Mail size={20} />
                <span>Say Hello</span>
            </a>
        </div>

        <div className="flex flex-col items-center gap-4 text-gray-500 font-mono text-sm">
            <div className="flex gap-6">
                <a href="https://www.linkedin.com/in/nmifzal" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                    <Linkedin size={18} /> LinkedIn
                </a>
            </div>
            <p className="mt-8">Designed & Built by Mohammed Nashid Mifzal P</p>
        </div>
    </Section>
  )
}

export default Contact
