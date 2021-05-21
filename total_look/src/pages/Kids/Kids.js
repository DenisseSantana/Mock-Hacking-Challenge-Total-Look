import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductsCard/ProductCard.js"

const mockProductsData = {
	"products":[
		{
			"id": "k01",
			"category": "clothes",
			"subcategory": "kids",
			"description": "Unicorn Dress",
			"type":"vestido",
			"img": "https://cdn.shopify.com/s/files/1/1196/7082/products/product-image-1212692739.jpg?v=1595343372",
			"color": "blue",
			"size": "9",
			"price": 299,
			"vistas": 0
		},
		{
			"id": "k02",
			"category": "clothes",
			"subcategory": "kids",
			"description": "Bear Pijamas",
			"type":"pijama",
			"img": "https://cdn.shopify.com/s/files/1/1055/8264/files/Picture1_ab326006-fa61-4d36-8bfe-049be614c602_large.jpg?v=1530716278",
			"color": "withe",
			"size": "M",
			"price": 498,
			"vistas": 0
		},
		{
			"id": "k03",
			"category": "clothes",
			"subcategory": "kids",
			"description": "T-shirts Pack",
			"type":"camisetas",
			"img": "https://images-na.ssl-images-amazon.com/images/I/911fPCnjBUL._AC_UL1500_.jpg",
			"color": "green/black/gray",
			"size": "M",
			"price": 498,
			"vistas": 0
		},
		{
			"id": "k04",
			"category": "clothes",
			"subcategory": "kids",
			"description": "Cotton Hodie",
			"type":"camisetas",
			"img": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQTN374J4IrZc88UjkmED1xQkoAlsqLG1caHw-xqycucxsnwASTX3hsEHR_tnylyDFzzYATbtNm3CAznr9_-NRsjLsyh6ipsV_XaCC2O7uQSsJwI6l19pcocQQ&usqp=CAE",
			"color": "green/black/gray",
			"size": "M",
			"price": 498,
			"vistas": 0
		}
	]
}

// const Kids = () => {
// 	const [products, setProducts] = useState();
// 	const getProducts = ()=> {
// 		let filterProducts = mockProductsData.products.filter(
// 		(item) => item.category === "kids"
// 	);
// 	setProducts(filterProducts);
// 	}
// 	useEffect(() => {
//     getProducts();
//   }, []);
	
// 	return (
// 		<div>
// 			Holi, estás en Kids
// 			{products &&
// 				products.map((product)=>(
// 					<ProductCard 
// 					product={product}
// 				/>
// 			))}
// 		</div>
// 	)
// }

// export default Kids;



const Kids = () => {
	return (
		<div>
			Holi, estás en Kids
			{mockProductsData.products.map((product)=>(
					<ProductCard 
					product={product}
					key={product.id}
				/>
			))}
		</div>
	)
}

export default Kids;