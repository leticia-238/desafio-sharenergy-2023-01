/* eslint-disable no-magic-numbers */
import React, { useState } from 'react';

function HttpStatusCat() {
  const [firstDigit, setFirstDigit] = useState('0');
  const [secondDigit, setSecondDigit] = useState('0');
  const [thirdDigit, setThirdDigit] = useState('0');

  const [imageUrl, setImageUrl] = useState('');

  return (
    <div className="space-y-6">
      <h1 className="font-semibold text-xl">
        {`Status Code: ${firstDigit}  ${secondDigit}  ${thirdDigit}`}
      </h1>
      {!!imageUrl.length && <img src={ imageUrl } alt="Cat" />}
      <div className="grid grid-cols-5 gap-2">
        <p className="col-span-5 font-medium">Escolha o primeiro dígito:</p>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            type="button"
            key={ num }
            className="rounded-lg bg-cyan-500 px-4 py-2 text-white font-semibold"
            onClick={ () => { setFirstDigit(num); } }
          >
            {num}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-2">
        <p className="col-span-5 font-medium">Escolha o segundo dígito:</p>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            type="button"
            className="rounded-lg bg-cyan-500 px-4 py-2 text-white font-semibold"
            key={ num }
            onClick={ () => { setSecondDigit(num); } }
          >
            {num}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-2">
        <p className="col-span-5 font-medium">Escolha o terceiro dígito:</p>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            type="button"
            key={ num }
            className="rounded-lg bg-cyan-500 px-4 py-2 text-white font-semibold"
            onClick={ () => { setThirdDigit(num); } }
          >
            {num}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="rounded-lg px-4 py-2 text-white font-semibold bg-green-500"
          onClick={ () => {
            setImageUrl(`https://http.cat/${firstDigit}${secondDigit}${thirdDigit}`);
          } }
        >
          Salvar
        </button>
      </div>
    </div>
  );
}

export default HttpStatusCat;
