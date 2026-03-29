import Header from './components/Header'
import Hero from './components/Hero'
import CourseInfo from './components/CourseInfo'
import TargetAudience from './components/TargetAudience'
import Instructor from './components/Instructor'
import RegistrationForm from './components/RegistrationForm'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CourseInfo />
      <TargetAudience />
      <Instructor />
      <RegistrationForm />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
