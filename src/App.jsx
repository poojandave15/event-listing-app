import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing screens
import HomeScreen from "./screens/HomeScreen";
import ListingScreen from "./screens/ListingScreen";
import ErrorScreen from "./screens/ErrorScreen";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/listing/:category" element={<ListingScreen />} />
                <Route path="*" element={<ErrorScreen />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
