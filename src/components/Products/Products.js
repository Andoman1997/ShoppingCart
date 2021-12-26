import React from "react";
import styles from "./Products.module.css";
import {
  
  filterCart,
} from "../../redux/Shopping/shopping-actions";
// Redux
import { connect } from "react-redux";
import Product from "./Product/Product";





const Products = ({ products }) => {
 

 

  return (
    <>
    
     <button className={styles.filter}
     
      onClick={() => filterCart()}
    > 
      Filter
    </button>

    <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} product={product}/>
      ))}
    </div>
      
   
    </>
  );
};

const mapStateToProps = (state ) => {
  // console.log('mapStateToProps', state, liked)
  return {
    products: state.shop.products,
    
  };
};

export default connect(mapStateToProps)(Products);
