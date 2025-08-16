import { achievements } from './achievements'
import { lessons } from './mock-data'

export const initLocalStorageData = () => {
	if (!localStorage.getItem('lessons')) {
		localStorage.setItem('lessons', JSON.stringify(lessons))
	}
	if (!localStorage.getItem('achievements')) {
		localStorage.setItem('achievements', JSON.stringify(achievements))
	}
}
