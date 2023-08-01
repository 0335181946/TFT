import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Search from './filterPart/Search'
import ShopFilter from './ShopFilter'
import ShopProducts from './ShopProducts'
import Empty from './Empty'

const ShopMain = () => {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState([0, 1000]);

    const [list,setList] = useState(products);
    const [inputSearch, setInputSearch] = useState('');
    const [resultsFound, setResultsFound]  = useState(true);

    const [selectedCategory, setSelectedCategory] =  useState();

    const filterResult = (catItem) =>{
        setSelectedCategory(catItem);
    }

    const handleChangeChecked = (id) =>{
        const subcategoryList = subCategory;
        const changCheckedSubCategory = subcategoryList.map((item) => item._id === id ? {...item, checked: !item.checked} : item);
        setSubCategory(changCheckedSubCategory);
    }

    //chang value price
    const handleChangePrice = (value) => {
        setSelectedPrice(value);
    }


    useEffect(() =>{
        const applyFilter = ()  => {
            let updateProductList = products;

            //category filter
            if(selectedCategory){
                updateProductList = updateProductList.filter((item) => item.category === selectedCategory);
            }

            //subcate filter
            const subcategoryChecked = subCategory.filter((item) => item.checked).map((item) => item.label);
            if(subcategoryChecked.length){
                updateProductList = updateProductList.filter((item) => subcategoryChecked.includes(item.subcategory));
            }

            //price filter
            const minPrice = selectedPrice[0];
            const maxPrice = selectedPrice[1];
            updateProductList = updateProductList.filter((item) => item.price >= minPrice&& item.price <= maxPrice);

            //search filter
            if(inputSearch) {
                updateProductList = updateProductList.filter((item) => item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !== -1);
            }
            setList(updateProductList);
            !updateProductList.length ? setResultsFound(false) : setResultsFound(true);
        }
        applyFilter();
    }, [inputSearch, products, selectedCategory, subCategory, selectedPrice]);

    useEffect(() =>{
        const fetchData = async() => {
            const resultProducts = await axios.get('/api/products/all');
            const resultProductsData = resultProducts.data;

            const sortResultProductsData = resultProductsData.sort((a,b) => b.createdAt.localeCompare(a.createdAt));
            setProducts(sortResultProductsData);


            //fetch all categorty
            const resultCategory = await axios.get('/api/category/all');
            setCategory(resultCategory.data);

            //fetch all category
            const resultSubCategory = await axios.get('/api/subcategory/all');
            const resultSubCategoryData = resultSubCategory.data;
            setSubCategory(resultSubCategoryData);

        }
        fetchData();
    }, []);


    return (
        <div className='shop_container'>
            <div className='shop_row'>
                <h2 className='shop_title'>SẢN PHẨM</h2>
            </div>
            <div className='shop_row'>
                <div className='shop_col'>
                    <h4 className='shop_filter'> LỌC SẢN PHẨM</h4>

                    <div className='shop_search'>
                        <span className='search_groupTitle'>Search</span>
                        <Search value={inputSearch} changeInput={(e) => setInputSearch(e.target.value)}/>
                    </div>

                    <div className='shop_filterGroup'>
                        <ShopFilter filterResult={filterResult} category={category} subCategory={subCategory} changeChecked={handleChangeChecked} selectedPrice={selectedPrice} changePrice={handleChangePrice}/>
                    </div>
                </div>
                <div className='shop_col'>
                    {resultsFound ? (<ShopProducts list={list}/>) : (<Empty/>)}
                </div>
            </div>
        </div>
    )
}

export default ShopMain
