import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const ConfettiBurst = ({ trigger }: { trigger: boolean }) => {
	const [particles, setParticles] = useState<number[]>([])

	useEffect(() => {
		if (trigger) {
			setParticles([...Array(50)].map((_, i) => i))
			const timer = setTimeout(() => setParticles([]), 2000)
			return () => clearTimeout(timer)
		}
	}, [trigger])

	return (
		<div className="confetti-container">
			{particles.map((id) => {
				const angle = Math.random() * 2 * Math.PI
				const distance = 100 + Math.random() * 100
				const x = Math.cos(angle) * distance
				const y = Math.sin(angle) * distance

				return (
					<motion.div
						key={id}
						className="confetti-particle"
						initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
						animate={{ x, y, opacity: 0, scale: 0 }}
						transition={{ duration: 2, ease: 'easeOut' }}
					>
						🎉
					</motion.div>
				)
			})}
		</div>
	)
}

export default ConfettiBurst
