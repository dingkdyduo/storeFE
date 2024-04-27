import React from "react"
import { useParams } from 'react-router-dom';
import {getFilterProduct} from "../api/product"
import { useState, useEffect, useCallback } from 'react';
import ProductList from "../component/productList"
interface Props {}

const CategoryPage = (props: Props) => {
const {CategoryName} = useParams()



    return <ProductList  categoryName={CategoryName || ""}/>
}

export default CategoryPage