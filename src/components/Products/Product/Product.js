import React, {useState} from "react";
import styles from "./Product.module.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
// Redux
import { connect } from "react-redux";
import {
  likedCart,
  removeCart,
} from "../../../redux/Shopping/shopping-actions";



const Product = ({ product, removeCart, likedCart,liked, payload }) => {

  const [isFilled, setIsFilled] = useState(false);

  
  const toggleFilledIcon = () => {
    setIsFilled(!isFilled) 
  }
 
  return (
    <>
       

    <div className={styles.product}>
      <img
        className={styles.product__image}
        src={product.image}
        alt={product.title}
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{product.title}</p>
        <p className={styles.details__desc}>{product.description}</p>
        <p className={styles.details__price}>$ {product.price}</p>
      </div>

      <div className={styles.product__buttons}>
        <IconButton onClick={toggleFilledIcon}>
          { isFilled ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
        </IconButton>
        
        <button
          onClick={() => removeCart(product.id)}
          className={`${styles.buttons__btn} ${styles.buttons__delete}`}
        >
        Delete
        </button>
      </div>
    </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
   
    removeCart: (id) => dispatch(removeCart(id)),
    likedCart: (liked) => dispatch(likedCart(liked)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
