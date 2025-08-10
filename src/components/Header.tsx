import { useNavigate } from 'react-router-dom'

const Header = () => {
	const menuItems = [
		{ label: 'Аккаунт', href: '/' },
		{ label: 'Достижения', href: '/' },
		{ label: 'Уроки', href: '/lessons' },
	]

	const navigate = useNavigate()
	const handleStart = (
		event: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		event.preventDefault()

		if (href === '/lessons') {
			navigate('/lessons')
		} else {
			navigate('/')
			alert('В данный момент функционал в разработке')
		}
	}

	return (
		<header className="app-header">
			<h3>🌱 Duolingo Clone</h3>
			<nav>
				{menuItems.map((item, id) => (
					<a
						key={item.href + id}
						href={item.href}
						onClick={(e) => handleStart(e, item.href)}
					>
						{item.label}
					</a>
				))}
			</nav>
		</header>
	)
}

export default Header
