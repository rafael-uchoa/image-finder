import React from 'react';
import './styles.scss';

import Image from './Image';

interface Props {
  images:
    | Array<{
        pageURL: string;
        largeImageURL: string;
        tags: string;
        user: string;
        id: string;
      }>
    | undefined;
}

const ImagesGrid: React.FC<Props> = ({ images }) => {
  return (
    <div className="images-grid">
      {images
        ? images.map(image => <Image image={image} key={image.id} />)
        : null}
    </div>
  );
};

export default ImagesGrid;
