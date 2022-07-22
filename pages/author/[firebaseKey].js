/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthorDetails() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <div className="text-white ms-5 details">
          <h5>
            {authorDetails.first_name} {authorDetails.last_name}
            <p>Author Email: {authorDetails.email}
              {authorDetails.favorite ? ' 🤍' : ''}
            </p>
            <hr />
            {authorDetails.books?.map((book) => (
              <BookCard key={book.firebaseKey} bookObj={book} />
            ))}
          </h5>

        </div>
      </div>
    </div>
  );
}
