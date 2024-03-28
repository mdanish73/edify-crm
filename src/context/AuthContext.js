import { createContext } from "react";
import axios from "axios";
import { useQuery } from 'react-query';

const fetchUser = () => {
    var response = axios.get('/api/auth/profile');
    return response.data.message;
};

export const AuthContext = createContext();

const Context = ({ children }) => {
    var { data, reFetch }= useQuery('session', fetchUser);

    return (
        <AuthContext.Provider value={{ user: data || null, reFetch }}>
            {children}
        </AuthContext.Provider>
    )
};

export default Context;