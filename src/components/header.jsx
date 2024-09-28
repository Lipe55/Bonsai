import React from "react"; 
import { bonsai } from "../assets";

export function Header() {
    return (
        <div className="w-full bg-red-500 px-4 py-5 flex justify-between items-center">
            <img src={bonsai} alt="bonsai-logo" />

            <div className="flex space-x-4">
                <h2>Product</h2>
                <h2>Templates</h2>
                <h2>Pricing</h2>
                <h2>Reviews</h2>
            </div>

            <div className="flex space-x-4">
                <button>LOG IN</button>
                <button>START FREE</button>
            </div>
        </div>
    );
}
