import React from 'react';
import './styles.scss';

interface Props {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onInput: (event: React.FormEvent<HTMLInputElement>) => void | undefined;
}

const Navbar: React.FC<Props> = ({ onSubmit, onInput }) => {
  return (
    <form onSubmit={onSubmit} className="form-container">
      <input onInput={onInput} type="text" placeholder="Search image..." />
      <input type="submit" value=">" />
    </form>
  );
};

export default Navbar;
