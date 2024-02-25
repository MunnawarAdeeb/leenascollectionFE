import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/esm/Carousel'; 

export default function MyCarousel() { 
    return ( 
        <div style={{ display: 'block', width: "100%", padding: 30 }}> 
            <h4>Welcome to The Leenas Collection - Your Ultimate Destination for Stylish Women's Clothing</h4> 
            <Carousel> 
                <Carousel.Item interval={1500}> 
                    <img 
                        className="d-block w-100"
                        src='https://res.cloudinary.com/dde87zohi/image/upload/v1708513040/cld-sample.jpg'
                        alt="Image One"
                    /> 
                    <Carousel.Caption> 
                        <h3>Trendy Outfits</h3> 
                        <p>Discover our latest collection of fashionable attire.</p> 
                    </Carousel.Caption> 
                </Carousel.Item> 
                <Carousel.Item interval={1500}> 
                    <img 
                        className="d-block w-100"
                        src='https://res.cloudinary.com/dde87zohi/image/upload/v1708513014/samples/people/bicycle.jpg'
                        alt="Image Two"
                    /> 
                    <Carousel.Caption> 
                        <h3>Elegant Styles</h3> 
                        <p>Explore our elegant range of clothing that complements your style.</p> 
                    </Carousel.Caption> 
                </Carousel.Item> 
                <Carousel.Item interval={1500}> 
                    <img 
                        className="d-block w-100"
                        src='https://res.cloudinary.com/dde87zohi/image/upload/v1708513010/samples/landscapes/girl-urban-view.jpg'
                        alt="Image Three"
                    /> 
                    <Carousel.Caption> 
                        <h3>Chic Designs</h3> 
                        <p>Embrace chic designs that redefine fashion.</p> 
                    </Carousel.Caption> 
                </Carousel.Item>
            </Carousel> 
        </div> 
    ); 
}
