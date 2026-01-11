import React, { useState } from 'react';

const ApexFirmLandingPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for subscribing! We'll contact you at ${email}`);
        setEmail('');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-transparent rounded-lg flex items-center justify-center">
                                <img src="/apex-firm-logo.png" alt="Apex Firm" className="w-10 h-10" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Apex Firm</span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-10">
                            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
                            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition">About</a>
                            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition">Services</a>
                            <a href="#performance" className="text-gray-700 hover:text-blue-600 font-medium transition">Performance</a>
                            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</a>
                        </div>

                        <div className="hidden md:block">
                            <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                                Investor Login
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-700"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className="md:hidden mt-4 pb-4">
                            <div className="flex flex-col space-y-4">
                                <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
                                <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition">About</a>
                                <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition">Services</a>
                                <a href="#performance" className="text-gray-700 hover:text-blue-600 font-medium transition">Performance</a>
                                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</a>
                                <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-medium w-full">
                                    Investor Login
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="py-16 md:py-24 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Strategic Investments in <span className="text-blue-600">East Africa's</span> Growth
                            </h1>
                            <p className="text-gray-600 text-lg mt-6 mb-8 max-w-lg">
                                Apex Firm is a premier hedge fund based in Kigali, Rwanda, delivering exceptional returns through innovative investment strategies in emerging African markets.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                                <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all">
                                    Explore Opportunities
                                </button>
                                <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition">
                                    Meet Our Team
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/2 relative">
                            <div className="bg-gradient-to-br from-blue-500 to-indigo-700 rounded-2xl p-1 shadow-2xl">
                                <div className="bg-white rounded-2xl p-8">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-bold text-gray-800">Portfolio Performance</h3>
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">+24.7% YTD</span>
                                    </div>
                                    <div className="h-64 bg-gradient-to-b from-blue-50 to-white rounded-xl p-4">
                                        {/* Chart Placeholder */}
                                        <div className="flex items-end h-40 space-x-2 mt-4">
                                            {[40, 65, 80, 60, 90, 75, 100, 85, 70, 95].map((height, index) => (
                                                <div key={index} className="flex-1 flex flex-col items-center">
                                                    <div
                                                        className="w-6 md:w-8 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg"
                                                        style={{ height: `${height}%` }}
                                                    ></div>
                                                    <span className="text-xs text-gray-500 mt-2">Q{index + 1}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-6 grid grid-cols-2 gap-4">
                                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                                            <p className="text-sm text-gray-600">5-Year Return</p>
                                            <p className="text-2xl font-bold text-gray-900">+142%</p>
                                        </div>
                                        <div className="text-center p-4 bg-indigo-50 rounded-lg">
                                            <p className="text-sm text-gray-600">Risk Adjusted</p>
                                            <p className="text-2xl font-bold text-gray-900">1.8 Sharpe</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
                            <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Apex Firm?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            With our headquarters in Kigali, Rwanda, we leverage local expertise and global financial strategies to capitalize on Africa's growth potential.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                            <p className="text-gray-600">
                                Consistently outperforming market benchmarks with our data-driven investment approach and local market insights.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition">
                            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Global & Local Expertise</h3>
                            <p className="text-gray-600">
                                Combining international financial expertise with deep understanding of East African markets and regulatory environments.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition">
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Growth Focus</h3>
                            <p className="text-gray-600">
                                Investing in sectors that drive sustainable economic development while delivering strong returns to our investors.
                            </p>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="mt-16">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Team</h3>
                            <p className="text-gray-600 max-w-xl mx-auto">
                                Meet the experienced professionals driving Apex Firm's success in East African markets.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Robert Mutake</h4>
                                <p className="text-blue-600 font-medium mb-4">Chief Executive Officer</p>
                                <p className="text-gray-600 text-sm">
                                    Leading strategic vision and investment decisions with extensive experience in African financial markets.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Didier Nsengiyumva</h4>
                                <p className="text-indigo-600 font-medium mb-4">Chief Technology Officer</p>
                                <p className="text-gray-600 text-sm">
                                    Driving technological innovation and quantitative strategies with expertise in fintech and data analytics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 md:py-24 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Investment Strategies</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            We employ a diverse range of strategies tailored to capitalize on unique opportunities in East African markets.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="flex items-start mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-white font-bold">01</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Private Equity</h3>
                                    <p className="text-gray-600 mt-2">
                                        Direct investments in high-growth companies across Rwanda and East Africa, with a focus on technology, agriculture, and renewable energy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="flex items-start mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-white font-bold">02</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Market Neutral Strategies</h3>
                                    <p className="text-gray-600 mt-2">
                                        Exploiting pricing inefficiencies in East African financial markets while minimizing exposure to systemic market risks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="flex items-start mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-white font-bold">03</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Quantitative Trading</h3>
                                    <p className="text-gray-600 mt-2">
                                        Algorithmic strategies that leverage big data and machine learning to identify and capitalize on short-term market opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="flex items-start mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-white font-bold">04</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Real Assets & Infrastructure</h3>
                                    <p className="text-gray-600 mt-2">
                                        Investments in tangible assets including real estate, transportation, and energy infrastructure supporting regional development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Section */}
            <section id="performance" className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Performance Highlights</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Our disciplined approach to investment management has delivered consistent results across market cycles.
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold mb-2">24.7%</div>
                                <div className="text-blue-200">Annualized Return (YTD)</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold mb-2">1.8</div>
                                <div className="text-blue-200">Sharpe Ratio</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold mb-2">32%</div>
                                <div className="text-blue-200">5-Year Cumulative Return</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold mb-2">$5M</div>
                                <div className="text-blue-200">Assets Under Management</div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-blue-800">
                            <p className="text-blue-200 italic text-center">
                                "Past performance is not indicative of future results. All investments involve risk including loss of principal."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Connect With Us</h2>
                            <p className="text-gray-600 text-lg">
                                Interested in learning more about investment opportunities with Apex Firm? Reach out to our team in Kigali.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>

                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Our Headquarters</h4>
                                                <p className="text-gray-600">Kigali Heights, KG 7 Ave</p>
                                                <p className="text-gray-600">Kigali, Rwanda</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                                                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Contact Information</h4>
                                                <p className="text-gray-600">+250 788 123 456</p>
                                                <p className="text-gray-600">info@apexfirm.rw</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-10">
                                        <h4 className="font-bold text-gray-900 mb-4">Subscribe to Our Insights</h4>
                                        <form onSubmit={handleSubmit} className="flex">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter your email"
                                                className="flex-grow border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                            <button
                                                type="submit"
                                                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-r-lg font-medium"
                                            >
                                                Subscribe
                                            </button>
                                        </form>
                                        <p className="text-gray-500 text-sm mt-2">Receive quarterly insights on East African markets.</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Inquiry</h3>
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option>Investment Interest</option>
                                            <option>Private Equity</option>
                                            <option>Market Neutral</option>
                                            <option>Quantitative Trading</option>
                                            <option>Real Assets</option>
                                        </select>
                                        <textarea
                                            placeholder="Your Message"
                                            rows="5"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        ></textarea>
                                        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 rounded-lg font-medium hover:shadow-lg transition">
                                            Submit Inquiry
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-8 md:mb-0">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-15 h-15 bg-transparent rounded-lg flex items-center justify-center">
                                    <img src="/apex-firm-logo.png" alt="Apex Firm" className="w-10 h-10" />
                                </div>
                                <span className="text-2xl font-bold">Apex Firm</span>
                            </div>
                            <p className="text-gray-400">Strategic investments for a growing Africa.</p>
                        </div>

                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                        <p>&copy; {new Date().getFullYear()} Apex Firm. All rights reserved.</p>
                        <p className="mt-2">Kigali, Rwanda | Registered with Rwanda Capital Market Authority</p>
                        <p className="mt-2 text-xs">This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ApexFirmLandingPage;
