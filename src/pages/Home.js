import React from 'react'
import "../css/Home.css"
import { Link } from "react-router-dom"
import {Avatar} from "@material-ui/core"
import {MdApps} from "react-icons/md"
import Search from "../pages/Search"
import img from "../images/pexels-clem-onojeghuo-375882.jpg"

function Home() {
    return (
        <div className="home fx fc">
            <div className="home__header fx sb ai">
                <div className="home__headerLeft">
                    <Link to="/" className="home__linkMobile active">
                        ALL
                    </Link>
                    <Link className="home__linkMobile" to="/">
                        IMAGES
                    </Link>

                   <Link className="home__link" to="/">About</Link> 
                    <Link className="home__link" to="/">
                        Store
                    </Link>
                </div>
                <div className="home__headerRight fx ai sb">
                 <Link className="home__link" to="/">Gmail</Link> 
                    <Link className="home__link" to="/">
                        Images
                    </Link>
                    <Avatar className="avatar" src={img}/>
                    <MdApps className="headerRightIcon"/>
                </div>
            </div>
            <div className="home__body fx fc ">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
                <div className="home__inputContainer">
                    <Search hideButtons/>
                </div>
                 <center className="homeBody__text">
                    <h4>Google Offered in : </h4>
                    <a href="https://www.google.com/search?client=opera&q=english&sourceid=opera&ie=UTF-8&oe=UTF-8">English</a>
                    <a href="https://www.google.com/search?client=opera&q=spanish&sourceid=opera&ie=UTF-8&oe=UTF-8">Spanish</a>
                    <a href="https://www.google.com/search?client=opera&q=chinese&sourceid=opera&ie=UTF-8&oe=UTF-8">Chinese</a>
                    <a href="https://www.google.com/search?client=opera&q=arab&sourceid=opera&ie=UTF-8&oe=UTF-8">Arab</a>
                </center>
            </div>
        </div>
    )
}

export default Home
