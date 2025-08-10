import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import LessonsList from './pages/LessonsList'

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-container">
				<Header />
				<Routes>
					<Route path="/" element={<Content />} />
					<Route path="/lessons" element={<LessonsList />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
