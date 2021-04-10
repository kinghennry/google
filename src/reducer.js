// this is essential what it looks like when the app first loads
export const initialState = {
    term: null,
};

// THis is d functionality that makes an action possibel,in this case whenever a use types in the input field,it will change or set the search term.
export const actionTypes = {
    SET_SEARCH_TERM:"SET_SEARCH_TERM",
}
// the main one
 const reducer = (state, action) => {
  console.log(action)
    
 switch (action.type) {
 case actionTypes.SET_SEARCH_TERM:
     return {
     ...state,
         term: action.term,
         };
     
     default:
    return state;
    }

 }

export default reducer
