import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import './Cursor.css'

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [cursorVariant, setCursorVariant] = useState("default")

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true)
                setCursorVariant("hover")
            } else {
                setIsHovering(false)
                setCursorVariant("default")
            }
        }

        window.addEventListener("mousemove", mouseMove)
        window.addEventListener("mouseover", handleMouseOver)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
            window.removeEventListener("mouseover", handleMouseOver)
        }
    }, [])

    const variants = {
        default: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            opacity: 1,
            height: 20,
            width: 20,
            backgroundColor: "rgba(100, 255, 218, 0.3)",
            borderColor: "#64ffda",
        },
        hover: {
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            height: 40,
            width: 40,
            backgroundColor: "rgba(100, 255, 218, 0.1)",
            borderColor: "#64ffda",
            mixBlendMode: "difference"
        }
    }

    const textVariants = {
        default: {
            x: mousePosition.x + 15,
            y: mousePosition.y + 15,
            opacity: 0
        },
        hover: {
            x: mousePosition.x + 25,
            y: mousePosition.y - 25,
            opacity: 1
        }
    }

    return (
        <>
            <motion.div 
                className="fixed top-0 left-0 border-2 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
                variants={variants}
                animate={cursorVariant}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            >
                <div className="w-1 h-1 bg-primary rounded-full"></div>
            </motion.div>
            
            <motion.div 
                className="fixed top-0 left-0 pointer-events-none z-[9999] text-primary font-mono text-xs font-bold bg-secondary/80 px-2 py-1 rounded border border-primary/30 backdrop-blur-sm"
                variants={textVariants}
                animate={cursorVariant}
            >
                &lt;Click /&gt;
            </motion.div>
        </>
    )
}

export default Cursor
