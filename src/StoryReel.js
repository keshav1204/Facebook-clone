import React from 'react';
import Story from './Story';
import './StoryReel.css';

const img =
  'https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg';

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image={img}
        profileSrc="https://i.pinimg.com/736x/62/2f/9d/622f9d0cfaf3bdd69fba4046103363e2.jpg"
        title="Goon Deve3"
      />
      <Story
        image={img}
        profileSrc="https://i.pinimg.com/736x/62/2f/9d/622f9d0cfaf3bdd69fba4046103363e2.jpg"
        title="Goon Deve3"
      />
      <Story
        image={img}
        profileSrc="https://i.pinimg.com/736x/62/2f/9d/622f9d0cfaf3bdd69fba4046103363e2.jpg"
        title="Goon Deve3"
      />
      <Story
        image={img}
        profileSrc="https://i.pinimg.com/736x/62/2f/9d/622f9d0cfaf3bdd69fba4046103363e2.jpg"
        title="Goon Deve3"
      />
      <Story
        image={img}
        profileSrc="https://i.pinimg.com/736x/62/2f/9d/622f9d0cfaf3bdd69fba4046103363e2.jpg"
        title="Goon Deve3"
      />
    </div>
  );
}

export default StoryReel;