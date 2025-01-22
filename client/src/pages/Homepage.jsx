import React from 'react'
import { Link } from "react-router-dom";



const Homepage = () => {
    return (
        <div className="homepage-container">
            {/* Header */}
            <header className="w-full flex justify-between items-center p-6 bg-black shadow-lg text-white">
                <h1 className="text-3xl font-bold text-aquamarine">myBank</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="#features" className="hover:text-orange_(web) text-white">Features</a></li>
                        <li><a href="#about" className="hover:text-orange_(web) text-white">About</a></li>
                        <li><a href="#contact" className="hover:text-orange_(web) text-white">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="flex flex-col items-center text-center mt-12 space-y-6">
                <h2 className="hero-title">Take Control of Your Finances</h2>
                <p className="hero-subtitle">
                    Simplify your expense tracking and achieve financial freedom with myBank.
                </p>
                <button className="hero-button hover:bg-orange_light">
                    Get Started
                </button>

                <Link to="/transactions" className="hero-button hover:bg-orange_light">
                    Go to Transactions
                </Link>
            </section>
        </div>
    )
}

export default Homepage

