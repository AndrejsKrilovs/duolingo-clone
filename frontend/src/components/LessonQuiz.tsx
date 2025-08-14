import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { LessonQuestion, LessonQuizProps } from '../entity'
import { lessonQuestions } from '../mock-data'

const LessonQuiz = ({ language }: LessonQuizProps) => {
	const navigate = useNavigate()

	const questions: LessonQuestion[] = useMemo(() => {
		return language ? lessonQuestions[language] ?? [] : []
	}, [language])

	const [current, setCurrent] = useState(0)
	const [score, setScore] = useState(0)
	const [selected, setSelected] = useState<number | null>(null)

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
						}}
					>
						Пройти снова
					</button>
					<button onClick={() => navigate('/lessons')}>К списку уроков</button>
				</div>
			</motion.div>
		)
	}

	const handleAnswer = (optionIndex: number) => {
		setSelected(optionIndex)
		if (optionIndex === questions[current].correctIndex) {
			setScore((prev) => prev + 1)
		}
		setTimeout(() => {
			setSelected(null)
			setCurrent((prev) => prev + 1)
		}, 800)
	}

	if (!language) return renderEmptyState('Урок не найден')
	if (questions.length === 0)
		return renderEmptyState('Для этого урока пока нет вопросов.')
	if (current >= questions.length) return renderResult()

	const currentQuestion = questions[current]

	return (
		<>
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
