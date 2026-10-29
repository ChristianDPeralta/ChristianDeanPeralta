import React, { useState } from 'react'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  Mail,
  Menu,
  MonitorCog,
  MousePointer2,
  Network,
  Sparkles,
  X,
} from 'lucide-react'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const projects = [
  {
    number: '01',
    type: 'NONPROFIT WEBSITE · END-TO-END DEVELOPMENT',
    title: 'I AM Foundation',
    description:
      'Built the website for my grandfather’s nonprofit, writing all of the site code. It shares the foundation’s education, community outreach, and Aeta projects.',
    tags: ['End-to-end coding', 'Nonprofit', 'Education'],
    image: '/images/iam-foundation.png',
    imageAlt: 'Screenshot of the I AM Foundation website homepage',
    url: 'https://iamfoundation.site/',
    linkLabel: 'Visit I AM Foundation',
  },
  {
    number: '02',
    type: 'CAPSTONE PROJECT · FULL-STACK WEB',
    title: 'ResiLinked',
    description:
      'A community jobs platform connecting people without diplomas to local work. Built with ReactJS, HTML, CSS, Tailwind CSS, and MongoDB; deployed on Vercel. I also worked through interaction and responsive-layout issues across devices.',
    tags: ['ReactJS', 'Tailwind CSS', 'MongoDB', 'Vercel'],
    image: '/images/resilinked.png',
    imageAlt: 'Screenshot of the ResiLinked community jobs homepage',
    url: 'https://resilinked.vercel.app/',
    linkLabel: 'Visit ResiLinked',
  },
]

const skillGroups = [
  {
    icon: Code2,
    title: 'Frontend development',
    skills: ['ReactJS', 'JavaScript', 'Vanilla JavaScript', 'Tailwind CSS'],
  },
  {
    icon: MonitorCog,
    title: 'Web foundations',
    skills: ['HTML', 'CSS', 'Clean visual design'],
  },
  {
    icon: Network,
    title: 'IT & additional skills',
    skills: ['PC troubleshooting', 'IT support', 'Python (familiar)'],
  },
  {
    icon: Sparkles,
    title: 'Professional strengths',
    skills: ['Time management', 'Coachable', 'Problem-solving', 'Adaptable'],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Christian Dean M. Peralta, home" onClick={closeMenu}>
          <span className="brand-mark">CP</span>
          <span>Christian Peralta<span className="brand-period">.</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav id="site-navigation" className={`site-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <div className="availability"><span /> WEB DEVELOPER · IT SUPPORT</div>
            <h1>
              Clean websites.<br />
              <span className="headline-accent">Clear solutions.</span>
            </h1>
            <p className="hero-description">
              I&apos;m <strong>Christian Dean M. Peralta</strong>, an IT graduate who enjoys
              building clean, visually polished websites and troubleshooting PCs.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="text-link" href="#contact">Get in touch <ArrowRight size={16} /></a>
            </div>
            <div className="hero-note">
              <MousePointer2 size={15} />
              <span>Thoughtful web design. Hands-on IT support.</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="art-grid" />
            <div className="portrait-photo-card">
              <img
                src="/images/christian-peralta.jpg"
                alt="Christian Dean M. Peralta"
                fetchPriority="high"
              />
              <div className="portrait-photo-caption">
                <strong>Christian Dean M. Peralta</strong>
                <span>Web developer · IT support</span>
              </div>
            </div>
          </div>

          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section id="about" className="about-section section-wrap">
          <div className="section-kicker"><span>01</span> A LITTLE ABOUT ME</div>
          <div className="about-content">
            <h2>IT graduate.<br /><span>Web builder &amp; problem solver.</span></h2>
            <div className="about-copy">
              <p>
                I love creating websites that feel clean and look good. I also enjoy troubleshooting
                PCs and working through technical problems.
              </p>
              <p>
                I work with ReactJS, vanilla JavaScript, HTML, CSS, and Tailwind CSS. I&apos;m also
                familiar with Python from my college studies.
              </p>
              <a className="text-link" href="#skills">A few things I do <ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="about-bottom">
            <div className="about-stat"><strong>01</strong><span>Curious mind</span></div>
            <div className="about-stat"><strong>02</strong><span>People-first approach</span></div>
            <div className="about-stat"><strong>∞</strong><span>Things left to learn</span></div>
            <div className="about-aside">Different challenges.<br />Same thoughtful approach.</div>
          </div>
        </section>

        <section id="work" className="work-section">
          <div className="section-wrap">
            <div className="work-heading">
              <div>
                <div className="section-kicker"><span>02</span> SELECTED WORK</div>
                <h2>Ideas, meet<br /><span>execution.</span></h2>
              </div>
              <p>Real projects built for community impact—from nonprofit outreach to more accessible local work.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-visual">
                    <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
                  </div>
                  <div className="project-meta"><span>{project.type}</span><span>{project.number}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                    {project.linkLabel} <ArrowUpRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section section-wrap">
          <div className="section-kicker"><span>03</span> MY TOOLKIT</div>
          <div className="skills-heading">
            <h2>Different tools.<br /><span>One toolkit.</span></h2>
            <p>My current toolkit for building clean websites, alongside my IT support experience and Python familiarity.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map(({ icon: Icon, title, skills }, index) => (
              <article className="skill-card" key={title}>
                <div className="skill-card-top"><Icon size={22} strokeWidth={1.7} /><span>0{index + 1}</span></div>
                <h3>{title}</h3>
                <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section section-wrap">
          <div className="contact-card">
            <div className="contact-decoration" aria-hidden="true"><div /><div /><div /></div>
            <div className="section-kicker"><span>04</span> YOUR TURN</div>
            <h2>Have a good<br />one in <span>mind?</span></h2>
            <p>I&apos;m always up for a thoughtful conversation, an interesting project, or helping solve a tricky tech problem.</p>
            <a className="button button-light" href="mailto:christianperalta656@gmail.com">
              <Mail size={17} /> Say hello <ArrowUpRight size={16} />
            </a>
            <div className="contact-note"><span /> Open to conversations about web and IT work</div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">CP</span>
          <span>Christian Peralta<span className="brand-period">.</span></span>
        </a>
        <span className="footer-credit">Clean websites. Practical problem-solving.</span>
        <div className="footer-links">
          <a href="https://github.com/ChristianDPeralta" aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={17} /></a>
          <a href="mailto:christianperalta656@gmail.com" aria-label="Email"><Mail size={17} /></a>
        </div>
        <span className="footer-year">© {new Date().getFullYear()}</span>
      </footer>
    </div>
  )
}

export default App
