import { userState, createContext } from 'react';

export const UserContext = createContext({});

function UserProvider({children}) {
    const [countFavorites, setCountFavorites] = userState('');

    return(
        <UserContext.Provider values={{ countFavorites, setCountFavorites }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;