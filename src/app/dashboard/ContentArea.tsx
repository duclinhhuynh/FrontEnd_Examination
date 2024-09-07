"use client"; // fix useAppContext
import React from "react";
import TopBar from "./Components/TopBar";
import AllProject from "./Components/AllProject";
import { useAppContext } from "../ContextApi";
export default function ContentArea() {
    const {
        showSideBarObject: { showSideBar },
    } = useAppContext();
    return (
        <div className="w-full h-full p-3 bg-[#1A1D21]">
            <TopBar />
            <AllProject/>
        </div>
    );

    function SoftLayer() {
        return (
            <div className="w-full h-full fixed top-0 right-0 bg-black opacity-30"></div>
        );
    }
}