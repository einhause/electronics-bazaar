import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Carousel, Image } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listTopProducts } from '../actions/productActions';
import { CarouselItem } from 'react-bootstrap';

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector(
    (state) => state.productTopRated
  );

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-light'>
      {products.map((product) => (
        <CarouselItem key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
          </Link>
          <Carousel.Caption className='carousel-caption'>
            <h2>
              {product.name} (${product.price})
            </h2>
          </Carousel.Caption>
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
