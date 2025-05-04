// src/pages/index.js
import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/global.css"
import volvoLogo from "../images/volvo-logo.svg"
import heroImage from "../images/volvo-construction-hero.jpg"

const IndexPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <Layout>
      <SEO title="Volvo Construction Equipment - Sweden" />
      <div className="volvo-construction-page">
        <header className="header">
          <div className="container mx-auto px-4 py-4">
            {/* Desktop Header */}
            <div className="hidden md:flex justify-between items-center">
              <div className="flex items-center">
                <Link to="/" className="mr-8">
                  <img src={volvoLogo} alt="Volvo Logo" className="h-6" />
                </Link>
                <div className="header-title">
                  <h1 className="text-lg font-medium">
                    Construction Equipment
                  </h1>
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
                  <span className="hidden lg:inline">+46 (0) 16 15 10 00</span>
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
                  <span className="hidden lg:inline">Change site/language</span>
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
                  <span className="hidden lg:inline">Find a dealer</span>
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
                  <span className="hidden lg:inline">Volvo Login</span>
                </div>
              </div>
            </div>

            {/* Mobile Header */}
            <div className="flex md:hidden justify-between items-center">
              <Link to="/" className="flex items-center">
                <img src={volvoLogo} alt="Volvo Logo" className="h-5" />
                <div className="header-title ml-4">
                  <h1 className="text-base font-medium">
                    Construction Equipment
                  </h1>
                  <p className="text-xs">Sweden</p>
                </div>
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 bg-white shadow-lg rounded-md p-4 z-50">
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
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
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
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
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
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
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
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

                <div className="mt-4">
                  <ul className="space-y-2">
                    <li>
                      <Link to="/products" className="block font-medium py-2">
                        PRODUCTS
                      </Link>
                    </li>
                    <li>
                      <Link to="/gear" className="block font-medium py-2">
                        GEAR
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/spare-parts"
                        className="block font-medium py-2"
                      >
                        SPARE PARTS
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="block font-medium py-2">
                        SERVICES
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/electric-powered-construction"
                        className="block font-medium py-2"
                      >
                        ELECTRIC POWERED CONSTRUCTION
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us" className="block font-medium py-2">
                        ABOUT US
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact-us" className="block font-medium py-2">
                        CONTACT US
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="search-container mx-auto px-4 flex justify-end pb-4">
            <div className="search-box w-full md:w-64 relative">
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

        {/* Desktop Navigation */}
        <nav className="main-nav bg-gray-200 hidden md:block">
          <div className="container mx-auto px-4">
            <ul className="flex flex-wrap justify-between py-4">
              <li className="nav-item text-center px-2">
                <Link
                  to="/products"
                  className="font-medium text-sm lg:text-base"
                >
                  PRODUCTS
                </Link>
              </li>
              <li className="nav-item text-center px-2">
                <Link to="/gear" className="font-medium text-sm lg:text-base">
                  GEAR
                </Link>
              </li>
              <li className="nav-item text-center px-2">
                <Link
                  to="/spare-parts"
                  className="font-medium text-sm lg:text-base"
                >
                  SPARE PARTS
                </Link>
              </li>
              <li className="nav-item text-center px-2">
                <Link
                  to="/services"
                  className="font-medium text-sm lg:text-base"
                >
                  SERVICES
                </Link>
              </li>
              <li className="nav-item text-center px-2">
                <Link
                  to="/electric-powered-construction"
                  className="font-medium text-sm lg:text-base"
                >
                  ELECTRIC POWERED
                  <br className="hidden xl:block" /> CONSTRUCTION
                </Link>
              </li>
              <li className="nav-item text-center px-2">
                <Link
                  to="/about-us"
                  className="font-medium text-sm lg:text-base"
                >
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item text-center px-2">
                <Link
                  to="/contact-us"
                  className="font-medium text-sm lg:text-base"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <section className="hero relative h-screen md:h-[70vh] lg:h-screen bg-black">
          <div className="hero-image absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Volvo Construction Equipment in action"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <div className="hero-content relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-16 md:pb-24 lg:pb-32">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              MADE FOR THE WILD
            </h2>
            <p className="text-white text-lg md:text-xl max-w-xs md:max-w-lg lg:max-w-2xl mb-6 md:mb-8">
              Built for the toughest conditions, with the strength and
              efficiency of a beast, Volvo's new articulated haulers are here.
            </p>
            <div>
              <Link
                to="/more-information"
                className="bg-white text-black px-4 py-2 md:px-6 md:py-3 inline-flex items-center text-sm md:text-base"
              >
                More information
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5 ml-2"
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
