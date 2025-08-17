import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { achievements as defaultAchievements } from '../data/achievements'
import { lessons as defaultLessons, lessonQuestions } from '../data/mock-data'
import type {
	Achievement,
	Lesson,
	LessonQuestion,
	LessonQuizProps,
} from '../entity'
import { useLocalStorage } from '../useLocalStorage'
import ConfettiBurst from './ConfettiBurst'

const LessonQuiz = ({ language }: LessonQuizProps) => {
	const navigate = useNavigate()

	const [score, setScore] = useState(0)
	const [current, setCurrent] = useState(0)
	const [finished, setFinished] = useState(false)
	const [showConfetti, setShowConfetti] = useState(false)
	const [selected, setSelected] = useState<number | null>(null)
	const [, setLessons] = useLocalStorage<Lesson[]>('lessons', defaultLessons)
	const [, setAchievements] = useLocalStorage<Achievement[]>(
		'achievements',
		defaultAchievements
	)

	const questions: LessonQuestion[] = useMemo(() => {
		return language ? lessonQuestions[language] ?? [] : []
	}, [language])

	const applyAchievementUpdates = (
		prev: Achievement[],
		options: {
			firstWord?: boolean
			finished?: boolean
			score?: number
			total?: number
		}
	): Achievement[] => {
		return prev.map((achieve) => {
			if (
				options.firstWord &&
				achieve.title === 'Первое слово' &&
				achieve.progress < 100
			) {
				return { ...achieve, progress: 100 }
			}
			if (
				options.finished &&
				achieve.title === 'Первый урок' &&
				achieve.progress < 100
			) {
				return { ...achieve, progress: 100 }
			}
			if (
				options.finished &&
				achieve.title === 'Идеальный результат' &&
				options.score === options.total &&
				achieve.progress < 100
			) {
				return { ...achieve, progress: 100 }
			}
			return achieve
		})
	}

	useEffect(() => {
		if (finished && language) {
			const percent = Math.round((score / questions.length) * 100)

			setLessons((prevLessons) =>
				prevLessons.map((lesson) =>
					lesson.icon === language ? { ...lesson, progress: percent } : lesson
				)
			)
		}
	}, [finished, language, score, questions.length, setLessons])

	useEffect(() => {
		if (finished) {
			setAchievements((prev) =>
				applyAchievementUpdates(prev, {
					finished: true,
					score,
					total: questions.length,
				})
			)
		}
	}, [finished, score, questions.length, setAchievements])

	const handleAnswer = (optionIndex: number) => {
		setSelected(optionIndex)
		if (optionIndex === questions[current].correctIndex) {
			setScore((prev) => prev + 1)

			setAchievements((prev) =>
				applyAchievementUpdates(prev, { firstWord: true })
			)

			setShowConfetti(true)
			setTimeout(() => setShowConfetti(false), 2000)
		}

		setTimeout(() => {
			setSelected(null)
			setCurrent((prev) => {
				if (prev + 1 >= questions.length) {
					setFinished(true)
				}
				return prev + 1
			})
		}, 800)
	}

	const renderEmptyState = (message: string) => (
		<>
			<p>{message}</p>
			<button onClick={() => navigate('/lessons')}>К списку уроков</button>
		</>
	)

	const renderResult = () => {
		const percent = Math.round((score / questions.length) * 100)
		return (
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ type: 'spring', stiffness: 120 }}
				className="result-card"
			>
				<h2>Результаты</h2>
				<p>
					Вы ответили правильно на {score} из {questions.length} вопросов (
					{percent}%)
				</p>
				<div className="result-actions">
					<button
						onClick={() => {
							setCurrent(0)
							setScore(0)
							setFinished(false) // сбросить флаг
						}}
					>
						Пройти снова
					</button>
					<button onClick={() => navigate('/lessons')}>К списку уроков</button>
				</div>
			</motion.div>
		)
	}

	if (!language) return renderEmptyState('Урок не найден')
	if (questions.length === 0)
		return renderEmptyState('Для этого урока пока нет вопросов.')
	if (finished) return renderResult()

	const currentQuestion = questions[current]
	return (
		<>
			{showConfetti && <ConfettiBurst trigger={showConfetti} />}
			<p>{currentQuestion.question}</p>
			<div className="quiz-options">
				{currentQuestion.options.map((option, idx) => (
					<button
						key={idx}
						className={
							selected === idx
								? idx === currentQuestion.correctIndex
									? 'correct'
									: 'wrong'
								: ''
						}
						onClick={() => handleAnswer(idx)}
						disabled={selected !== null}
					>
						{option}
					</button>
				))}
			</div>
		</>
	)
}

export default LessonQuiz
