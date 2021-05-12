import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Form,
  Button,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const { loading, error, user } = useSelector((state) => state.userDetails);

  const { userInfo } = useSelector((state) => state.userLogin);

  const { success } = useSelector((state) => state.userUpdateProfile);

  useEffect(() => {
    if (!userInfo) return history.push('/login');

    if (!user || !user.name || success) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(getUserDetails('profile'));
      return;
    }

    setName(user.name);
    setEmail(user.email);
  }, [dispatch, userInfo, history, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setMessage('Password and Confirm Password fields do not match.');
    }
    dispatch(updateUserProfile({ id: user._id, name, email, password }));
  };

  return (
    <Row>
      <Col md={3}>
        <h1>Update Profile</h1>
        {error && <Message>{error}</Message>}
        {message && <Message>{message}</Message>}
        {success && (
          <Message variant='success'>Profile successfully updated!</Message>
        )}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <FormGroup controlId='name'>
            <FormLabel>Name</FormLabel>
            <FormControl
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></FormControl>
          </FormGroup>

          <FormGroup controlId='email'>
            <FormLabel>Email Address</FormLabel>
            <FormControl
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></FormControl>
          </FormGroup>

          <Form.Group controlId='password'>
            <FormLabel>Password</FormLabel>
            <FormControl
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></FormControl>
          </Form.Group>

          <Form.Group controlId='confirmPassword'>
            <FormLabel>Confirm password</FormLabel>
            <FormControl
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></FormControl>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
