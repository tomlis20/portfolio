import { useState } from 'react';
import { Section } from '@/components/Section'
import { Grid } from '@/components/Grid'
import { GridItem } from '@/components/Grid'
import { Modal } from '@/components/Modal';
import { Button } from '@/components/Button';
import { VideoButton } from '@/components/VideoButton';

// Bio
import { BioVideo } from '@/pages/content/bio/video';
import { BioResume } from '@/pages/content/bio/resume';
import { BioCoverLetter } from '@/pages/content/bio/cover-letter';

// Design systems.
import { DesignSystemExchange } from '@/pages/content/design-systems/exchange';
import { DesignSystemTeg } from '@/pages/content/design-systems/teg';
import { DesignSystemRepositive } from '@/pages/content/design-systems/repositive';
import { DesignSystemViews } from '@/pages/content/design-systems/views';
import { DesignSystemDoddle } from '@/pages/content/design-systems/doddle';
import { DesignSystemAether } from '@/pages/content/design-systems/aether';

// Ideation.
import { IdeationPrototype } from '@/pages/content/ideation/prototype';
import { IdeationDesignSprints } from '@/pages/content/ideation/design-sprints';
import { IdeationSolutionSketches } from '@/pages/content/ideation/solution-sketches';
import { IdeationUserTests } from '@/pages/content/ideation/user-tests';

// Sites.
import { SiteViews } from '@/pages/content/sites/map';
import { SiteWww } from '@/pages/content/sites/www';
import { SiteNerdCow } from '@/pages/content/sites/nerdcow';
import { SiteAether } from '@/pages/content/sites/aether';

// Exploration.
import { ExplorationWhitepaper } from '@/pages/content/exploration/whitepaper';
import { ExplorationBook } from '@/pages/content/exploration/book';
import { ExplorationPixelArt } from '@/pages/content/exploration/pixel-art';

