import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Clock3,
  Compass,
  Database,
  FileText,
  GraduationCap,
  Headphones,
  HeartHandshake,
  Languages,
  Laptop,
  Layers3,
  Lightbulb,
  MapPin,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  PenLine,
  Phone,
  RefreshCw,
  ScanSearch,
  Search,
  Settings2,
  Sparkles,
  UsersRound,
  Workflow,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: PortfolioPage,
})

const navigation = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Career Interests', href: '#interests', id: 'interests' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Strengths', href: '#strengths', id: 'strengths' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const contributionCards = [
  {
    title: 'Willingness to Learn',
    description:
      'Open to learning new systems, tools, responsibilities, and workplace processes.',
    icon: BookOpen,
  },
  {
    title: 'Adaptability',
    description:
      'Able to adjust to new environments, tasks, instructions, and challenges.',
    icon: RefreshCw,
  },
  {
    title: 'Communication',
    description:
      'Able to communicate clearly, respectfully, and professionally in English and Filipino.',
    icon: MessageCircle,
  },
  {
    title: 'Responsibility',
    description:
      'Approaches tasks with attention to detail, organization, patience, and a willingness to improve.',
    icon: CheckCircle2,
  },
]

const coreSkills = [
  {
    title: 'Web Design',
    description:
      'Able to create modern, visually appealing website layouts with attention to presentation, organization, usability, and user experience.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Digital Skills',
    description:
      'Comfortable working with digital tools and learning new software, platforms, and technologies.',
    icon: Laptop,
  },
  {
    title: 'Customer Support',
    description:
      'Interested in helping customers, understanding their concerns, and providing clear and respectful assistance.',
    icon: Headphones,
  },
  {
    title: 'Written Communication',
    description:
      'Able to communicate information clearly, professionally, and in an organized manner.',
    icon: PenLine,
  },
  {
    title: 'Problem-Solving',
    description:
      'Able to understand situations, organize information, and identify practical next steps.',
    icon: Lightbulb,
  },
  {
    title: 'Critical Thinking',
    description:
      'Able to carefully consider information and situations before making decisions.',
    icon: Brain,
  },
  {
    title: 'Attention to Detail',
    description:
      'Careful with information, formatting, organization, and assigned tasks.',
    icon: ScanSearch,
  },
  {
    title: 'Data Entry & Record Keeping',
    description: 'Able to organize and manage information accurately.',
    icon: Database,
  },
  {
    title: 'Time Management',
    description: 'Able to organize tasks and work toward deadlines.',
    icon: Clock3,
  },
  {
    title: 'Multitasking',
    description: 'Comfortable managing different tasks and priorities.',
    icon: Layers3,
  },
  {
    title: 'Team Collaboration',
    description: 'Willing to communicate, cooperate, and learn from others.',
    icon: UsersRound,
  },
  {
    title: 'Fast Learner & Adaptable',
    description:
      'Open to learning new systems, tools, responsibilities, and processes.',
    icon: Zap,
  },
]

const creativeSkills = [
  {
    title: 'Web Design',
    description:
      'Able to create website layouts with attention to visual presentation, organization, usability, and user experience.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Creative Thinking',
    description:
      'Enjoys developing visual ideas and finding creative ways to present information.',
    icon: Palette,
  },
  {
    title: 'Technology Adaptability',
    description:
      'Willing to explore new digital tools, platforms, and technologies and learn through practice.',
    icon: Settings2,
  },
]

const careerInterests = [
  {
    title: 'Customer Support',
    description:
      'Helping customers, communicating clearly, and understanding and addressing concerns.',
    icon: Headphones,
  },
  {
    title: 'Administrative Support',
    description:
      'Organization, data entry, documentation, and assisting with daily office tasks.',
    icon: FileText,
  },
  {
    title: 'Operations Support',
    description:
      'Learning processes, coordinating tasks, organizing information, and supporting team workflows.',
    icon: Workflow,
  },
  {
    title: 'Digital & Creative Roles',
    description:
      'Using technology, creating digital content, designing websites, and learning new digital tools.',
    icon: Palette,
  },
  {
    title: 'Web Design',
    description:
      'Creating visually appealing and user-friendly website layouts and continuing to develop digital design skills.',
    icon: MonitorSmartphone,
  },
]

const strengths = [
  {
    title: 'Customer-First Mindset',
    description:
      'Communicates respectfully and patiently while working toward practical solutions.',
    icon: HeartHandshake,
  },
  {
    title: 'Written Communication',
    description:
      'Able to provide clear, organized, and professional responses in English.',
    icon: PenLine,
  },
  {
    title: 'Technology Adaptability',
    description:
      'Willing to learn new software, digital platforms, systems, and workplace tools.',
    icon: Settings2,
  },
  {
    title: 'Problem-Solving',
    description:
      'Able to understand concerns, organize information, think through situations, and identify appropriate next steps.',
    icon: Search,
  },
]

