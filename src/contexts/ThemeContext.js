import { createContext, useReducer } from "react";
import themeList from "../ThemeData/themeList";

const ThemeContext = createContext();
const lightTheme = themeList.light;
const darkTheme = themeList.dark;

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':

            localStorage.setItem(
                'theme',
                state.theme === lightTheme ? darkTheme : lightTheme
            )
            return {
                theme: state.theme === darkTheme ? lightTheme : darkTheme
            };
        default:
            return state;
    }
};

const ThemeContextProvider = ({ children }) => {

    const getInitTheme = () => {

        const theme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (theme) {
            return theme;
        }

        if (prefersDark) {
            return prefersDark;
        }

        return lightTheme;
    };

    const initState = {
        theme: getInitTheme(),
    };

    const [state, dispatch] = useReducer(themeReducer, initState);

    const value = {
        theme: state.theme,
        toggleTheme: () => {
            dispatch({ type: 'TOGGLE_THEME' })
        },
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
};

export { ThemeContextProvider };
export default ThemeContext;