export const setUser=(userObj)=>{
    return{
        type:'SET_USER',
        payload:{
            user:userObj,
        }
    }
}