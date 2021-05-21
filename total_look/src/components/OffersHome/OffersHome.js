import React, { useState, useEffect } from "react";
import "./OffersHome.css";
import bannerHS from "../../assets/bannerHS.png";
import bannerT from "../../assets/bannerT.png";
import bannerB from "../../assets/bannerB.png";
import accesoriesbanner from "../../assets/accesoriesbanner.jpg"
import dressesbanner from "../../assets/dressesbanner.jpg";
import kidsbanner from "../../assets/kidsbanner.jpg";
import shoesbanner from "../../assets/shoesbanner.jpg";
import sportsbanner from "../../assets/sportsbanner.jpg"
import underwearbanner from "../../assets/underwearbanner.jpg"







//import Component Header
//import Component Footer

export const Offers = (props) => {
  /*   const [offer, setOffer] = useState();

    useEffect(() => {
        getOffer();
    },[]);

    const getOffer = async () => {
        const mockOffer = {

        }
        
        setOffer();
    }

  
 */
  const mockProductsOffer = [
    {
      id: "t01",
      category: "clothes",
      subcategory: "tops",
      description: "Casual comfy top ",
      img: "https://aws.glamour.mx/prod/designs/v1/assets/original/141587.jpg",
      color: "white",
      size: "M",
      price: 199,
      offerPrice: 99,
      views: 0,
    },
    {
      id: "t02",
      category: "clothes",
      subcategory: "tops",
      description: "Minimalist shirt ",
      img: "https://i.blogs.es/e0a35f/siete-camisas-que-ademas-de-ser-sustentables-te-dan-un-estilazo-en-tus-videollamadas-en-home-office/1366_2000.jpeg",
      color: "white ",
      size: "M",
      price: 399,
      offerPrice: 149,
      vistas: 0,
    },

    {
      id: "t03",
      category: "clothes",
      subcategory: "tops",
      description: "Oversize b&w stripes shirt ",
      img: "https://static.pullandbear.net/2/photos//2021/V/0/1/p/4240/375/104/4240375104_2_1_8.jpg?t=1616661967529&imwidth=563",
      color: "black & white",
      size: "M",
      price: 299,
      offerPrice: 149,
      views: 0,
    },
    {
      id: "b01",
      category: "clothes",
      subcategory: "bottoms",
      description: "Midi Floral Skirt ",
      img: "https://sonaesierracms-v2.cdnpservers.net/wp-content/uploads/sites/35/2019/09/faldas-midi-estampado-flores-bershka.jpg",
      color: "fuschia",
      size: "M",
      price: 499,
      offerPrice: 249,
      vistas: 0,
    },

    {
      id: "b02",
      category: "clothes",
      subcategory: "bottoms",
      description: "High-rise jeans ",
      img: "https://cache.net-a-porter.com/variants/images/19971654706613727/in/w920_q80.jpg",
      color: "blue",
      size: "M",
      price: 699,
      offerPrice: 349,
      views: 0,
    },
    {
      id: "b03",
      category: "clothes",
      subcategory: "bottoms",
      description: "Black Jeans ",
      img: "https://assets.ajio.com/medias/sys_master/root/ha6/h98/13254387564574/-473Wx593H-460327046-black-MODEL2.jpg",
      color: "black",
      size: "M",
      price: 749,
      offerPrice: 375,
      vistas: 0,
    },
  ];

  const offers = [
    {
      id: "o001",
      description: "2x1 in all Tops ",
      img: " ",
    },
    {
      id: "o002",
      description: "2x1 in all Bottoms ",
      img: " ",
    },

    {
      id: "o003",
      description: "10% OFF at Kids!",
      img: " ",
    },
    {
      id: "o004",
      description: "10% OFF at Accesories!",
      img: " ",
    },

    {
      id: "o005",
      description: " 10% OFF at Sports",
      img: " ",
    },
    {
      id: "o006",
      description: " 15% OFF at Shoes!",
      img: " ",
    },
    {
      id: "o007",
      description: " Other random offer",
      img: " ",
    },
    {
      id: "o008",
      description: " Random Offer 8",
      img: " ",
    },
  ];

  return (
    <div className="offerList">
      <img className="banner" src={bannerHS} />
      <img className="bannerOffers" src={bannerT} />
      <img className="bannerOffers" src={bannerB} />
      <img className="bannerOffers" src={accesoriesbanner} />
      <img className="bannerOffers" src={dressesbanner} />
      <img className="bannerOffers" src={kidsbanner} />
      <img className="bannerOffers" src={shoesbanner} />
      <img className="bannerOffers" src={underwearbanner} />
      <img className="bannerOffers" src={sportsbanner} />




      {offers &&
        offers.map((item) => (
          <div key={item.id} className="offerContainer">
            <h3 className="text-black">{item.description}</h3>
            <p className="text-black">{item.img}</p>
          </div>
        ))}
    </div>
  );
};
