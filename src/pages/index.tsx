import { useState } from 'react';
import { Section } from '@/components/Section'
import { Grid } from '@/components/Grid'
import { GridItem } from '@/components/Grid'
import { Modal } from '@/components/Modal';
import { Button } from '@/components/Button';

import { ContentExchange } from '@/pages/content/exchange';

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
                <Section id="bio">
                    <h1>Hej 👋 I’m Tomasz!<br/>I design, code, and build for the Web.</h1>
                </Section>

                <Section title={'Design Systems'}>
                    <Grid type="two">
                        <GridItem onClick={() => openModal(<ContentExchange />)}>
                            <h3>Exchanges</h3>
                            <p>Two brands. One system.</p>
                            <Button onClick={() => openModal(<ContentExchange />)}>Explore</Button>
                        </GridItem>
                        <GridItem>
                            <h3>NerdCow</h3>
                            <p>Visual language for my company.</p>
                            <Button onClick={() => openModal(<ContentExchange />)}>Explore</Button>
                        </GridItem>
                    </Grid>
                    <Grid type="two">
                        <GridItem>
                            <h3>Repositive</h3>
                            <p>Design backbone for a tech startup.</p>
                            <Button onClick={() => openModal(<ContentExchange />)}>Explore</Button>
                        </GridItem>
                        <GridItem>
                            <h3>Views</h3>
                            <p>Smart design to build trust.</p>
                            <Button onClick={() => openModal(<ContentExchange />)}>Explore</Button>
                        </GridItem>
                    </Grid>
                    <Grid type="two">
                        <GridItem>
                            <h3>Doddle</h3>
                            <p>Simple system for a complex brand.</p>
                            <Button onClick={() => openModal(<ContentExchange />)}>Explore</Button>
                        </GridItem>
                        <GridItem>
                            <h3>Aether</h3>
                            <p>Foundations for a Rolls Royce&apos;s company.</p>
                            <Button onClick={() => openModal(<ContentExchange />)}>Explore</Button>
                        </GridItem>
                    </Grid>
                </Section>

                <Section title={'Ideation'}>
                    <Grid type="one">
                        <GridItem>
                            <h3>Design sprints</h3>
                            <p>Facilitated 20+ design sprints to ideate and test solutions in 5 days.</p>
                            <button>See Results +</button>
                        </GridItem>
                    </Grid>
                    <Grid type="three">
                        <GridItem>
                            <h3>Example prototypes</h3>
                            <p>Challenged myself to design each website prototype in under 8 hours.</p>
                            <button>See Prototype +</button>
                        </GridItem>
                        <GridItem>
                            <h3>User tests</h3>
                            <p>Recruited participants and moderated user tests to ask for feedback.</p>
                            <button>See Prototype +</button>
                        </GridItem>
                        <GridItem>
                            <h3>Solution sketches</h3>
                            <p>Sketched solutions to solve website challenges. Pen and paper, baby!</p>
                            <button>See Scan +</button>
                        </GridItem>
                    </Grid>
                </Section>

                <Section title={'Web Experiences'}>
                    <Grid type="two">
                        <GridItem>
                            <h3>Real Estate Property Map</h3>
                            <p>So much fun doing this one. Plenty of motion design done around the site!</p>
                            <button>See Live Site +</button>
                        </GridItem>
                        <GridItem>
                            <h3>World With Web</h3>
                            <p>Started the only website certificate that isn&apos;t popularity contest.</p>
                            <button>See Code +</button>
                        </GridItem>
                    </Grid>
                    <Grid type="two">
                        <GridItem>
                            <h3>Web Design Agency Site</h3>
                            <p>Big part of my life for 10 years. Proud to share this. Psst... Hidden gem inside.</p>
                            <button>See Live Site +</button>
                        </GridItem>
                        <GridItem>
                            <h3>Brochure Landing Page</h3>
                            <p>Simple landing page for an asset management company.</p>
                            <button>See Code +</button>
                        </GridItem>
                    </Grid>
                </Section>

                <Section title={'Exploration'}>
                    <Grid type="five">
                        <GridItem>
                            <h3>Site audit tool</h3>
                            <p>Attempted to build a crawler to score site&apos;s health, aiding UX improvements.</p>
                        </GridItem>
                        <GridItem>
                            <h3>Pixel art</h3>
                            <p>Newly-found passion. Big message in small squares.</p>
                            <button>See Gallery +</button>
                        </GridItem>
                        <GridItem>
                            <h3>NFT Generator</h3>
                            <p>Flashback to 2021. I built script to generate 1000 NFTs.</p>
                        </GridItem>
                        <GridItem>
                            <h3>WordPress Boilerplate</h3>
                            <p>Streamlined WordPress theme for development.</p>
                        </GridItem>
                        <GridItem>
                            <h3>Whitepaper</h3>
                            <p>Designed a sleek PDF.</p>
                        </GridItem>
                    </Grid>
                    <Grid type="one">
                        <GridItem>
                            <h3>Published a book</h3>
                            <p>Ha! Bet you didn&apos;t expect that.</p>
                            <button>See Code +</button>
                        </GridItem>
                    </Grid>
                </Section>

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