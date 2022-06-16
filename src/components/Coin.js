import React from 'react';

//styles
import styles from "./Coin.module.css";

//icons
import Up from "../gif/greenUp.png"
import Down from "../gif/redDown.png"

const Coin = ({name, image, symbol, price, marketCap, priceChange}) => {
    return (
        <div className={styles.container}>
            <img src={image} alt={name}/>
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.price}>$ {price.toLocaleString()}</span>
            <div className={styles.changePrice}>
                <img src={priceChange > 0 ? Up : Down }/>
            <span 
                className={
                    priceChange > 0 ? 
                    styles.greenPriceChange  : 
                     styles.redPriceChange 
                        }>
                 {priceChange.toFixed(2)}%</span>
            </div>
            

            <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;