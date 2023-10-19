

import {Simpson} from './Simpson';

const Simpsons = () => {

    const simpsons = [
        {
            id: 1,
            name: 'Homer Jay Simpson',
            text: 'Is the main protagonist of the The Simpsons. He is the husband of Marge Simpson and father of Bart, Lisa and Maggie Simpson. ' +
                'Homer is overweight (said to be 240 pounds elsewhere[39]),[6] lazy, and often ignorant to the world around him. Although he has many flaws, ' +
                'he has shown to have great caring, love and even bravery to those he cares about and sometimes, even others he doesn\'t.\n' +
                'His favorite color is blue, and he enjoys dancing, eating donuts, drinking, hugging, driving a sit-down arcade racer, playing ' +
                'the piano and horse riding. His favorite kiddie rides are "Stuart Little", "Barney Train" and "Ride the Champion Mechanical Horse".',
            image: 'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'
        },
        {
            id: 2,
            name: 'Marjorie Jacqueline "Marge" Simpson',
            text: 'Is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. ' +
                'She and her husband Homer have three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides ' +
                'a grounding voice in the midst of her family\'s antics by trying to maintain order in the Simpson household. Aside from her duties at home, ' +
                'Marge has flirted briefly with a number of careers ranging from a police officer to an anti-violence activist.',
            image: 'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'
        },
        {
            id: 3,
            name: 'Bartholomew JoJo "Bart" Simpson',
            text: 'Is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons. ' +
                'He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie. He also has been nicknamed "Cosmo", after discovering a comet ' +
                'in "Bart\'s Comet". Bart has also been on the cover on numerous comics, such as "Critical Hit", "Simpsons Treasure Trove #11", and "Winter Wingding". ' +
                'Bart also has a 100-issue comic series entitled the Simpson Comics Presents Bart Simpson. Bart is loosely based on Matt Groening and his older brother, ' +
                'Mark Groening.',
            image: 'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'
        },
        {
            id: 4,
            name: 'Lisa Marie Simpson',
            text: 'Is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons. ' +
                'She was named after a train called Lil\' Lisa on her parents\' 1st anniversary.[10] In "Homer and Lisa Exchange Cross Words", she called herself ' +
                'Lisa Bouvier after estranging herself from her father after he bet against her in a crossword tournament.',
            image: 'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png'
        },
        {
            id: 5,
            name: 'Margaret Lenny "Maggie" Simpson',
            text: 'Is the 1-year-old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main ' +
                'characters of The Simpsons. She is often seen sucking on her pacifier, and when she walks, she trips over her clothing and falls on her face. ' +
                'Because she rarely ever talks, Maggie is the least seen and heard in the Simpson family. Maggie is at the very young, infant age of 1.',
            image: 'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png'
        }
    ]

    return (
        <div>
            {simpsons.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export {Simpsons};
