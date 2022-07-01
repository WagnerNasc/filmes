import { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [ favorites, setFavorites ] = useState();

    useEffect(() => {

        function loadFavorites() {
            // const myList = localStorage.getItem('filmes') || [];

            // console.log(myList);
            setFavorites(1);


            
            // if(myList.length > 0) {
            //     setFavorites(1);
            // } else {
            //     setFavorites(1);
            // }

        }

        loadFavorites();

    }, [])

    return(
        <AuthContext.Provider 
            value= {{ 
                favorites,
                setFavorites
            }}
        >

            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;