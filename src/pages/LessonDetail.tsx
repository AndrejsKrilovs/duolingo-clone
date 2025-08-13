import { useParams } from 'react-router-dom'
import { lessons } from '../mock-data'

const LessonDetail = () => {
	const { id } = useParams<{ id: string }>()
	const lessonIndex = id ? parseInt(id, 10) : 0
	const lesson = lessons[lessonIndex]

	return (
		<main className="app-content">
			<div>
				<h2>{lesson.title}</h2>
				<p>{lesson.description}</p>
			</div>
		</main>
	)
}

export default LessonDetail
