import {useRef, useState} from 'react'
import './App.css'
import Icon from "./components/Icon.tsx";

type Topic = {
    id: string
    name: string
    reference: string
    suggestion: string
    reflection: string
    accent: string
}

const topics: Topic[] = [
    {
        id: 'faith',
        name: 'Faith',
        reference: 'Alma 32:21, 26–28',
        suggestion:
            'Read slowly and notice how Alma compares faith to a seed. Write down one small way you can nourish your faith today.',
        reflection: 'What step can I take before I see the whole path?',
        accent: 'Trust before seeing',
    },
    {
        id: 'peace',
        name: 'Peace',
        reference: 'John 14:26–27',
        suggestion:
            'Read the verses twice. On the second reading, underline the promises Jesus gives and sit quietly with them for a minute.',
        reflection: 'What worry can I place in the Savior’s hands today?',
        accent: 'Peace in Christ',
    },
    {
        id: 'prayer',
        name: 'Prayer',
        reference: 'Enos 1:2–8',
        suggestion:
            'Notice the words that describe Enos’s effort and honesty. Use one of those qualities in your own prayer today.',
        reflection: 'How can I make my prayers more sincere and personal?',
        accent: 'Speak and listen',
    },
    {
        id: 'guidance',
        name: 'Guidance',
        reference: 'Proverbs 3:5–6',
        suggestion:
            'List the decisions currently on your mind. Beside each one, note a way you can acknowledge God as you move forward.',
        reflection: 'Where am I relying only on my own understanding?',
        accent: 'Walk with direction',
    },
    {
        id: 'service',
        name: 'Service',
        reference: 'Mosiah 2:17',
        suggestion:
            'Think of one person who may feel overlooked. Plan a quiet, specific act of service you can complete this week.',
        reflection: 'How does serving someone change the way I see them?',
        accent: 'Love in action',
    },
    {
        id: 'hope',
        name: 'Hope',
        reference: 'Ether 12:4',
        suggestion:
            'Look for words that connect hope with action. Write a one-sentence reminder you can return to during a difficult moment.',
        reflection: 'What helps hope become an anchor in my life?',
        accent: 'An anchor for the soul',
    },
    {
        id: 'forgiveness',
        name: 'Forgiveness',
        reference: 'Doctrine and Covenants 64:9–11',
        suggestion:
            'Read with both self-compassion and honesty. Consider one resentment you are ready to begin releasing through Christ.',
        reflection: 'What would become lighter if I chose to forgive?',
        accent: 'Make room for grace',
    },
    {
        id: 'gratitude',
        name: 'Gratitude',
        reference: '1 Thessalonians 5:16–18',
        suggestion:
            'Write three specific blessings from the last 24 hours. Offer a short prayer focused only on giving thanks.',
        reflection: 'What ordinary blessing have I been too busy to notice?',
        accent: 'Notice the goodness',
    },
]

const checklistItems = [
    'Read the scripture passage',
    'Ponder what it means',
    'Answer the reflection question',
    'Pray and ask for application',
    'Record a key takeaway',
]


