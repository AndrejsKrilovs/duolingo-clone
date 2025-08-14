import { useParams } from 'react-router-dom'
import LessonQuiz from '../components/LessonQuiz'
import { lessons } from '../mock-data'

const LessonDetail = () => {
	const { id } = useParams<{ id: string }>()
	const lessonIndex = id ? parseInt(id, 10) : 0
	const lesson = lessons[lessonIndex]

	return (
		<main className="app-content">
			<h2>{lesson.title}</h2>
			<LessonQuiz key={lesson.icon} language={lesson.icon} />
		</main>
	)
}

export default LessonDetail
