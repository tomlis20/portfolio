import '@/styles/reset.scss'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

// Define Inter font
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700', '900'],
    variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={inter.className}>
            <Component {...pageProps} />
        </div>
    )
}