import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './detail.css'

const Details = () => {
  const [product, setProductData] = useState({})

  let { id } = useParams()

  useEffect(() => {
    getdata()
  }, [])

  const getdata = async () => {
    let data = await fetch( `https://originhighway-staging-kxyaws5ixa-uc.a.run.app/proxy/catalog/products`)
    let res = await data.json()
    let obj = res.data.products?.find((elem) => {
      return elem.id === id
    })
    setProductData(obj)
  }
  console.log(product)
  if (Object.keys(product).length == 0) {
    return
  }
  return (
    <div id="indProductDiv">
      <div>
        <img id="image" src={product.images.top_left} alt="" />
      </div>

      <div className="details">
        <p>Brand :- {product.brand}</p>
        <p>Name :- {product.name}</p>
        <p>Main Category :- {product.main_category}</p>
        <p>Description :- {product.derived_description} </p>
        <p>Type :- {product.type}</p>
        <p>Weights :- {product.weights_and_measures.net_weight}</p>
        <p>Measurements :- {product.dimensions.width} * {product.dimensions.height} * {product.dimensions.depth} </p>
        <p>Made in :- {product.mrp.location}</p>
        <p>Price :- {product.mrp.mrp}</p>
      </div>
    </div>
  )
}

export default Details
