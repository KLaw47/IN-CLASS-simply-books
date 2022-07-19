// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-boostrap/Form';
// import { Button } from 'react-bootstrap';
// import { useAuth } from '../../utils/context/authContext';
// import { createAuthor, getAuthors, updateAuthor } from '../../api/authorData';
// import { updateBook } from '../../api/bookData';

// const initialState = {
//   firstName: '',
//   lastName: '',
//   email: '',
// };

// function AuthorForm({ obj }) {
//   const [formInput, setFormInput] = useState(initialState);
//   const [authors, setAuthors] = useState([]);
//   const router = useRouter();
//   const { user } = useAuth();

//   useEffect(() => {
//     getAuthors(user.uid).then(setAuthors);

//     if (obj.firebaseKey) setFormInput(obj);
//   }, [obj, user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormInput((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (obj.firebaseKey) {
//       updateAuthor(formInput)
//         .then(() => router.push(`/author/${obj.firebaseKey}`));
//     } else {
//       const payload = { ...formInput, uid: user.uid };
//       createAuthor(payload).then(() => {
//         router.push('/authors');
//       });
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Author</h2>
//       <FloatingLabel controlId="floatingInput1" label="Author First Name" className="mb-3">
//         <Form.Control type="text" placeholder="Enter First Name" name="firstName" value={formInput.title} onChange={handleChange} required />
//       </FloatingLabel>
//       <FloatingLabel controlId="floatingInput2" label="Book Image" className="mb-3">
//         <Form.Control type="url" placeholder="Enter Last Name" name="lastName" value={formInput.image} onChange={handleChange} required />
//       </FloatingLabel>
//       <FloatingLabel controlId="floatingInput2" label="Email" className="mb-3">
//         <Form.Control type="url" placeholder="Enter Email" name="email" value={formInput.image} onChange={handleChange} required />
//       </FloatingLabel>
//       <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Author</Button>
//     </Form>
//   );
// }
