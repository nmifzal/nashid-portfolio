import { Float, PointMaterial, Points } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as random from 'maath/random/dist/maath-random.esm'
import { useRef, useState } from 'react'

function StarField(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(1500), { radius: 1.5 }))

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#64ffda"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const FloatingShape = ({ position, rotation, scale, geometry: Geometry }) => {
    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
            <mesh position={position} rotation={rotation} scale={scale}>
                <Geometry />
                <meshStandardMaterial 
                    color="#64ffda" 
                    transparent 
                    opacity={0.4} 
                    wireframe={true} 
                />
            </mesh>
        </Float>
    )
}

function Scene() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-80">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <ambientLight intensity={0.5} />
        
        {/* Starfield Background */}
        <StarField />
        
        {/* Floating Low-Opacity Shapes */}
        <FloatingShape 
            position={[1, 0.5, 0]} 
            rotation={[1, 1, 0]} 
            scale={0.5} 
            geometry={() => <icosahedronGeometry args={[1, 0]} />} 
        />
         <FloatingShape 
            position={[-1.2, -0.5, 0]} 
            rotation={[0.5, 2, 0]} 
            scale={0.6} 
            geometry={() => <torusGeometry args={[0.7, 0.2, 16, 100]} />} 
        />
         <FloatingShape 
            position={[0.8, -0.8, 0]} 
            rotation={[0, 0, 1]} 
            scale={0.4} 
            geometry={() => <octahedronGeometry args={[1, 0]} />} 
        />
         <FloatingShape 
            position={[-0.5, 0.8, 0]} 
            rotation={[2, 0.5, 0]} 
            scale={0.3} 
            geometry={() => <dodecahedronGeometry args={[1, 0]} />} 
        />

      </Canvas>
    </div>
  )
}

export default Scene
