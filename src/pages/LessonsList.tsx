import { useNavigate } from 'react-router-dom'
import LessonCard from '../components/LessonCard'
import type Lesson from '../entity'

const LessonsList = () => {
	const navigate = useNavigate()
	const showLesson = (idx: number) => {
		navigate(`/lessons/${idx + 1}`)
	}
	const lessons: Lesson[] = [
		{
			title: 'Английский',
			description: 'Международный язык общения и бизнеса 🌍',
			icon: '🇬🇧',
			progress: Math.floor(Math.random() * 101),
		},
		{
			title: 'Испанский',
			description: 'Один из самых мелодичных языков мира 🇪🇸',
			icon: '🇪🇸',
			progress: Math.floor(Math.random() * 101),
		},
		{
			title: 'Французский',
			description: 'Язык любви и искусства 🇫🇷',
			icon: '🇫🇷',
			progress: Math.floor(Math.random() * 101),
		},
		{
			title: 'Немецкий',
			description: 'Язык инженерии и науки 🇩🇪',
			icon: '🇩🇪',
			progress: Math.floor(Math.random() * 101),
		},
		{
			title: 'Итальянский',
			description: 'Язык музыки, искусства и кухни 🇮🇹',
			icon: '🇮🇹',
			progress: Math.floor(Math.random() * 101),
		},
		{
			title: 'Португальский',
			description: 'Официальный язык Бразилии и Португалии 🇵🇹',
			icon: '🇵🇹',
			progress: Math.floor(Math.random() * 101),
		},
		{
			title: 'Русский',
			description: 'Один из крупнейших языков Евразии 🇷🇺',
			icon: '🇷🇺',
			progress: Math.floor(Math.random() * 101),
		},
		{
			title: 'Китайский (мандарин)',
			description: 'Самый распространённый язык по числу носителей 🇨🇳',
			icon: '🇨🇳',
			progress: Math.floor(Math.random() * 101),
		},
		{
			title: 'Японский',
			description: 'Язык технологий и традиций 🇯🇵',
			icon: '🇯🇵',
			progress: Math.floor(Math.random() * 101),
		},
		{
			title: 'Арабский',
			description: 'Официальный язык многих стран Ближнего Востока 🇸🇦',
			icon: '🇸🇦',
			progress: Math.floor(Math.random() * 101),
		},
	]

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
