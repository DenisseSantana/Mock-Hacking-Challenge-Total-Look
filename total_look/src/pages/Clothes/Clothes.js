import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductsCard/ProductCard.js"
import {
  BrowserRouter as Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import Tops from './Tops/Tops.js'
import Bottoms from './Bottoms/Bottoms.js'
import Coats from './Coats/Coats.js'   
import Sets from './Sets/Sets.js'
import './Clothes.css'


function Clothes() {
	const [kproducts, setKproducts] = useState();
	const getProducts = async()=> {
		let url = 'http://localhost:5000/products';
		let getFetchData = await fetch(url).then((result) => result.json());
		let filterProducts = getFetchData.filter(
		(item) => item.category === "clothes"
		);
		setKproducts(filterProducts);
	}
	useEffect(() => {
		getProducts();
	}, []);
  let match = useRouteMatch();
  return (
    <div>
      {/* <h2>Holi, estás en Clothes</h2>
      <ul>
				<li>
          <Link to={`${match.url}`}>All</Link>
        </li>
        <li>
          <Link to={`${match.url}/tops`}>Tops</Link>
        </li>
				<li>
          <Link to={`${match.url}/bottoms`}>Bottoms</Link>
        </li>
				<li>
          <Link to={`${match.url}/sets`}>Sets</Link>
        </li>
				<li>
          <Link to={`${match.url}/coats`}>Coats</Link>
        </li>
      </ul> */}

      <Switch>
			<Route path={`${match.path}/coats`}>
          <Coats />
        </Route>
				<Route path={`${match.path}/sets`}>
          <Sets />
        </Route>
				<Route path={`${match.path}/bottoms`}>
          <Bottoms />
        </Route>
				<Route path={`${match.path}/tops`}>
          <Tops />
        </Route>
        <Route path={`${match.path}`}>
				<div className='containerCards'>
					{kproducts &&
						kproducts.map((product)=>(
							<ProductCard 
							product={product}
							/>
						))}
		</div>
        </Route>
      </Switch>
    </div>
  );
}


// function AllClothes () {
// 	return(
		
// 	)
// }


export default Clothes;