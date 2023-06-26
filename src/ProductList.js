import Product from './Product'
import React, { useState } from 'react'
import './product.css'
const ProductsData = [
  {
    name: "Leather Jacket",
    category: "jackets",
    description: "Whether it's to protect from wind or just to look super cool, this leather jacket has you covered.",
    price: 400,
  },
  {
    name: "Wool cardigan",
    category: "jackets",
    description: "Beautifully warm and soft, this cardigan will make you feel cosy on a cold day.",
    price: 80,
  },
  {
    name: "Striped business shirt",
    category: "shirts",
    description: "No ironing necessary to look professional every day with this striped shirt.",
    price: 50,
  },
  {
    name: "Short-sleeved polo shirt",
    category: "shirts",
    description: "The best shirt you can get for that business-casual look.",
    price: 30,
  },
  {
    name: "Plain business shirt",
    category: "shirts",
    description: "No ironing necessary to look professional every day with this plain business shirt.",
    price: 50,
  },
  {
    name: "Suit Jacket",
    category: "jackets",
    description: "Wear it with jeans or suit pants, it works with both!",
    price: 120,
  },
  {
    name: "Suit Trousers",
    category: "pants",
    description: "Get 5 of these and you've got pants for every day of the week.",
    price: 100,
  },
  {
    name: "Denim Jeans",
    category: "pants",
    description: "A timeless classic, these denim jeans will never go out of style.",
    price: 80,
  },
  {
    name: "Pencil Skirt",
    category: "skirts",
    description: "A classy work-ready skirt that will make you feel like a million bucks.",
    price: 100,
  },
  {
    name: "Cotton flowy skirt",
    category: "skirts",
    description: "For those warm summer days when you just need to feel the breeze on your legs.",
    price: 45,
  },
]

function ProductList(){
    const [filter, setFilter] = useState(ProductsData)
    const [search, setSearch] = useState({
    newUserInput: '',
    searchList: []
    })
    const [sortOrder, setSortOrder] = useState('asc')

    const shirtHandler = () => {
      const shirts = ProductsData.filter((product) => product.category === "shirts")
      setFilter(shirts)
      setSearch({ ...search, searchList: [] })
    }

    const pantAndSkirtHandler = () => {
      const pantsAndSkirts = ProductsData.filter((product) => product.category === "pants" || product.category === "skirts")
      setFilter(pantsAndSkirts)
      setSearch({ ...search, searchList: [] })
    }

    const jacketHandler = () => {
      const jackets = ProductsData.filter((product) => product.category === "jackets")
      setFilter(jackets)
      setSearch({ ...search, searchList: [] })
    }

    const allProductsHandler = () => {
      setFilter(ProductsData)
      setSearch({ ...search, searchList: [] })
    }

    const handleChange = event => {
      const userInput = event.target.value
      setSearch({...search, newUserInput: userInput})
    }

    const searchHandler = () => {
      const getUserInput =  search.newUserInput.toLowerCase()
      const searchByInput = ProductsData.filter(
        (product) => product.category.toLowerCase().includes(getUserInput) ||
                     product.name.toLowerCase().includes(getUserInput))
      setSearch({newUserInput: '', searchList: searchByInput})
    }

    const sortByPriceHandler = () => {
      const sortedProducts = [...filter].sort((a, b) => {
        if (sortOrder === 'asc'){
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      })

      setFilter(sortedProducts)
      setSortOrder(prevSortOrder => prevSortOrder === 'asc' ? 'desc' : 'asc')
    }

        return(
          <div>
            <div className="button">
                <button onClick={shirtHandler}>Shirts</button>
                <button onClick={pantAndSkirtHandler}>Pants and skirts</button>
                <button onClick={jacketHandler}>Jackets</button>
                <button onClick={allProductsHandler}>All products</button>
                <button onClick={sortByPriceHandler}>Sort by Price 
                ({sortOrder === 'asc' ? 'Low to High' : 'High to Low'})</button>
                <input type="text" onChange={handleChange} value={search.newUserInput}/>
                <button onClick={searchHandler}>Search</button>
            </div>
            <div className='product-list'>
                {search.searchList.length > 0 ? (
                  search.searchList.map((product, index) => (
                    <Product
                      key={index}
                      name={product.name}
                      category={product.category}
                      description={product.description}
                      price={product.price}
                    />))
                ) : (
                  filter.map((product, index) => (
                    <Product
                      key={index}
                      name={product.name}
                      category={product.category}
                      description={product.description}
                      price={product.price}
                    />
                  ))
                )}

            </div>
          </div>

            
        )
}

export default ProductList