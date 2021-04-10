import React,{useState} from 'react'
import "../css/Search.css"
import { BsMic } from "react-icons/bs"
import { FiSearch } from "react-icons/fi"
import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { useStateValue } from "../StateProvider"
import {actionTypes} from '../reducer'
function Search({ hideButtons = false }) {
    const [{}, dispatch]= useStateValue()
    const [input, setInput] = useState('')
    const history = useHistory()
    const search = (e) => {
        e.preventDefault()

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term:input
        })
        // send the input value to the searchpage
        history.push("/searchpage")
    }
    return (
        <form className="search">
            <div className="search__input fx ai">
                <FiSearch className="search__inputIcon" />
                <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
                <BsMic className="search__inputIcon" />
            </div>
            {!hideButtons ? (
        <div className="search__buttons fx jc">
                <Button type="submit" onClick={search} className="btn"  variant="outlined">Google Search</Button>
                <Button className="btn" variant="outlined">I'm Feeling Lucky</Button>
            </div>
            ): (
             <div className="search__buttons fx jc">
                <Button type="submit" onClick={search} className="btn hidden"  variant="outlined">Google Search</Button>
                <Button className="btn hidden" variant="outlined">I'm Feeling Lucky</Button>
            </div>   
            ) }
            
        </form>
    )
}

export default Search
