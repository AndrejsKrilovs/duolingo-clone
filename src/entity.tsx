export default interface Lesson {
	title: string
	description: string
	icon: string
	progress: number
	onStart?: () => void
}
