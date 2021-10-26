import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();



const AppProvider = ({children})=>{
    const [users,setUsers] = useState(JSON.parse(localStorage.getItem('allUser'))||[]);

    const getUser =()=>{

        // const users = JSON.parse(localStorage.getItem('allUser'));
        return users;
    }
    // console.log(users);
    const addUser = (value) => {
        const updatedUsers = [...users, value];
        setUsers(updatedUsers);
        //BUG: when using users, the data updates after the function executes.
        // WHY? God knows!
        localStorage.setItem('allUser',JSON.stringify(updatedUsers));
    };
    return (<AppContext.Provider value={{addUser,getUser}}>{children}</AppContext.Provider> )
}

const useAuthContext=()=>{
    return useContext(AppContext);
};

export{AppProvider, useAuthContext};