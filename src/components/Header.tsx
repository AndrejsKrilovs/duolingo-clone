import { AnimatePresence, motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from '../routes'

const Header = () => {
	const navigate = useNavigate()
	const location = useLocation()

	const handleNavigation = (
		event: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		event.preventDefault()
		navigate(href)
	}

	return (
		<header className="app-header">
			<h3>🌱 Duolingo Clone</h3>
			<nav className="nav-links">
				{routes.map((route) => {
					const isActive = location.pathname === route.path

					return (
						<div key={route.path} className="nav-item">
							<a
								href={route.path}
								onClick={(e) => handleNavigation(e, route.path)}
								className="nav-link"
							>
								{route.label}
							</a>

							<AnimatePresence>
								{isActive && (
									<motion.div
										className="active-indicator"
										layoutId="activeIndicator"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ type: 'spring', stiffness: 500, damping: 30 }}
									/>
								)}
							</AnimatePresence>
						</div>
					)
				})}
			</nav>
		</header>
	)
}

export default Header
