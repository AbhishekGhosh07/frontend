const reducer =(state='',action) =>{
    if(action.type=='departure'){
        return action.payload
    }
    else{
        return state;
    }
}

export default reducer