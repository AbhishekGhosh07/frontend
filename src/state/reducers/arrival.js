const reducer =(state='',action) =>{
    if(action.type=='arrival'){
        return action.payload
    }
    else{
        return state;
    }
}

export default reducer