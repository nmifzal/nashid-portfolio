import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-primary font-mono text-xl font-bold border-2 border-primary p-1 rounded hover:bg-primary/10 transition-colors">
          NM
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-mono hover:text-primary transition-colors"
            >
              <span className="text-primary mr-1">0{index + 1}.</span>
              {link.name}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-colors text-sm font-mono">
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
            <div className="absolute top-full left-0 w-full bg-secondary shadow-xl p-6 flex flex-col items-center gap-6 md:hidden">
                {navLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.href} 
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-mono hover:text-primary"
                    >
                        {link.name}
                    </a>
                ))}
                <a href="/resume.pdf" className="px-6 py-3 border border-primary text-primary rounded hover:bg-primary/10">
                    Resume
                </a>
            </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
