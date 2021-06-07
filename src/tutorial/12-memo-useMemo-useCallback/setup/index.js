import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders


// React.memo is to memo a component.
// This prevents the component to re-render if the props and its value is same before re-render.

// useCallback is to memo a function.
// This prevents a function to be re-created from scratch if a state value does not change.
// Re-creating the function from scratch means the component using the function
// as its prop value will determine this as a new prop and will cause the component to re-render.
// This prevents a case where a component will re-render even if we are changing a state
// that does not affect the component.
// In this example, changing count state should not affect the BigList component.
// This is because we are not using count anywhere in the BigList component.
// Without useCallback, it will re-render the BigList everytime count changes, which isnt efficient.

// useMemo is to memo a variable.
// useMemo wraps a value / function and watches the value of variable.
// If the value of that variable changes, it will re-run the value / function inside the useMemo.

const calculateMostExpensive = (data) => {
  console.log('calculateMostExpensive'); // Checking how many times the function is called
  return data.reduce((total, item) => {
    const price = item.fields.price;
    if(price >= total) {
      total = price;
    }
    return total;
  }, 0) / 100
}

const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)

  // useCallback saves the function from getting re-created unnecessarily.
  // The recreation of function will cause components using this function as its props to re-render.
  // It will watch for the value of 'cart'. 
  // If 'cart' does not change, the function will not be re-created.
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart])

  const mostExpensive = useMemo(() => {
    return calculateMostExpensive(products)
  }, [products]) // useMemo watches for products. If products changes, it will rerun.

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h2>Cart : {cart}</h2>
      <h2>Most Expensive: ${mostExpensive}</h2>
      <BigList products={products} addToCart={addToCart}/>
    </>
  )
}

// React.memo saves the prop values. If the prop value changes, it will re-render.
// The re-render also happens along with all of the component's children.
const BigList = React.memo(({ products, addToCart }) => {
  // Count render count
  useEffect(() => {
    console.count('BigList');
    return () => {
      // cleanup
    }
  })

  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product} addToCart={addToCart}></SingleProduct>
      })}
    </section>
  )
})

const SingleProduct = ({ fields, addToCart }) => {
  // Count render count
  useEffect(() => {
    console.count('SingleProduct');
    return () => {
      // cleanup
    }
  })

  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </article>
  )
}
export default Index
