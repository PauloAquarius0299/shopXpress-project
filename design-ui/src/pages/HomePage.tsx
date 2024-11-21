import { useEffect, useState } from "react";
import { logout, selectedUser } from "../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux/hook";
import HeaderComponent from '../features/products/components/HeaderComponent';
import ProductComponent from '../features/products/components/ProductComponent';
import { getProducts } from "../features/products/productSlice";

const HomePage = () => {

  const dispatch = useAppDispatch();

  const {cart, products} = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [])

  return (
    <div>
      <HeaderComponent />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', justifyContent: 'center', alignItems: 'center', marginTop: '48px'}}>
        {products.length > 0 && products.map((product) =>
          <ProductComponent key={product._id} product={product} />
        )}
      </div>
    </div>
  )
}

export default HomePage
