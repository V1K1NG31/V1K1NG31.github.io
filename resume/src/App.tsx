import { About } from './components/About'
import { Contacts } from './components/Contacts'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { SiteFooter } from './components/SiteFooter'
import { Skills } from './components/Skills'
import { SiteNav } from './components/SiteNav'

import './App.css'

export default function App() {
  return (
    <>
      <Hero />
      <SiteNav />
      <main id="main" className="main" tabIndex={-1}>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contacts />
      </main>
      <SiteFooter />
    </>
  )
}
