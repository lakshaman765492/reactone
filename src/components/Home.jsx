import React from 'react'
import vg from "../assets/2.png";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram,} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className="home" id="home">
        <main>
            <h1>TechyStar</h1>
            <p>Solutions to all your problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit non, provident pariatur quisquam sequi eaque, explicabo officiis aliquid ratione veritatis. Est sunt nesciunt, explicabo labore eius porro expedita ipsam sit magnam at fugiat?
            </p>
        </div>
    </div>

    <div className="home3" id="about">
            <div>
                <h1>Who We Are?</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae beatae architecto molestiae mollitia quam rem maxime suscipit, nesciunt tenetur nisi in quisquam minima corrupti. Eveniet sequi est provident sapiente, vero facilis distinctio. Officia eos eius maiores in explicabo facere, animi iusto natus id nostrum ipsa quibusdam labore omnis sint fugiat eaque consequatur soluta nam at ea aliquid magni magnam!</p>
            </div>
        </div>

        <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay:"0.3s",
                    }}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                    </div>
                    
                    <div style={{
                        animationDelay:"0.5s",
                    }}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                    </div>

                    <div style={{
                        animationDelay:"0.7s",
                    }}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                    </div>

                    <div style={{
                        animationDelay:"1s",
                    }}>
                    <AiFillInstagram />
                    <p>Instragram</p>
                    </div>
                </article>
            </div>
        </div>
    </>
  )
}

export default Home
