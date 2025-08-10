import { useNavigate } from 'react-router-dom'

const Content = () => {
	const navigate = useNavigate()
	const handleStart = () => {
		navigate('/lessons')
	}

	return (
		<main className="app-content">
			<h2>Добро пожаловать!</h2>
			<p>Начни изучать языки с геймификацией и весёлыми заданиями 🎯</p>
			<button onClick={handleStart}>Начать обучение</button>
		</main>
	)
}

export default Content
