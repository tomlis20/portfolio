import { Section } from '@/components/Section';
import Image from 'next/image';
import imageWallJustice from '/public/wall-justice.jpg';

export const IdeationUserTests = () => {
    return (
        <Section>
            <h3>Quick feedback loop</h3>
            <p>Moderated user tests help me to quickly get feedback from actual target market. Let them roam while you watch closely. Note their mouse movement and facial expressions. Ask open-ended questions, if unclear.</p>
            <p>Below is one of the user test sessions I moderated. While I bet it&apos;s probably better than some Netflix TV series, I recommend hopping through it just to get an idea!</p>
            <div style={{position: 'relative',paddingBottom:'56.25%'}}>
                <iframe style={{width:'100%',height:'100%',position: 'absolute',top: 0, left: 0}} src="https://www.youtube.com/embed/HheLQUlSee8?si=h5BFQ-cS24r4BqIh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <p>And here&apos;s an example of Wall Justice after 5 user test interviews - as recommended in The Sprint Book!</p>
            <Image 
                src={imageWallJustice}
                alt=""
            />
       </Section>
    )
}

export default IdeationUserTests;