function App() {
    const [selectedId, setSelectedId] = useState('')
    const [completed, setCompleted] = useState<number[]>([])
    const [menuOpen, setMenuOpen] = useState(false)
    const topicSelectRef = useRef<HTMLSelectElement>(null)

    const selectedTopic = topics.find((topic) => topic.id === selectedId)
    const progress = Math.round((completed.length / checklistItems.length) * 100)
    const isComplete = completed.length === checklistItems.length

    function chooseTopic(id: string) {
        setSelectedId(id)
        setCompleted([])
    }

    function chooseRandomTopic() {
        const choices = topics.filter((topic) => topic.id !== selectedId)
        const randomTopic = choices[Math.floor(Math.random() * choices.length)]
        chooseTopic(randomTopic.id)
    }

    function toggleChecklistItem(index: number) {
        setCompleted((current) =>
            current.includes(index)
                ? current.filter((item) => item !== index)
                : [...current, index],
        )
    }

    function startPlanning() {
        document.querySelector('#planner')?.scrollIntoView({behavior: 'smooth'})
        window.setTimeout(() => topicSelectRef.current?.focus(), 500)
    }

    function closeMenu() {
        setMenuOpen(false)
    }

    return (
        <div className="app-shell">
            <header className="site-header">
                <a className="brand" href="#top" aria-label="Daily Scripture Study Planner home">
                    <span className="brand-mark"><Icon name="book"/></span>
                    <span className="brand-copy">
            <strong>Daily Scripture</strong>
            <span>Study Planner</span>
          </span>
                </a>

                <button
                    className="menu-button"
                    type="button"
                    aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
                    aria-expanded={menuOpen}
                    aria-controls="site-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <Icon name={menuOpen ? 'close' : 'menu'}/>
                </button>

                <nav id="site-navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'}
                     aria-label="Primary navigation">
                    <a href="#top" onClick={closeMenu}>Home</a>
                    <a href="#planner" onClick={closeMenu}>Study plan</a>
                    <a href="#checklist" onClick={closeMenu}>Progress</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                </nav>
            </header>

            <main id="top">
                <section className="hero-section" aria-labelledby="hero-title">
                    <div className="hero-copy">
                        <p className="eyebrow"><span/> A few meaningful minutes</p>
                        <h1 id="hero-title">Make space for the <em>word.</em></h1>
                        <p className="hero-lead">
                            Choose a focus, open the scriptures, and turn today’s study into a small habit that stays
                            with you.
                        </p>
                        <button className="primary-button" type="button" onClick={startPlanning}>
                            Begin today’s study
                            <span aria-hidden="true">→</span>
                        </button>
                        <div className="hero-note">
                            <Icon name="compass"/>
                            <span><strong>Simple by design</strong>One topic. One passage. One step forward.</span>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <img src="/header1.webp" alt="Scriptures and a study notebook on a sunlit table"/>
                        <div className="hero-image-label">
                            <span>Today’s invitation</span>
                            <strong>Study · Ponder · Apply</strong>
                        </div>
                    </div>
                </section>

                <section className="planner-section" id="planner" aria-labelledby="planner-title">
                    <div className="section-heading">
                        <p className="eyebrow"><span/> Your daily practice</p>
                        <h2 id="planner-title">What does your soul need today?</h2>
                        <p>Select a topic or let a little inspiration choose for you.</p>
                    </div>

                    <div className="planner-grid">
                        <aside className="controls-card">
                            <div className="card-heading-row">
                                <span className="number-badge">01</span>
                                <div>
                                    <p className="card-kicker">Choose your focus</p>
                                    <h3>Study topic</h3>
                                </div>
                            </div>

                            <label htmlFor="topic-select">What would you like to study?</label>
                            <div className="select-wrapper">
                                <select
                                    ref={topicSelectRef}
                                    id="topic-select"
                                    value={selectedId}
                                    onChange={(event) => chooseTopic(event.target.value)}
                                >
                                    <option value="">Select a topic...</option>
                                    {topics.map((topic) => (
                                        <option key={topic.id} value={topic.id}>{topic.name}</option>
                                    ))}
                                </select>
                            </div>

                            <button className="random-button" type="button" onClick={chooseRandomTopic}>
                                <Icon name="sparkles"/>
                                Inspire me with a topic
                            </button>

                            <div className="topic-list" aria-label="Quick topic choices">
                                {topics.map((topic) => (
                                    <button
                                        key={topic.id}
                                        type="button"
                                        className={selectedId === topic.id ? 'topic-chip active' : 'topic-chip'}
                                        onClick={() => chooseTopic(topic.id)}
                                        aria-pressed={selectedId === topic.id}
                                    >
                                        {topic.name}
                                    </button>
                                ))}
                            </div>

                            <div className="gentle-note">
                                <span>✦</span>
                                <p><strong>Come as you are.</strong> You don’t need perfect focus—just a willing heart.
                                </p>
                            </div>
                        </aside>

                        <article className={selectedTopic ? 'study-card has-topic' : 'study-card'} aria-live="polite">
                            <div className="card-heading-row study-heading">
                                <span className="number-badge">02</span>
                                <div>
                                    <p className="card-kicker">Today’s guide</p>
                                    <h3>{selectedTopic ? selectedTopic.accent : 'Your study plan'}</h3>
                                </div>
                                {selectedTopic && <span className="selected-label">{selectedTopic.name}</span>}
                            </div>

                            {selectedTopic ? (
                                <div className="study-content">
                                    <div className="study-item scripture-item">
                                        <span className="study-icon"><Icon name="book"/></span>
                                        <div>
                                            <p className="item-label">Scripture passage</p>
                                            <h4>{selectedTopic.reference}</h4>
                                        </div>
                                    </div>
                                    <div className="study-item">
                                        <span className="study-icon"><Icon name="pencil"/></span>
                                        <div>
                                            <p className="item-label">Study suggestion</p>
                                            <p>{selectedTopic.suggestion}</p>
                                        </div>
                                    </div>
                                    <div className="study-item reflection-item">
                                        <span className="study-icon"><Icon name="question"/></span>
                                        <div>
                                            <p className="item-label">Reflection question</p>
                                            <blockquote>“{selectedTopic.reflection}”</blockquote>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="empty-state">
                                    <span className="empty-icon"><Icon name="book"/></span>
                                    <h4>Your quiet moment starts here.</h4>
                                    <p>Choose a topic to receive a scripture, a guided study idea, and a question for
                                        reflection.</p>
                                    <span className="empty-flourish" aria-hidden="true">✦</span>
                                </div>
                            )}
                        </article>
                    </div>
                </section>

                <section className="checklist-section" id="checklist" aria-labelledby="checklist-title">
                    <div className="checklist-copy">
                        <p className="eyebrow light"><span/> Finish with intention</p>
                        <h2 id="checklist-title">Your study checklist</h2>
                        <p>Small steps make a meaningful rhythm. Mark each one as you go.</p>
                    </div>

                    <div className="checklist-panel">
                        <div className="checklist-items">
                            {checklistItems.map((item, index) => {
                                const isChecked = completed.includes(index)
                                return (
                                    <label className={isChecked ? 'check-row checked' : 'check-row'} key={item}>
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            disabled={!selectedTopic}
                                            onChange={() => toggleChecklistItem(index)}
                                        />
                                        <span className="custom-check"><Icon name="check"/></span>
                                        <span>{item}</span>
                                    </label>
                                )
                            })}
                        </div>

                        <div className="progress-card" aria-live="polite">
                            <div className="progress-topline">
                                <span>Today’s progress</span>
                                <strong>{completed.length}/{checklistItems.length}</strong>
                            </div>
                            <div
                                className="progress-track"
                                role="progressbar"
                                aria-label="Study checklist progress"
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-valuenow={progress}
                            >
                                <span style={{width: `${progress}%`}}/>
                            </div>
                            <div className={isComplete ? 'progress-message complete' : 'progress-message'}>
                                <span>{isComplete ? '✓' : '✦'}</span>
                                <div>
                                    <h3>{isComplete ? 'Study complete!' : selectedTopic ? 'Keep going.' : 'Choose a topic to begin.'}</h3>
                                    <p>
                                        {isComplete
                                            ? 'Carry one truth from today’s study into the rest of your day.'
                                            : selectedTopic
                                                ? 'Consistency grows quietly, one thoughtful step at a time.'
                                                : 'Your checklist will be ready when your study plan appears.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="site-footer" id="about">
                <div className="footer-brand">
                    <span className="brand-mark small"><Icon name="book"/></span>
                    <div><strong>Daily Scripture</strong><span>Study Planner</span></div>
                </div>
                <p className="footer-verse">“Thy word is a lamp unto my feet, and a light unto my path.” <span>Psalm 119:105</span>
                </p>
                <div className="footer-meta">
                    <span>Made for meaningful daily study.</span>
                    <span>© {new Date().getFullYear()}</span>
                </div>
            </footer>
        </div>
    )
}

export default App
