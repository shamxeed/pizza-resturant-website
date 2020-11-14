import React from 'react';
import { ProductBtn,
         ProductCard, 
         ProductDesc, 
         ProductHeading, 
         ProductImg, 
         ProductInfo, 
         ProductPrice, 
         ProductsContainer, 
         ProductsWrapper, 
         ProductTItle 
    } from './ProductsElements';

const Product = ({heading, data}) => {

    return(
        <ProductsContainer>
            <ProductHeading>{heading}</ProductHeading>
            <ProductsWrapper>
                {data.map((product, index) => {
                    return(
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo >
                                <ProductTItle>{product.name}</ProductTItle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductBtn>{product.button}</ProductBtn>
                            </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductsWrapper>
        </ProductsContainer>
    );
};

export default Product;