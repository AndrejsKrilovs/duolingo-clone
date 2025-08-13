export interface Lesson {
	title: string
	description: string
	icon: string
	progress: number
	onStart?: () => void
}

export interface LessonQuestion {
	question: string
	options: string[]
	correctIndex: number
}

export interface LessonQuizProps {
	language: string
}
