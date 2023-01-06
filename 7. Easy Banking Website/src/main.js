import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Services from "./components/Services";
import Articles from "./components/Articles";
import Footer from "./components/Footer";


export default function App () {
    return (
        <>
        <Header/>
        <Landing />
        
        <Services />
        <Articles/>
        <Footer />
        </>

    )
}