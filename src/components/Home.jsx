import React, { useState } from "react";
import Header from "./Header";
import ScreenManager from "./ScreenManager";
import { Provider } from '../context/Context';
import { DASHBOARD_SCREEN } from "../shared/constants/screenNames";

const Home = () => {
    const [actualPage, setActualPage] = useState(DASHBOARD_SCREEN);

    const redirect = (screenName) => {
        setActualPage(screenName);
    };

    return (
        <Provider value={{ actualPage, redirect }}>
            <Header />
            <ScreenManager />
        </Provider>
    );
};

export default Home;
