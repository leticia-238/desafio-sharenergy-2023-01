import React from 'react';
import { oneOfType, objectOf, string, number, arrayOf } from 'prop-types';

function UserList({ data }) {
  return (
    <ul className="my-8 space-y-4">
      {data.map(({ picture, name, email, login, dob }, index) => (
        <li key={ index } className="flex bg-gray-100 rounded-lg shadow-md space-x-4 p-2">
          <img
            src={ picture.medium }
            alt="imagem do usuário"
            className="rounded-full w-20 h-20 bg-slate-50"
          />
          <div className="grow grid items-center">
            <h3 className="text-sm">{name.first + name.last}</h3>
            <p className="text-sm">{email}</p>
            <p className="text-sm">{login.username}</p>
            <p className="text-sm">{dob.age}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

UserList.propTypes = {
  data: arrayOf(
    objectOf(
      oneOfType([string, number, objectOf(oneOfType([string, number]))]),
    ),
  ).isRequired,
};

export default UserList;
