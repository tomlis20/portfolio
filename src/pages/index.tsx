import Section from '@/components/Section'

export default function Home() {
    return (
        <div>
            <main>
                <Section id="bio">
                    <h1>Hej 👋</h1>
                    <p>I'm Tomasz—designing, coding, and creating. Here’s my portfolio.</p>
                    {/* Socials, GrowthMentor, etc. */}
                </Section>

                <Section id="design-system">
                    <h2>Design System</h2>
                    <p>A scalable system I built...</p>
                </Section>
                <Section id="components">
                    <h2>Component Library</h2>
                    <p>Unstyled components in Storybook...</p>
                </Section>

                <Section id="calculator">
                    <h2>Earnings Calculator</h2>
                    <p>Interactive tool...</p>
                </Section>
                <Section id="prototypes">
                    <h2>Prototype Challenge</h2>
                    <p>Built in under 8 hours...</p>
                </Section>

                <Section id="views">
                    <h2>Views Website</h2>
                    <p>Aesthetic-driven project...</p>
                </Section>
                <Section id="cookie-consent">
                    <h2>Cookie Consent</h2>
                    <p>Sleek UI design...</p>
                </Section>

                <Section id="illustrations">
                    <h2>Illustrations</h2>
                    <p>Product doodles and art...</p>
                </Section>
                <Section id="svgs">
                    <h2>Animated SVGs</h2>
                    <p>Motion design...</p>
                </Section>

                <Section id="white-paper">
                    <h2>White Paper</h2>
                    <p>Designed document...</p>
                </Section>

                <Section id="workshops">
                    <h2>Workshops</h2>
                    <p>Facilitated sessions...</p>
                </Section>

                <Section id="side-projects">
                    <h2>Side Projects</h2>
                    <p>Pixel art and OBS scenes...</p>
                </Section>
            </main>
        </div>
    )
}