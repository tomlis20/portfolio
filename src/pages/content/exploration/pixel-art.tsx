import { Section } from '@/components/Section';
import Image from 'next/image';
import imagePixelArt1 from '/public/pixel-art-1.jpg';
import imagePixelArt2 from '/public/pixel-art-2.jpg';
import imagePixelArt3 from '/public/pixel-art-3.jpg';

export const ExplorationPixelArt = () => {
    return (
        <Section>
            <h3>Let&apos;s get there pixel by pixel...</h3>
            <p>This one is unexpected for me. I dived in the world of pixel art by accident and decided to stay.</p>
            <p>I spend my weekends streaming games on Twitch to relax, meet likeminded people, and have fun. Being a design-orientated person, I had to cover the basics. What should my personal brand be like?</p>
            <p>I attached some examples of what I ended up with. First, a pattern with Polish pierogi, of course!</p>
            <Image
                src={imagePixelArt1}
                alt=''
            />
            <p>Next, a bunch of assets that I use as decorations.</p>
            <Image
                src={imagePixelArt2}
                alt=''
            />
            <p>Finally, the scene design while I stream. Powered by a WebSocket server. People can interact with its elements through commands in the chat. For example, they can change the Japanese character on the screen!</p>
            <Image
                src={imagePixelArt3}
                alt=''
            />
       </Section>
    )
}

export default ExplorationPixelArt;