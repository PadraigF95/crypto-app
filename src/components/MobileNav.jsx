import { Link } from "react-router-dom";

export default function MobileNav() {
  return <div className="md:hidden">
      <Link to="/" className="pl-4">
                <button id="home-button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded md:px-8">Home</button>
            </Link>
  </div>;
}
