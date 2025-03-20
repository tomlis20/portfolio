import { Section } from '@/components/Section';
import Image from 'next/image';
import imageSnacks from '/public/snacks.jpeg';

export const IdeationDesignSprints = () => {
    return (
        <Section>
            <h3>The answer is in the room</h3>
            <p>I believe that. Collaboration is a great way to make things happen. But there need to be rules, otherwise we&apos;re risking design by committee. That&apos;s where design sprints come into play.</p>
            <p>I facilitated my first design sprint in 2020. Since then, I continued supporting businesses in solving big website challenges through remote and in-person workshops.</p>
            <p>The biggest appeal is the time pressure. There&apos;s no wasteful discussions. No back-and-forth. It&apos;s all about making constant progress. Getting shit done, to be blunt.</p>
            <p>And below is a preview of the snacks I bring to my workshops - just to make you hungry. No other reason really.</p>
            <Image
                src={imageSnacks}
                alt=''
            />
            <p>(You&apos;ve got to try M&S sour cream & chives pretzels next time you&apos;re in the UK.)</p>
       </Section>
    )
}

export default IdeationDesignSprints;