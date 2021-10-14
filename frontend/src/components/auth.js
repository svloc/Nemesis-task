
export const isAuth = () => {
    if (window !== 'undefined') {
        
        
            if (localStorage.getItem("token")) {
                return true;
            } 
                return false;
           
       
    }
    return false;
    
};
