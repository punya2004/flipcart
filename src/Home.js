import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
                <div className="home__row">
                <Product 
                    id="3245678"
                    title="Men Slim Fit Checkered Casual Shirt"
                    price={110.00}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/452/542/kc0u7bk0/shirt/k/a/a/m-pk19sh09g-surhi-original-imaft8vgvhmhbhsy.jpeg?q=50"
                    />
                    <Product 
                    id="7890654"
                    title="
                    Women Fit and Flare Blue Dress With Mask"
                    price={56.00}
                    rating={4}
                    image="https://rukminim1.flixcart.com/image/452/542/kbfeljk0/dress/h/z/m/m-maxi-3-kd-original-imafss2h5zqzgapy.jpeg?q=50"
                    /> 
                    <Product 
                    id="8905642"
                    title="Women Fit and Flare Blue Dress With Mask"
                    price={550.96}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/452/542/kirr24w0-0/dress/z/u/z/m-md142-oomph-original-imafyhyh7afjrhah.jpeg?q=50"
                    /> 
                </div> 
                <div className="home__row">
                <Product 
                    id="2478094"
                    title="Women Fit and Flare Blue Dress With Mask"
                    price={670.00}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/452/542/k4lmv0w0/gown/m/b/g/na-free-buckel-gown-sdk-fashion-na-original-imafm5df4hbgvwpx.jpeg?q=50"
                    />
                    <Product 
                    id="5708901"
                    title="Women Fit and Flare Blue Dress With Mask"
                    price={95.00}
                    rating={4}
                    image="https://rukminim1.flixcart.com/image/452/542/kj1r53k0-0/dress/m/b/7/l-raaka-skater-pink-104-raaka-original-imafyp2aj8r3vyaf.jpeg?q=50"
                    /> 
                    <Product 
                    id="9086423"
                    title="Women Fit and Flare Blue Dress With Mask"
                    price={150.96}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/452/542/kflftzk0/dress/6/9/q/s-ttj6002188-tokyo-talkies-original-imafwyxmrenzky7v.jpeg?q=50"
                    /> 
                </div> 
                <div className="home__row">
                <Product 
                    id="2478094"
                    title="Women Fit and Flare Blue Dress With Mask"
                    price={210.00}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/452/542/k02qnww0/lehenga-choli/r/t/g/free-mira-3-trilok-fab-original-imaf7gnzkehmp2ce.jpeg?q=50"
                    />
                    <Product 
                    id="5708901"
                    title="Women Fit and Flare Blue Dress With Mask"
                    price={320.00}
                    rating={4}
                    image="https://rukminim1.flixcart.com/image/452/542/kf8kvbk0/gown/v/m/x/na-free-full-sleeve-semi-stitched-manohari-kedar-fab-na-original-imafvq5jzmqngrcu.jpeg?q=50"
                    /> 
                    <Product 
                    id="9086423"
                    title="Women Fit and Flare Blue Dress With Mask"
                    price={420.96}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/452/542/kh5607k0-0/dress/r/4/q/m-dr01-pink-bombay-speed-original-imafx836jd5jfgyh.jpeg?q=50"
                    /> 
                </div> 
               
        </div>
    )
}

export default Home
