import React from 'react'
import Carousel from '../../components/layout/Carousel'
import Category from '../../components/utils-components/Category'
import ProductList from '../../components/layout/ProductList'

function Home() {
  return (
    <div>
      <Carousel/>
      <Category/>
      <ProductList/>
    </div>
  )
}

export default Home