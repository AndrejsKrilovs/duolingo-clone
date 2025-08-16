import { useNavigate } from 'react-router-dom'
import LessonCard from '../components/LessonCard'
import { lessons as defaultLessons } from '../data/mock-data'
import type { Lesson } from '../entity'
import { useLocalStorage } from '../useLocalStorage'

const LessonsList = () => {
	const navigate = useNavigate()
	const [lessons] = useLocalStorage<Lesson[]>('lessons', defaultLessons)

	const showLesson = (idx: number) => {
		navigate(`/lessons/${idx}`)
	}

	return (
		<main className="app-content">
			<h2>Список уроков</h2>
			<div className="lessons-grid">
				{lessons.map((lesson, idx) => (
					<LessonCard
						key={idx}
						title={lesson.title}
						description={lesson.description}
						icon={lesson.icon}
						progress={lesson.progress}
						onStart={() => showLesson(idx)}
					/>
				))}
			</div>
		</main>
	)
}

export default LessonsList
