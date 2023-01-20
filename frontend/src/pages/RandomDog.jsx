/* eslint-disable no-magic-numbers */
import React, { useState } from 'react';
import ReloadIcon from '../assets/icons/ReloadIcon';
import randomDogApi from '../services/randomDogApi';

function RandomDog() {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <div className="grid justify-center mt-24 gap-4 space-y-6 m-4">
      { !!imageUrl.length
      && <img className="w-64" src={ `http://random.dog/${imageUrl}` } alt="Cachorro" />}
      <button
        type="button"
        className="rounded-lg drop-shadow-xl w-32
        h-32 text-white font-semibold m-auto bg-cyan-500 hover:bg-cyan-700"
        onClick={ async () => {
          setImageUrl(await randomDogApi());
        } }
      >
        <ReloadIcon />
        Clique aqui!
      </button>
    </div>
  );
}

export default RandomDog;
