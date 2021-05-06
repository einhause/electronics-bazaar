import React, { useEffect } from 'react';
import { Link, useParams, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Buttom,
  Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

const CartScreen = () => {
  const { id: productId } = useParams();
  const history = useHistory();
  //const location = useLocation();
  //const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const { _id, name, image, price, countInStock, qty } = cartItems;

  useEffect(() => {
    if (productId) dispatch(addToCart(productId, qty));
  }, [dispatch, productId, qty]);

  return <div>Cart</div>;
};

export default CartScreen;
