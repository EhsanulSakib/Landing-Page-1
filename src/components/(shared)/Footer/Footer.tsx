import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter, FaDribbble, FaPeace } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-t from-black/80 to-primary/30 text-white py-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Brand Description */}
                    <div>
                        <h2 className="text-xl font-bold text-white">ORBEACON</h2>
                        <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                            At the intersection of innovation and collaboration, our AI-powered
                            project management platform is crafted to simplify complex workflows,
                            foster effective teamwork, and bring every project vision to life.
                        </p>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">SOLUTION</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li>Third-Party Tools</li>
                            <li>Illustrations</li>
                            <li>Themesberg</li>
                            <li>Bluehost</li>
                            <li>Stock Photos</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">COMPANY</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li>About</li>
                            <li>Premium</li>
                            <li>Blog</li>
                            <li>Affiliate Program</li>
                            <li>Get Coupon</li>
                        </ul>
                    </div>

                    {/* Help & Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">HELP AND SUPPORT</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li>Contact Us</li>
                            <li>Knowledge Center</li>
                            <li>Premium Support</li>
                            <li>Sponsorships</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-3">LEGAL</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>EULA</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 border-t border-gray-600 pt-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-400 text-sm">© 2024 Orbeacon. All rights reserved.</p>
                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <FaXTwitter className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                        <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                        <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                        <FaGithub className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                        <FaPeace className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                        <FaDribbble className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                    </div>
                </div>
            </div>
        </footer>
    );
}
