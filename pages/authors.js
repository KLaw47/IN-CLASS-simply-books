import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getAuthors } from '../api/authorData';
import { useAuth } from '../utils/context/authContext';
import AuthorCard from '../components/AuthorCard';

export default function ViewAuthors() {
  const [authors, setAuthors] = useState([]);
  const { user } = useAuth();
  const getAllAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  useEffect(() => {
    getAllAuthors();
  }, []);

  return (
    <>
      <div className="text-center my-4">
        <Link href="/author/newAuthor" passHref>
          <Button>Add A Book</Button>
        </Link>
        <div className="d-flex flex-wrap">
          {authors.map((author) => (
            <AuthorCard key={author.firebaseKey} bookObj={author} onUpdate={getAllAuthors} />
          ))}
        </div>
      </div>
    </>
  );
}
