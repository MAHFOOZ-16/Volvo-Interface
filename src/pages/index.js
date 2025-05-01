// src/pages/index.js
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/global.css"
import volvoLogo from "../images/volvo.png"
import heroImage from "../images/volvo-construction-hero.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Volvo Construction Equipment - Sweden" />
      <div className="volvo-construction-page">
        <header className="header">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="mr-8">
                <img src={volvoLogo} alt="Volvo Logo" className="h-6" />
              </Link>
              <div className="header-title">
                <h1 className="text-lg font-medium">Construction Equipment</h1>
                <p className="text-sm">Sweden</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="phone-number flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+46 (0) 16 15 10 00</span>
              </div>
              <div className="language-selector flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <span>Change site/language</span>
              </div>
              <div className="dealer-finder flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Find a dealer</span>
              </div>
              <div className="login flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>Volvo Login</span>
              </div>
            </div>
          </div>
          <div className="search-container mx-auto px-4 flex justify-end pb-4">
            <div className="search-box w-64 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
        </header>

        <nav className="main-nav bg-gray-200">
          <div className="container mx-auto px-4">
            <ul className="flex justify-between py-4">
              <li className="nav-item">
                <Link to="/products" className="font-medium">
                  PRODUCTS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/gear" className="font-medium">
                  GEAR
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/spare-parts" className="font-medium">
                  SPARE PARTS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="font-medium">
                  SERVICES
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/electric-powered-construction"
                  className="font-medium"
                >
                  ELECTRIC POWERED CONSTRUCTION
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="font-medium">
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-us" className="font-medium">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <section className="hero relative h-screen bg-black">
          <div className="hero-image absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Volvo Construction Equipment in action"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <div className="hero-content relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-32">
            <h2 className="text-white text-6xl font-bold mb-6">
              MADE FOR THE WILD
            </h2>
            <p className="text-white text-xl max-w-2xl mb-8">
              Built for the toughest conditions, with the strength and
              efficiency of a beast, Volvo's new articulated haulers are here.
            </p>
            <div>
              <Link
                to="/more-information"
                className="bg-white text-black px-6 py-3 inline-flex items-center"
              >
                More information
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
