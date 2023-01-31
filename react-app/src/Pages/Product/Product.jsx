import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import './product.css'

export const Product = () => {
  const [productData, setData] = useState([]);
  const [searchApi, setSearchApi] = useState([]);
  const [filteredData,setFilteredData] = useState("");
  const [loading, setLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    getdata()
  }, [])

  const getdata = async () => {
    setLoad(true);
    let res = await fetch("https://originhighway-staging-kxyaws5ixa-uc.a.run.app/proxy/catalog/products")
    let data = await res.json()
    setData(data.data.products)
    setSearchApi(data.data.products);
    setLoad(false);
  }

  const handleSearch = async(event) => {
    if(event.target.value == ""){
      setData(searchApi);
    }
    else{
      const filterResult = searchApi.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()))
      setData(filterResult);
    }
    setFilteredData(event.target.value);
  }

  const handlesort = (e) => {
    let selected = e.target.value

    if (selected === 'asc') {
      productData.sort((a, b) => {
        return a.mrp.mrp - b.mrp.mrp
      })
    }
    if (selected === 'des') {
      productData.sort(function (a, b) {
        return b.mrp.mrp - a.mrp.mrp
      })
    }

    setData([...productData])
  }

  const handlefilter = (e) => {
    let selected = e.target.value
    let filterarr = []
    if (selected === 'Baby care') {
      filterarr = productData.filter((el) => {
        if (el.main_category === 'Baby care') {
          return el
        }
      })
    }
    if (selected === 'Fruits & Vegetables') {
      console.log('Hello')
      filterarr = productData.filter((el) => {
        if (el.main_category === 'Fruits & Vegetables') {
          return el
        }
      })
    }
    if (selected === 'Foodgrains, Oil & Masala') {
      console.log('Hello')
      filterarr = productData.filter((el) => {
        if (el.main_category === 'Foodgrains, Oil & Masala') {
          return el
        }
      })
    }
    if (selected === 'Snacks & Branded Foods') {
      console.log('Hello')
      filterarr = productData.filter((el) => {
        if (el.main_category === 'Snacks & Branded Foods') {
          return el
        }
      })
    }
    setData([...filterarr])
  }
  return (
    <>
      <input type='text' placeholder='Search Name...' className='inputs' value={filteredData} onInput={(event) =>handleSearch(event)}/>
      <br/>
    
      <select onChange={handlesort} name="" id="">
        <option value="all">Sort by Price</option>
        <option value="asc">low to high</option>
        <option value="des">high to low</option>
      </select>
      <select onChange={handlefilter} name="" id="">
        <option value="all">Sort by Filter</option>
        <option value="Baby care">Baby care</option>
        <option value="Fruits & Vegetables">Fruits & Vegetables</option>
        <option value="Foodgrains, Oil & Masala">Foodgrains, Oil & Masala</option>
        <option value="Snacks & Branded Foods">Snacks & Branded Foods</option>
      </select>

      <div classname="box">
        {!loading ? productData.map((item) => (
          <NavLink id="nav" to={`/products/${item.id}`}>
            <div key={item.id} className="product">
              <img src={item.images.top_left} height="200px" width="200px" alt="" />
              <p>{item.brand}</p>
              <p>{item.name}</p>
              <p>Rs.{item.mrp.mrp}</p>
            </div>
          </NavLink>
        )) : "Loading..."}
      </div>
    </>
  )
}

