const intialistate={
    user:[],
    count:0,
    n_books:10
}

const nameReducer =(state=intialistate,action)=>
{
    switch(action.type)
    {
        case 'SET_USER':
            return{
             ...state,
             user:[...state.user, action.payload.user],
             count:state.count+1
            };
        case 'DECREMENT':
            return{
                ...state,
                n_books:state.n_books-1
            }
        default:
            return state;
    }
}
export default nameReducer;