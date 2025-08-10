import './App.css'

function Header() {
	const menuItems = [
		{ label: 'Аккаунт', href: '/' },
		{ label: 'Достижения', href: '/' },
		{ label: 'Уроки', href: '/' },
	]

	return (
		<header className="app-header">
			<h3>🌱 Duolingo Clone</h3>
			<nav>
				{menuItems.map((item) => (
					<a key={item.href} href={item.href}>
						{item.label}
					</a>
				))}
			</nav>
		</header>
	)
}

function Content() {
	return (
		<main className="app-content">
			<h2>Добро пожаловать!</h2>
			<p>Начни изучать языки с геймификацией и весёлыми заданиями 🎯</p>
			<button>Начать обучение</button>
		</main>
	)
}

function Footer() {
	return (
		<footer className="app-footer">
			<p>
				© {new Date().getFullYear()} Duolingo Clone. Автор: <b>Андрей Крылов</b>
			</p>
		</footer>
	)
}

export default function App() {
	return (
		<div className="app-container">
			<Header />
			<Content />
			<Footer />
		</div>
	)
}
