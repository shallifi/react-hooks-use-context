import React, { useState } from "react";


const UserContext = React.createContext();


function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    // const currentUser = {
    //     name: "Duane",
    //     interests: ["React", "JavaScript", "Gardening"],
    // };
    // return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
    return (<UserContext.Provider value={{ user, setUser }}>
        {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };