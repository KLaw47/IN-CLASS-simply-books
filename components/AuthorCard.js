/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Link from 'next/link';

export default function AuthorCard({
  email, firstName, lastName, firebaseKey, favorite, image,
}) {
  return (
    <>
      <div>Key: {firebaseKey}</div>
      <div>Email: {email}</div>
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
      <div>Favorite: {favorite}</div>
      <img src={image} alt={firstName} />
    </>
  );
}

AuthorCard.propTypes = {
  email: PropTypes.string,
  firebaseKey: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  image: PropTypes.string,
  favorite: PropTypes.bool,
  // uid: PropTypes.string,
};

AuthorCard.defaultProps = {
  email: 'beans@beans.com',
  firebaseKey: '474747474747',
  firstName: 'bean',
  lastName: 'bean',
  image: 'https://www.ixpap.com/images/2022/03/Anime-Waifu-Wallpaper.jpg',
  favorite: true,
 // uid: '47',
};
