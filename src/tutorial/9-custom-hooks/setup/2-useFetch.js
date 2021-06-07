import { useState, useEffect } from 'react';


// Created useFetch custom hook, returns 2 values, loading and products.
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  }

  useEffect(() => {
    getProducts();
  }, [url])

  return {loading, products};
};
