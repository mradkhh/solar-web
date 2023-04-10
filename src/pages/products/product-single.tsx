import {FC, useEffect} from 'react';
import RootLayout from "../../layout/rootLayout";
import Characteristic from "./components/characteristic";
import {useParams} from "react-router-dom";
import {useFetch} from "../../services";
import styles from './product-single.module.scss';


const ProductSingle:FC = () => {

    const { id }  = useParams()
    const { data, fetchData, isLoading, error } = useFetch(`products/${id}/`, 'get')

    useEffect(() => {
        console.log(data)
        fetchData()
    }, [])
  return (
    <RootLayout>
        <Characteristic/>
    </RootLayout>
  );
};

export default ProductSingle;