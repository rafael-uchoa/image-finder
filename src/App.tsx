import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';

import Navbar from './components/Navbar';
import ImagesGrid from './components/ImagesGrid';

const App: React.FC = () => {
  const apiUrl = 'https://pixabay.com/api';
  const apiKey = 'YOUR_API_KEY';

  const [input, setInput] = useState<string>();
  const [images, setImages] = useState<Array<any>>();

  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === '') return;
    imageHandler(input);
  };

  const imageHandler = (current: string | undefined) => {
    axios
      .get(
        `${apiUrl}/?key=${apiKey}&q=${current}&image_type=photo&safesearch=true`
      )
      .then(res => setImages(res.data.hits))
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <h1>ImageFinder</h1>
      <Navbar onInput={onInput} onSubmit={onSubmit} />
      <ImagesGrid images={images} />
    </div>
  );
};

export default App;
