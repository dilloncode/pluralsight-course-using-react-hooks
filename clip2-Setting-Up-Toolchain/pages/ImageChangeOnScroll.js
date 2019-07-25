import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
const speakerIds = [1124, 187, 823, 1269, 1530, 1725, 2920, 5996, 6548];

  return (
    <div>
      {speakerIds.map(speakerId => {
        return (
          <div key={speakerId}>
            <ImageToggleOnScroll
              primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
              secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
              alt=""
            />
          </div>
        )
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
