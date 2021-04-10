import React from 'react'
import "../css/Searchpage.css"
import { useStateValue } from "../StateProvider"
import useGoogleSearch from "../useGoogleSearch"
import { Link } from "react-router-dom"
import Search from "../pages/Search"
import { FiSearch,FiMoreVertical } from "react-icons/fi"
import {MdDescription} from "react-icons/md"
import { BiImages,BiMap } from "react-icons/bi"
import { MdLocalOffer } from "react-icons/md"
// https://developers.google.com/custom-search/v1/using_rest
// https://cse.google.com/cse/create/new
// d94cc5a42bbccaf4f
function SearchPage() {
    const [{ term }, dispatch] = useStateValue()
    const { data } = useGoogleSearch(term)
    
    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="ggole" />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons/>
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft fx">
                            <div className="searchPage__option">
                                <FiSearch />
                                <Link to="/">
                                    All
                                </Link>
                            </div>
                            <div className="searchPage__option">
                               <MdDescription />
                                <Link to="/">
                                   News
                                </Link>
                            </div>
                            <div className="searchPage__option">
                               <BiImages />
                                <Link to="/">
                                    Images
                                </Link>
                            </div>
                            {/* <div className="searchPage__option">
                                <MdLocalOffer/>
                                <Link to="/">
                                   Shopping
                                </Link>
                            </div> */}
                            <div className="searchPage__option">
                                <BiMap />
                                <Link to="/">
                                    Maps
                                </Link>
                            </div>
                            <div className="searchPage__option">
                                <FiMoreVertical />
                                <Link to="/">
                                    More
                                </Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight none fx">
                                 <div className="searchPage__option">
                                <Link to="/searchpage">
                                Settings
                                </Link>
                        </div>
                        <div className="searchPage__option">
                                <Link to="/searchpage">
                              Tools
                                </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {term && (
                 <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                      About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}        
                    </p>
                    {data?.items.map(item => {
                        return (
                        <div className="searchPage__result">
                            <a className="searchPage__resultLink" href={item.link}>
                                   {item.pagemap?.cse_image?.length > 0 &&
                                    item.pagemap?.cse_image[0]?.src && (
                                    <img src={item.pagemap?.cse_image[0]?.src} className="searchPage__resultImage"/>)}
                                    {item.displayLink}
                            </a>
                            <a className="searchPage__resultTitle" href={item.link}>
                                <h2>{ item.title}</h2>
                            </a>
                            <p className="searchPage__resultSnippet">
                                {item.snippet}
                            </p>
                        </div>

                            )
                        }
                    )
                        
                    }
                </div>
            )}
                
         </div>
    )
}

export default SearchPage
