/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

export default function User(

  {
    name, email, img, lastLogin,
  },

) {
  return (
    <>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <img src={img} alt={name} />
      <div>Last Login: {lastLogin}</div>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  img: PropTypes.string,
  lastLogin: PropTypes.string,
};

User.defaultProps = {
  name: 'beans',
  email: 'beans@beans.com',
  img: 'https://www.ixpap.com/images/2022/03/Anime-Waifu-Wallpaper.jpg',
  lastLogin: 'yesterday',
};
