import '@/styles/reset.scss';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

// Define Inter font
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700', '900'],
    variable: '--font-inter', // CSS variable for Inter
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* Inject global style to set --font-inter on :root */}
            <style jsx global>{`
                :root {
                    ${inter.style.fontFamily ? `--font-inter: ${inter.style.fontFamily};` : ''}
                }
            `}</style>
            <div className={inter.variable}>
                <Component {...pageProps} />
            </div>
        </>
    );
}