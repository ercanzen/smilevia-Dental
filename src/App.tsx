import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './shared/Navbar'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Doctors from './pages/Doctors'
import Services from './pages/Services'
import { I18nProvider } from './shared/i18n'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import ServiceDetail from './pages/ServiceDetail'
import BlogDetail from './pages/BlogDetail'
import { Testimonials } from './shared/Testimonials'
import { SiteMeta } from './shared/SiteMeta'
import { Footer } from './shared/Footer'
import { Imprint, NotFound, Privacy } from './pages/Legal'

export default function App() {
  return (
    <I18nProvider><BrowserRouter>
      <SiteMeta />
      <a href="#main-content" className="skip-link">Zum Inhalt springen</a>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/randevu-al" element={<Booking />} />
        <Route path="/dis-hekimlerimiz" element={<Doctors />} />
        <Route path="/dis-hekimligi" element={<Doctors />} />
        <Route path="/hizmetlerimiz" element={<Services />} />
        <Route path="/hizmetlerimiz/:slug" element={<ServiceDetail />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/blog" element={<><Blog /><Testimonials /></>} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/datenschutz" element={<Privacy />} />
        <Route path="/impressum" element={<Imprint />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter></I18nProvider>
  )
}
