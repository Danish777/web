import React from 'react';

import images from '../../icon';

const SpotLight = () => {
  return (
    <div className="pe-3 ps-3">
      <div>
        <img src={images.img1} className="w-100 img-fluid" alt="Image 1" />
      </div>
      <div className="mt-2">
        <img src={images.img2} className="w-100 img-fluid" alt="Image 2" />
      </div>
      <div className="mt-2">
        <img src={images.img3} className="w-100 img-fluid" alt="Image 3" />
      </div>
    </div>
  );
};

export default SpotLight;