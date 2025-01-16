import './App.css'
import Form from './components/form'
import Header from './components/Header'
import { MainPage } from './components/mainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ServicePage from './components/ServicePage'
import { servicesData } from './data/servicesData'
import ScrollToTop from './components/scrollToTop'

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/form' element={<Form />} />
        <Route path='/services/maintenance' element={<ServicePage {...servicesData.maintenance} />} />
        <Route path='/services/blogging' element={<ServicePage {...servicesData.contentCreation} />} />
        <Route path='/services/seo' element={<ServicePage {...servicesData.seoOptimization} />} />
      </Routes>
    </ BrowserRouter>
  )
}

export default App
