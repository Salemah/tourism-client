import React, { createContext } from 'react';
import useFirebase from '../Hook/Usefirebase';

export const  Authcontext = createContext();

const Authprovider = ({children}) => {
    const allcontext = useFirebase();
    return (
        <Authcontext.Provider  value={allcontext}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;