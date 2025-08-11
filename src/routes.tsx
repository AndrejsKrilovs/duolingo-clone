import type { JSX } from 'react'
import Content from './components/Content'
import Achievements from './pages/Achievements'
import LessonsList from './pages/LessonsList'

export interface AppRoute {
	path: string
	label: string
	element: JSX.Element
}

export const routes: AppRoute[] = [
	{ path: '/', label: 'Аккаунт', element: <Content /> },
	{ path: '/lessons', label: 'Уроки', element: <LessonsList /> },
	{ path: '/achievements', label: 'Достижения', element: <Achievements /> },
]
