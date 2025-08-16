import type { Achievement } from '../entity'

export const achievements: Achievement[] = [
	{
		title: 'Первое слово',
		description: 'Выучите своё первое слово',
		icon: '🆕',
		progress: 0,
	},
	{
		title: 'Первый урок',
		description: 'Завершите первый урок',
		icon: '📘',
		progress: 0,
	},
	{
		title: 'Серия дня',
		description: 'Учитесь 3 дня подряд',
		icon: '🔥',
		progress: 0,
	},
	{
		title: 'Идеальный результат',
		description: 'Завершите урок без ошибок',
		icon: '🎯',
		progress: 0,
	},
	{
		title: 'Марафон',
		description: 'Пройдите 5 уроков подряд без ошибок',
		icon: '🏃‍♂️',
		progress: 0,
	},
]
