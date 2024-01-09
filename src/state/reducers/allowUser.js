const reducer =(state=true,action) =>{
    if(action.type=='allowUser'){
        return action.payload
    }
    else{
        return state;
    }
}

export default reducer