// Grid images.
import imageExchange from '../../public/exchange@2x.jpg';
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
import imageTio from '../../public/tio@2x.jpg';
import imageWpTheme from '../../public/wp-theme@2x.jpg';
import imageWhitepaper from '../../public/whitepaper@2x.jpg';
import imageBook from '../../public/book@2x.jpg';
import imageTeg from '../../public/teg@2x.jpg';

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
                    <h1>Hej 👋 I&apos;m Tomasz! I design, code, and build for the Web. </h1>
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: 16}}>
                        <VideoButton onClick={() => openModal(<BioVideo />)}/>
                        <Button onClick={() => openModal(<BioResume />)} primary={true}>Read my resume</Button>
                        <Button onClick={() => openModal(<BioCoverLetter />)} primary={true}>Read my cover letter</Button>
                    </div>
                </Section>

                <Section title={'💡 Ideation'}>
                    <p>I turn vague ideas into validated directions fast through rapid prototyping, user testing, and collaborative sprints - de-risking concepts early and saving teams weeks of rework.</p>
                    <Grid type="one">
                        <GridItem image={imageDesignSprint} onClick={() => openModal(<IdeationDesignSprints />)}>
                            <h3>Design sprints</h3>
                            <p>Facilitated 20+ design sprints to ideate and test solutions in 5 days.</p>
                            <Button onClick={() => openModal(<IdeationDesignSprints />)}>Learn more</Button>
                        </GridItem>
                    </Grid>
                    <Grid type="three">
                        <GridItem image={imagePrototype} onClick={() => openModal(<IdeationPrototype />)}>
                            <h3>Example prototype</h3>
                            <p>Challenged myself to design each website prototype in under 8 hours.</p>
                            <Button onClick={() => openModal(<IdeationPrototype />)}>Preview it</Button>
                        </GridItem>
                        <GridItem image={imageUserTests} onClick={() => openModal(<IdeationUserTests />)}>
                            <h3>User tests</h3>
                            <p>Recruited participants and moderated user tests to ask for feedback.</p>
                            <Button onClick={() => openModal(<IdeationUserTests />)}>Watch me</Button>
                        </GridItem>
                        <GridItem image={imageSketches} onClick={() => openModal(<IdeationSolutionSketches />)}>
                            <h3>Solution sketches</h3>
                            <p>Sketched solutions to solve website challenges. Pen and paper, baby!</p>
                            <Button onClick={() => openModal(<IdeationSolutionSketches />)}>Take a look</Button>
                        </GridItem>
                    </Grid>
                </Section>

                <Section title={'🖌️ Design Systems'}>
                    <p>I create scalable, intelligent design systems that unify brands, speed up delivery by 50%+, reduce handoff friction, and let teams ship consistent, high-trust experiences at scale.</p>
                    <Grid type="two">
                        <GridItem image={imageExchange} onClick={() => openModal(<DesignSystemExchange />)}>
                            <h3>Exchanges</h3>
                            <p>Two brands. One system.</p>
                            <Button onClick={() => openModal(<DesignSystemExchange />)}>See Figma</Button>
                        </GridItem>
                        <GridItem image={imageTeg} onClick={() => openModal(<DesignSystemTeg />)}>
                            <h3>TEG</h3>
                            <p>Enterprise logistics tech company.</p>
                            <Button onClick={() => openModal(<DesignSystemTeg />)}>See Figma</Button>
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

                <Section title={'👀 Web Experiences'}>
                    <p>I build immersive, motion-rich web interfaces that feel alive and intuitive - driving higher engagement, stronger brand perception, and memorable user delight.</p>
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
                    <p>I keep my creative edge sharp through personal experiments like micro apps, alternative art styles, and, honestly, whatever I find interesting - these side projects fuel fresh ideas, push new techniques, and bring innovative thinking back to client work.</p>
                    <Grid type="five">
                        <GridItem image={imageBook} onClick={() => openModal(<ExplorationBook />)}>
                            <h3>My book</h3>
                            <p>Learned publishing the hard way.</p>
                            <Button onClick={() => openModal(<ExplorationBook />)}>Peek inside</Button>
                        </GridItem>
                        <GridItem image={imagePixelArt} inverted={true} onClick={() => openModal(<ExplorationPixelArt />)}>
                            <h3>Pixel art</h3>
                            <p>Newly-found passion. Big message in small squares.</p>
                            <Button onClick={() => openModal(<ExplorationPixelArt />)} inverted={true}>Explore</Button>
                        </GridItem>
                        <GridItem image={imageTio} onClick={() => window.open('https://theimageoptimizer.com', '_blank')}>
                            <h3>The Image Optimizer</h3>
                            <p>Built the best image optimizer for Web.</p>
                            <Button icon={'external'} onClick={() => window.open('https://theimageoptimizer.com', '_blank')}>Open it</Button>
                        </GridItem>
                        <GridItem image={imageWpTheme} inverted={true} onClick={() => window.open('https://github.com/tomlis20/wordpress-theme/tree/main/wp-content/nerdcow', '_blank')}>
                            <h3>WordPress Boilerplate</h3>
                            <p>Streamlined WordPress theme for development.</p>
                            <Button icon={'external'} inverted={true} onClick={() => window.open('https://github.com/tomlis20/wordpress-theme/tree/main/wp-content/nerdcow', '_blank')}>See repo</Button>
                        </GridItem>
                        <GridItem image={imageWhitepaper} onClick={() => openModal(<ExplorationWhitepaper />)}>
                            <h3>Whitepaper</h3>
                            <p>Designed a sleek PDF.</p>
                            <Button onClick={() => openModal(<ExplorationWhitepaper />)}>Read it</Button>
                        </GridItem>
                    </Grid>
                </Section>

                <Section id="contact">
                    <h2>That&apos;s me in a pill 😊 Dziękuję! 🇵🇱</h2>
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: 16}}>
                        <Button icon='external' onClick={() => window.open('https://www.linkedin.com/in/tomaszlisiecki/', '_blank')}>Meet me on LinkedIn</Button>
                        <Button icon='external' onClick={() => window.open('https://www.youtube.com/watch?v=BkVLIlLbsIY&list=PLPZ893eqycAeT41i12xD3mSEpxOKuMqAG', '_blank')}>Listen to my podcast</Button>
                    </div>
                    <p>
                        Made with ❤️ for Web
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