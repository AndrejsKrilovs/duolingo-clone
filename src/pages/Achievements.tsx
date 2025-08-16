import { achievements as defaultAchievements } from '../data/achievements'
import type { Achievement } from '../entity'
import { useLocalStorage } from '../useLocalStorage'

const Achievements = () => {
	const [achievements] = useLocalStorage<Achievement[]>(
		'achievements',
		defaultAchievements
	)

	return (
		<main className="app-content">
			<h2>Достижения</h2>
			<div className="lessons-grid">
				{achievements.map((achievment, idx) => (
					<div key={idx} className="lesson-card">
						<div className="lesson-icon">{achievment.icon}</div>
						<h3 className="lesson-title">{achievment.title}</h3>
						<p className="lesson-description">{achievment.description}</p>
						<div className="lesson-progress">
							<div
								className="lesson-progress-bar"
								style={{ width: `${achievment.progress}%` }}
							/>
						</div>
					</div>
				))}
			</div>
		</main>
	)
}

export default Achievements
