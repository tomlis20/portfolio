import { Section } from '@/components/Section';
import Image from 'next/image';

import imageSketch1 from '/public/solution-sketch-1.png';
import imageSketch2 from '/public/solution-sketch-2.jpg';
import imageSketch3 from '/public/solution-sketch-3.jpg';

export const IdeationSolutionSketches = () => {
    return (
        <Section>
            <h3>I&apos;ll take a sharpie!</h3>
            <p>Here are a few solution sketches I did for design sprints that I faciliated.</p>
            <p>Crazy eights and solution sketching are my favourite exercises. Brainstorming under the time pressure. Hammering down the scope. Getting something out ASAP rather than waiting for perfection.</p>
            <p>I use the same approach when trying to come up with a concept for a feature outside of a design sprint.</p>
            <p>Give me a sharpie, a napkin and I will show you the way!</p>
            <p>(I know it&apos;s against the rules for the facilitator to take part in the exercises, but I couldn&apos;t resist... 🤫)</p>
            <Image 
                src={imageSketch1}
                alt=""
            />
            <Image 
                src={imageSketch2}
                alt=""
            />
            <Image 
                src={imageSketch3}
                alt=""
            />
       </Section>
    )
}

export default IdeationSolutionSketches;