function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-20% 0px -62% 0px', threshold: [0.01, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeMenu)
    return () => window.removeEventListener('keydown', closeMenu)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="nav-shell">
          <a className="wordmark" href="#home" onClick={closeMenu}>
            <span>NADINE PACO</span>
            <small>Portfolio</small>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={activeSection === item.id ? 'active' : undefined}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="menu-button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <nav
          id="mobile-navigation"
          className={`mobile-nav ${menuOpen ? 'open' : ''}`}
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className={activeSection === item.id ? 'active' : undefined}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main-content">
        <section id="home" className="hero-section" aria-labelledby="hero-title">
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="page-shell hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span /> Open to entry-level opportunities
              </div>
              <h1 id="hero-title">NADINE N. PACO</h1>
              <p className="hero-headline">
                College Student <i>•</i> Aspiring Professional <i>•</i> Ready to Learn & Grow
              </p>
              <p className="hero-intro">
                Motivated and adaptable college student seeking an opportunity to gain professional experience, develop new skills, and contribute to a supportive and growth-oriented workplace. A fast learner with strong communication, problem-solving, organizational, and digital skills, with a genuine willingness to learn and take on new challenges.
              </p>
              <div className="hero-contact" aria-label="Location and phone number">
                <span><MapPin aria-hidden="true" /> Manila City, Philippines</span>
                <a href="tel:09670827220"><Phone aria-hidden="true" /> 0967 082 7220</a>
              </div>
              <div className="hero-actions">
                <a className="button button-primary" href="#skills">
                  Explore My Skills <ArrowRight aria-hidden="true" />
                </a>
                <a className="button button-secondary" href="#contact">
                  Contact Me
                </a>
              </div>
            </div>

            <div className="portrait-column">
              <div className="portrait-accent portrait-accent-top" aria-hidden="true" />
              <div className="portrait-frame">
                <img
                  src="/assets/nadine-paco-portrait.webp"
                  alt="Nadine Paco professional portrait"
                  width="1100"
                  height="1100"
                  fetchPriority="high"
                />
              </div>
              <div className="portrait-note">
                <Sparkles aria-hidden="true" />
                <span><strong>Ready to begin</strong> a meaningful professional journey.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-block" aria-labelledby="summary-title">
          <div className="page-shell">
            <SectionHeading
              eyebrow="About Me"
              title="Professional Summary"
              description="A motivated student bringing curiosity, care, and a growth mindset to her first professional role."
              id="summary-title"
            />
            <article className="summary-card reveal-card">
              <div className="summary-mark" aria-hidden="true">NP</div>
              <p>
                Motivated and adaptable college student seeking an entry-level opportunity where I can gain professional experience, learn new skills, and contribute positively to a team. Strong communication and problem-solving abilities, with an interest in customer service, administrative work, operations, digital tasks, web design, and other roles that provide opportunities for growth. Able to communicate clearly in English, learn new systems quickly, and approach responsibilities with patience, attention to detail, and a willingness to improve.
              </p>
            </article>

            <div className="subsection-heading">
              <p className="eyebrow"><span /> My approach</p>
              <h3>What I Can Bring</h3>
            </div>
            <div className="contribution-grid">
              {contributionCards.map((item, index) => (
                <InfoCard key={item.title} {...item} number={`0${index + 1}`} />
              ))}
            </div>

            <div className="journey-panel">
              <div className="journey-title">
                <Compass aria-hidden="true" />
                <div>
                  <p className="eyebrow light"><span /> Looking ahead</p>
                  <h3>Starting My Professional Journey</h3>
                </div>
              </div>
              <p>
                As a college student preparing to enter the professional world, I am looking forward to gaining my first work experience. I am eager to learn from experienced professionals, understand workplace expectations, develop practical skills, and contribute wherever I can. I see my first opportunity as a chance to grow, learn, and build a strong foundation for my future career.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section-block skills-section" aria-labelledby="skills-title">
          <div className="page-shell">
            <SectionHeading
              eyebrow="Capabilities"
              title="Core Skills"
              description="Practical strengths I continue to develop through study, curiosity, and hands-on learning."
              id="skills-title"
            />
            <div className="skills-grid">
              {coreSkills.map((skill) => (
                <SkillCard key={skill.title} {...skill} />
              ))}
            </div>

            <div className="creative-panel">
              <div className="creative-intro">
                <p className="eyebrow"><span /> Digital mindset</p>
                <h3>Digital & Creative Skills</h3>
                <p>
                  I enjoy combining clear organization with thoughtful visual presentation, especially when building accessible and user-friendly digital experiences.
                </p>
              </div>
              <div className="creative-cards">
                {creativeSkills.map((skill) => (
                  <article className="creative-card" key={skill.title}>
                    <skill.icon aria-hidden="true" />
                    <div>
                      <h4>{skill.title}</h4>
                      <p>{skill.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="interests" className="section-block" aria-labelledby="interests-title">
          <div className="page-shell">
            <SectionHeading
              eyebrow="Open to possibilities"
              title="Career Interests"
              description="I am open to different entry-level opportunities where I can learn, support a team, and grow through real responsibilities."
              id="interests-title"
            />
            <div className="interest-grid">
              {careerInterests.map((interest, index) => (
                <article className="interest-card" key={interest.title}>
                  <div className="interest-topline">
                    <span>0{index + 1}</span>
                    <interest.icon aria-hidden="true" />
                  </div>
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                </article>
              ))}
            </div>
            <p className="open-note">
              <Sparkles aria-hidden="true" />
              I am open to exploring other entry-level opportunities that match my skills and provide opportunities for professional growth.
            </p>
          </div>
        </section>

        <section id="education" className="section-block education-section" aria-labelledby="education-title">
          <div className="page-shell">
            <SectionHeading
              eyebrow="Learning foundation"
              title="Education"
              description="Building academic, technical, and interpersonal skills while preparing for a long-term professional career."
              id="education-title"
            />
            <div className="education-grid">
              <article className="education-card current">
                <div className="education-icon"><GraduationCap aria-hidden="true" /></div>
                <div className="education-content">
                  <div className="education-meta">
                    <span className="status-pill">Current</span>
                    <time>2025 – Present</time>
                  </div>
                  <h3>FEU Institute of Technology <span>(FEU Tech)</span></h3>
                  <p className="education-level">College — Incoming 2nd Year</p>
                  <p className="education-location"><MapPin aria-hidden="true" /> Manila, Philippines</p>
                  <p>
                    Currently pursuing a college degree and developing academic, technical, communication, digital, and problem-solving skills while preparing for a professional career.
                  </p>
                </div>
              </article>

              <article className="education-card">
                <div className="education-icon"><BookOpen aria-hidden="true" /></div>
                <div className="education-content">
                  <div className="education-meta">
                    <span className="status-pill muted">Completed</span>
                    <time>2023 – 2025</time>
                  </div>
                  <h3>STI College Sta. Mesa</h3>
                  <p className="education-level">Senior High School Graduate</p>
                  <p className="education-location"><MapPin aria-hidden="true" /> Manila, Philippines</p>
                  <p>
                    Completed Senior High School education and developed foundational academic, communication, technology, teamwork, and time-management skills.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="strengths" className="section-block" aria-labelledby="strengths-title">
          <div className="page-shell">
            <SectionHeading
              eyebrow="How I work"
              title="Relevant Strengths"
              description="People-focused, thoughtful qualities that support clear communication and dependable teamwork."
              id="strengths-title"
            />
            <div className="strength-grid">
              {strengths.map((strength) => (
                <InfoCard key={strength.title} {...strength} headingLevel={3} />
              ))}
            </div>

            <div className="languages-panel">
              <div className="languages-heading">
                <Languages aria-hidden="true" />
                <div>
                  <p className="eyebrow"><span /> Communication</p>
                  <h3>Languages</h3>
                </div>
              </div>
              <div className="language-list">
                <div><strong>Filipino</strong><span>Native</span></div>
                <div><strong>English</strong><span>Good written and verbal communication</span></div>
                <div><strong>Additional Languages</strong><span>Willing to learn other languages</span></div>
              </div>
            </div>

            <article className="objective-panel">
              <div className="objective-label">Career Objective</div>
              <blockquote>
                “To begin my professional journey in an environment where I can learn, develop new skills, gain meaningful experience, and contribute to a team. I am open to different entry-level opportunities and eager to take on responsibilities that will help me grow professionally while providing value to the organization.”
              </blockquote>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="page-shell contact-grid">
            <div className="contact-copy">
              <p className="eyebrow light"><span /> A conversation starts here</p>
              <h2 id="contact-title">Let&apos;s Connect</h2>
              <p>
                I&apos;m open to entry-level opportunities where I can learn, contribute, and grow.
              </p>
              <a className="button button-khaki" href="tel:09670827220">
                Get In Touch <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <address className="contact-card">
              <div className="contact-monogram" aria-hidden="true">NP</div>
              <div>
                <span>Name</span>
                <strong>Nadine N. Paco</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>Manila City, Philippines</strong>
              </div>
              <div>
                <span>Phone</span>
                <a href="tel:09670827220">0967 082 7220</a>
              </div>
            </address>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <div>
            <strong>Nadine Paco&apos;s Portfolio</strong>
            <p>© 2026 Nadine Paco. All rights reserved.</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    </>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string
  title: string
  description: string
  id?: string
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span /> {eyebrow}</p>
      <div className="section-title-row">
        <h2 id={id}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

function InfoCard({
  title,
  description,
  icon: Icon,
  number,
  headingLevel = 4,
}: {
  title: string
  description: string
  icon: LucideIcon
  number?: string
  headingLevel?: 3 | 4
}) {
  const Heading = headingLevel === 3 ? 'h3' : 'h4'

  return (
    <article className="info-card">
      <div className="info-card-top">
        <span className="icon-box"><Icon aria-hidden="true" /></span>
        {number && <span className="card-number">{number}</span>}
      </div>
      <Heading>{title}</Heading>
      <p>{description}</p>
    </article>
  )
}

function SkillCard({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: LucideIcon
}) {
  return (
    <article className="skill-card">
      <Icon aria-hidden="true" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}
