import { useState } from 'react';
import { Section } from '@/components/Section'
import { Grid } from '@/components/Grid'
import { GridItem } from '@/components/Grid'
import { Modal } from '@/components/Modal';
import { Button } from '@/components/Button';

// Design systems.
import { DesignSystemExchange } from '@/pages/content/design-systems/exchange';
import { DesignSystemNerdCow } from '@/pages/content/design-systems/nerdcow';
import { DesignSystemRepositive } from '@/pages/content/design-systems/repositive';
import { DesignSystemViews } from '@/pages/content/design-systems/views';
import { DesignSystemDoddle } from '@/pages/content/design-systems/doddle';
import { DesignSystemAether } from '@/pages/content/design-systems/aether';

// Design sprints.

// Sites.
import { SiteViews } from '@/pages/content/sites/map';
import { SiteWww } from '@/pages/content/sites/www';
import { SiteNerdCow } from '@/pages/content/sites/nerdcow';
import { SiteAether } from '@/pages/content/sites/aether';

// Exploration.

// Grid images.
import imageExchange from '../../public/exchange@2x.jpg';
import imageNerdcow from '../../public/nerdcow@2x.jpg';
import imageViews from '../../public/views@2x.jpg';
import imageRepositive from '../../public/repositive@2x.jpg';
import imageDoddle from '../../public/doddle@2x.jpg';
import imageAetherDs from '../../public/aetherDs@2x.jpg';
import imageDesignSprint from '../../public/design-sprints@2x.jpg';
import imagePrototype from '../../public/prototype@2x.jpg';
import imageUserTests from '../../public/user-tests@2x.jpg';
import imageSketches from '../../public/sketches@2x.jpg';
import imageMaps from '../../public/maps@2x.jpg';
import imageWww from '../../public/www@2x.jpg';
import imageNerdcow2 from '../../public/nerdcow2@2x.jpg';
import imageAether from '../../public/aether@2x.jpg';
import imagePixelArt from '../../public/pixel-art@2x.jpg';
import imageNfts from '../../public/nfts@2x.jpg';
import imageWpTheme from '../../public/wp-theme@2x.jpg';
import imageWhitepaper from '../../public/whitepaper@2x.jpg';
import imageBook from '../../public/book@2x.jpg';

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
                    <h1>Hej 👋 I&apos;m Tomasz!<br/>I design, code, and build for the Web.</h1>
                </Section>

                <Section title={'🖌️ Design Systems'}>
                    <Grid type="two">
                        <GridItem image={imageExchange} onClick={() => openModal(<DesignSystemExchange />)}>
                            <h3>Exchanges</h3>
                            <p>Two brands. One system.</p>
                            <Button onClick={() => openModal(<DesignSystemExchange />)}>See Figma</Button>
                        </GridItem>
                        <GridItem image={imageNerdcow} onClick={() => openModal(<DesignSystemNerdCow />)}>
                            <h3>NerdCow</h3>
                            <p>Visual language for my company.</p>
                            <Button onClick={() => openModal(<DesignSystemNerdCow />)}>See Figma</Button>
                        </GridItem>
                    </Grid>
                    <Grid type="two">
                        <GridItem image={imageRepositive} onClick={() => openModal(<DesignSystemRepositive />)}>
                            <h3>Repositive</h3>
                            <p>Design backbone for a tech startup.</p>
                            <Button onClick={() => openModal(<DesignSystemRepositive />)}>See Figma</Button>
                        </GridItem>
                        <GridItem image={imageViews} onClick={() => openModal(<DesignSystemViews />)}>
                            <h3>Views</h3>
                            <p>Smart design to build trust.</p>
                            <Button onClick={() => openModal(<DesignSystemViews />)}>See Figma</Button>
                        </GridItem>
                    </Grid>
                    <Grid type="two">
                        <GridItem image={imageDoddle} onClick={() => openModal(<DesignSystemDoddle />)}>
                            <h3>Doddle</h3>
                            <p>Simple system for a complex brand.</p>
                            <Button onClick={() => openModal(<DesignSystemDoddle />)}>See Figma</Button>
                        </GridItem>
                        <GridItem image={imageAetherDs} onClick={() => openModal(<DesignSystemAether />)}>
                            <h3>Aether</h3>
                            <p>Foundations for a Rolls Royce&apos;s company.</p>
                            <Button onClick={() => openModal(<DesignSystemAether />)}>See Figma</Button>
                        </GridItem>
                    </Grid>
                </Section>

                <Section title={'💡 Ideation'}>
                    <Grid type="one">
                        <GridItem image={imageDesignSprint}>
                            <h3>Design sprints</h3>
                            <p>Facilitated 20+ design sprints to ideate and test solutions in 5 days.</p>
                            <Button onClick={() => openModal(<ContentExchange />)}>Explore</Button>
                        </GridItem>
                    </Grid>
                    <Grid type="three">
                        <GridItem image={imagePrototype}>
                            <h3>Example prototype</h3>
                            <p>Challenged myself to design each website prototype in under 8 hours.</p>
                            <Button onClick={() => openModal(<ContentExchange />)}>Explore</Button>
                        </GridItem>
                        <GridItem image={imageUserTests}>
                            <h3>User tests</h3>
                            <p>Recruited participants and moderated user tests to ask for feedback.</p>
                            <Button onClick={() => openModal(<ContentExchange />)}>Explore</Button>
                        </GridItem>
                        <GridItem image={imageSketches}>
                            <h3>Solution sketches</h3>
                            <p>Sketched solutions to solve website challenges. Pen and paper, baby!</p>
                            <Button onClick={() => openModal(<ContentExchange />)}>Explore</Button>
                        </GridItem>
                    </Grid>
                </Section>

                <Section title={'👀 Web Experiences'}>
                    <Grid type="two">
                        <GridItem image={imageMaps} onClick={() => openModal(<SiteViews />)}>
                            <h3>Real Estate Property Map</h3>
                            <p>So much fun doing this one. Plenty of motion design done around the site!</p>
                            <Button onClick={() => openModal(<SiteViews />)}>View site</Button>
                        </GridItem>
                        <GridItem image={imageWww} onClick={() => openModal(<SiteWww />)}>
                            <h3>World With Web</h3>
                            <p>Started the only website certificate that isn&apos;t a popularity contest.</p>
                            <Button onClick={() => openModal(<SiteWww />)}>View site</Button>
                        </GridItem>
                    </Grid>
                    <Grid type="two">
                        <GridItem image={imageNerdcow2} onClick={() => openModal(<SiteNerdCow />)}>
                            <h3>Web Design Agency Site</h3>
                            <p>Big part of my life for 10 years. What a rollercoaster. Proud to share this.</p>
                            <Button onClick={() => openModal(<SiteNerdCow />)}>View site</Button>
                        </GridItem>
                        <GridItem image={imageAether} onClick={() => openModal(<SiteAether />)}>
                            <h3>Brochure Landing Page</h3>
                            <p>Simple landing page for an asset management company.</p>
                            <Button onClick={() => openModal(<SiteAether />)}>View site</Button>
                        </GridItem>
                    </Grid>
                </Section>

                <Section title={'📍 Exploration'}>
                    <Grid type="five">
                        <GridItem image={imageBook}>
                            <h3>My book</h3>
                            <p>Self-published a book in 2017.</p>
                            <Button onClick={() => openModal(<ContentExchange />)}>See inside</Button>
                        </GridItem>
                        <GridItem image={imagePixelArt} inverted={true}>
                            <h3>Pixel art</h3>
                            <p>Newly-found passion. Big message in small squares.</p>
                            <Button onClick={() => openModal(<ContentExchange />)} inverted={true}>Explore</Button>
                        </GridItem>
                        <GridItem image={imageNfts}>
                            <h3>NFT Generator</h3>
                            <p>Flashback to 2021. I built a script to generate 500 NFTs.</p>
                            <Button icon={'external'} onClick={() => window.open('https://opensea.io/collection/cryptonippls', '_blank')}>Open tab</Button>
                        </GridItem>
                        <GridItem image={imageWpTheme} inverted={true}>
                            <h3>WordPress Boilerplate</h3>
                            <p>Streamlined WordPress theme for development.</p>
                            <Button onClick={() => openModal(<ContentExchange />)} inverted={true}>See repo</Button>
                        </GridItem>
                        <GridItem image={imageWhitepaper}>
                            <h3>Whitepaper</h3>
                            <p>Designed a sleek PDF.</p>
                            <Button onClick={() => openModal(<ContentExchange />)}>Read it</Button>
                        </GridItem>
                    </Grid>
                </Section>

                <Section id="contact">
                    <h2>That&apos;s me in a pill 😊</h2>
                    <p>
                        Made for 37signals
                    </p>
                </Section>
            </main>

            <Modal
                isOpen={modalOpen}
                onClose={closeModal}
                type="full"
                disableScrolling={true}
                disableGutters={true}
            >
                {modalContent}
            </Modal>
        </div >
    )
}