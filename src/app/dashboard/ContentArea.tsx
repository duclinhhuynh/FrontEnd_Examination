"use client"; // fix useAppContext
import React from "react";
import TopBar from "./Components/TopBar";
import { useAppContext } from "../ContextApi";
export default function ContentArea() {
    const {
        showSideBarObject: { showSideBar },
    } = useAppContext();
    return (
        <div className="w-full h-full bg-slate-50 p-3">
            <TopBar />

        </div>
    );

    function SoftLayer() {
        return (
            <div className="w-full h-full fixed top-0 right-0 bg-black opacity-30"></div>
        );
    }
}