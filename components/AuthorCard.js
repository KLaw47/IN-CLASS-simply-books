/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Link from 'next/link';
import { deleteSingleAuthor } from '../api/authorData';

export default function AuthorCard({ authorObj, onUpdate }) {
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorObj.first_name}?`)) {
      deleteSingleAuthor(authorObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <div>Key: {authorObj.firebaseKey}</div>
      <div>Email: {authorObj.email}</div>
      <div>First Name: {authorObj.first_name}</div>
      <div>Last Name: {authorObj.last_name}</div>
      <div>Favorite: {authorObj.favorite}</div>
      <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
        DELETE
      </Button>
    </Card>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    email: PropTypes.string.isRequired,
    firebaseKey: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    image: PropTypes.func.isRequired,
    favorite: PropTypes.bool.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

// AuthorCard.defaultProps = {
//   email: 'beans@beans.com',
//   firebaseKey: '474747474747',
//   firstName: 'bean',
//   lastName: 'bean',
//   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Buster_Keaton_LCCN2014712604.jpg/442px-Buster_Keaton_LCCN2014712604.jpg?20180401122209',
//   favorite: true,
// };
