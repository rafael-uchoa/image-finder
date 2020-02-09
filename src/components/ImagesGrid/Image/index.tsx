import React from 'react';
import './styles.scss';

interface Props {
  image: {
    pageURL: string;
    largeImageURL: string;
    tags: string;
    user: string;
  };
}

const Image: React.FC<Props> = ({ image }) => {
  const { pageURL, largeImageURL, tags, user } = image;

  return (
    <div className="image-container">
      <a href={pageURL} target="_blank" rel="noopener noreferrer">
        <img src={largeImageURL} alt={tags} />
      </a>
      <h3>by {user}</h3>
      <p>{tags}</p>
    </div>
  );
};

export default Image;
