/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteAuthorBooks } from '../api/mergedData';

export default function AuthorCard({ authorObj, onUpdate }) {
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorObj.first_name}?`)) {
      deleteAuthorBooks(authorObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{authorObj.first_name}</Card.Title>
        <div>Email: {authorObj.email}</div>
        <div>First Name: {authorObj.first_name}</div>
        <div>Last Name: {authorObj.last_name}</div>
        <p className="card-text bold">{authorObj.favorite && <span>FAVE<br /></span> }</p>
        <Link href={`/author/${authorObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/author/edit/${authorObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    email: PropTypes.string.isRequired,
    firebaseKey: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
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
