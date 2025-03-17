import { Pixelify_Sans, Montserrat } from 'next/font/google'
import Section from '@/components/Section/Section'

const pixelify = Pixelify_Sans({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--font-pixelify-sans'
})

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-montserrat',
})

export default function Home() {
    return (
        <div>
            <main className={`${pixelify.variable} ${montserrat.variable}`}>
                <Section>
                    <h1>Hej 👋</h1>
                    <p>This is a basic section with default styling.</p>
                </Section>
                <Section>
                    <h1>Welcome to My App</h1>
                    <p>This is a basic section with default styling.</p>
                </Section>
            </main>
        </div>
    )
}