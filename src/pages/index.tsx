import { useState } from 'react';
import { Section } from '@/components/Section'
import { Grid } from '@/components/Grid'
import { GridItem } from '@/components/Grid'
import { Modal } from '@/components/Modal';

import { ContentExchange } from '@/pages/content/exchange';
import test from '../../public/test.jpg';

export default function Home() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);

    const openModal = (content: React.ReactNode) => {
        setModalContent(content);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalContent(null);
    };

    return (
        <div>
            <main>
                {/* Intro with Narrative */}
                <Section id="bio">
                    <h1>Hej 👋 I’m Tomasz</h1>
                    <p>
                        A Product Designer who blends design, code, and user insights to craft impactful solutions.
                        Here’s how I solve problems and deliver value.
                    </p>
                </Section>

                {/* Design Systems - Show Systems Thinking */}
                <Section title={'Design Systems'}>
                    <Grid type="two">
                        <GridItem image={test} onClick={() => openModal(<ContentExchange />)}>
                            <h3>Exchanges</h3>
                            <p>Built a multi-brand design system to unify 5+ platforms, improving dev handoff by 30%.</p>
                            <button onClick={() => openModal(<ContentExchange />)}>See Case Study +</button>
                        </GridItem>
                        <GridItem>
                            <h3>NerdCow</h3>
                            <p>Created a scalable design system for my agency, streamlining client projects.</p>
                            <button>See Components +</button>
                        </GridItem>
                    </Grid>
                    <Grid type="two">
                        <GridItem>
                            <h3>Repositive</h3>
                            <p>Built a multi-brand design system to unify 5+ platforms, improving dev handoff by 30%.</p>
                            <button>See Case Study +</button>
                        </GridItem>
                        <GridItem>
                            <h3>Views</h3>
                            <p>Created a scalable design system for my agency, streamlining client projects.</p>
                            <button>See Components +</button>
                        </GridItem>
                    </Grid>
                    <Grid type="two">
                        <GridItem>
                            <h3>Doddle</h3>
                            <p>Built a multi-brand design system to unify 5+ platforms, improving dev handoff by 30%.</p>
                            <button>See Case Study +</button>
                        </GridItem>
                        <GridItem>
                            <h3>Aether</h3>
                            <p>Created a scalable design system for my agency, streamlining client projects.</p>
                            <button>See Components +</button>
                        </GridItem>
                    </Grid>
                </Section>

                {/* Ideation - Highlight Prototyping & Research */}
                <Section title={'Ideation & Prototyping'}>
                    <Grid type="five">
                        <GridItem>
                            <h3>Risk Assurance App</h3>
                            <p>Designed and tested a mobile app for construction risk management in 8 hours.</p>
                            <button>See Prototype +</button>
                        </GridItem>
                        <GridItem>
                            <h3>Carrier Platform</h3>
                            <p>Rapid prototype for an enterprise tool, validated with user interviews.</p>
                            <button>See Process +</button>
                        </GridItem>
                        <GridItem>
                            <h3>Design Sprints</h3>
                            <p>Facilitated workshops to ideate and test solutions in 5 days.</p>
                            <button>See Results +</button>
                        </GridItem>
                        <GridItem>
                            <h3>24-Hour Chat App</h3>
                            <p>Built a minimal chat UI with real-time updates in a weekend.</p>
                            <button>See Prototype +</button>
                        </GridItem>
                        <GridItem>
                            <h3>User Flow Sketch</h3>
                            <p>Mapped a signup journey for a SaaS tool in 2012.</p>
                            <button>See Scan +</button>
                        </GridItem>
                        <GridItem>
                            <h3>Custom Hook</h3>
                            <p>A useForm hook shared on GitHub in 2020.</p>
                            <button>See Repo +</button>
                        </GridItem>
                    </Grid>
                </Section>

                {/* Websites - Focus on User Experience */}
                <Section title={'Web Experiences'}>
                    <Grid type="two">
                        <GridItem>
                            <h3>Real Estate Platform</h3>
                            <p>Designed a visually stunning site with smooth animations to boost property engagement.</p>
                            <button>See Live Site +</button>
                        </GridItem>
                        <GridItem>
                            <h3>Portfolio Site</h3>
                            <p>Crafted a personal site (this one!) to showcase my design and dev skills.</p>
                            <button>See Code +</button>
                        </GridItem>
                    </Grid>
                    <Grid type="two">
                        <GridItem>
                            <h3>Real Estate Platform</h3>
                            <p>Designed a visually stunning site with smooth animations to boost property engagement.</p>
                            <button>See Live Site +</button>
                        </GridItem>
                        <GridItem>
                            <h3>Dashboard Redesign</h3>
                            <p>Revamped a cluttered analytics UI from 2015 for better usability.</p>
                            <button>See Sketch +</button>
                        </GridItem>
                    </Grid>
                    <Grid type="one">
                        <GridItem>
                            <h3>E-commerce Overhaul</h3>
                            <p>Modernized a 2008 checkout flow for better conversions.</p>
                            <button>See Comparison +</button>
                        </GridItem>
                    </Grid>
                </Section>

                {/* Motion - Add Visual Flair */}
                <Section title={'Motion Design'}>
                    <Grid type="two">
                        <GridItem>
                            <h3>Animated Icons</h3>
                            <p>Custom SVG icons with subtle animations for enhanced UX.</p>
                            <button>See Collection +</button>
                        </GridItem>
                        <GridItem>
                            <h3>UI Transitions</h3>
                            <p>Prototyped micro-interactions to elevate product feel.</p>
                            <button>See Demo +</button>
                        </GridItem>
                        <GridItem>
                            <h3>Button States</h3>
                            <p>Crafted 10+ hover effects for a 2019 project.</p>
                            <button>See Demo +</button>
                        </GridItem>
                    </Grid>
                </Section>

                {/* Exploration - Contextualize Misc */}
                <Section title={'Exploration & Tools'}>
                    <Grid type="five">
                        <GridItem>
                            <h3>Site Audit Tool</h3>
                            <p>Built a crawler to score site health, aiding UX improvements.</p>
                        </GridItem>
                        <GridItem>
                            <h3>Pixel Art Tiles</h3>
                            <p>Designed 50+ sprites for a retro game concept.</p>
                            <button>See Gallery +</button>
                        </GridItem>
                        <GridItem>
                            <h3>NFT Generator</h3>
                            <p>Experimented with generative art for fun.</p>
                        </GridItem>
                        <GridItem>
                            <h3>WP Boilerplate</h3>
                            <p>Streamlined WordPress theme dev.</p>
                        </GridItem>
                        <GridItem>
                            <h3>Whitepaper</h3>
                            <p>Designed a sleek editorial PDF.</p>
                        </GridItem>
                    </Grid>
                    <Grid type="one">
                        <GridItem>
                            <h3>Grid Layout Generator</h3>
                            <p>A 2018 tool to visualize CSS Grid layouts dynamically.</p>
                            <button>See Code +</button>
                        </GridItem>
                    </Grid>
                </Section>

                {/* Closing CTA */}
                <Section id="contact">
                    <h2>Let’s Build Something Great</h2>
                    <p>
                        I’m passionate about creating products that users love.
                        Reach out at <a href="mailto:tomasz@yourdomain.com">tomasz@yourdomain.com</a>
                        or <a href="https://linkedin.com/in/tomasz">LinkedIn</a>.
                    </p>
                </Section>
            </main>

            <Modal
                isOpen={modalOpen}
                onClose={closeModal}
                type="full"
                disableScrolling={true}
            >
                {modalContent}
            </Modal>
        </div >
    )
}