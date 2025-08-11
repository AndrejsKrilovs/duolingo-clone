import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { routes } from './routes'

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-container">
				<Header />
				<Routes>
					{routes.map((route) => (
						<Route key={route.path} path={route.path} element={route.element} />
					))}
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
