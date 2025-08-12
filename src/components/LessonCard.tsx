import { motion } from 'framer-motion'
import type Lesson from '../entity'

const LessonCard = (props: Lesson) => {
	return (
		<motion.div
			className="lesson-card"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			whileHover={{ scale: 1.03 }}
		>
			<div className="lesson-icon">{props.icon}</div>
			<h3 className="lesson-title">{props.title}</h3>
			<p className="lesson-description">{props.description}</p>

			<div className="lesson-progress">
				<div
					className="lesson-progress-bar"
					style={{ width: `${props.progress}%` }}
				/>
			</div>

			<button className="lesson-btn" onClick={props.onStart}>
				Начать
			</button>
		</motion.div>
	)
}

export default LessonCard
