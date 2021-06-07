import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ image, name, price }) => {
  return (
    <article className='product'>
      <img src={image.url} alt={name} />
      <h3>{name}</h3>
      <h5>{price}</h5>
    </article>
  );
};

// PropTypes, to filter the data type that is coming into the element from the props.
// Adding isRequired means that the data has to be present or it will show an error in the console.
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

// defaultProps are values that is substitituded in incase the props value is empty.
Product.defaultProps = {
  image: { url: defaultImage },
  name: 'Name',
  price: '3.99'
}

export default Product;
