/* eslint-disable @typescript-eslint/no-explicit-any */
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data }: any = useSession();
  return (
    <nav className="bg-red-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          MyBrand
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="hover:text-gray-200 transition duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-200 transition duration-200"
          >
            About
          </Link>
          <Link
            href="/products"
            className="hover:text-gray-200 transition duration-200"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-200 transition duration-200"
          >
            Contact
          </Link>
        </div>
        {data ? (
          <div className="flex space-x-4">
            <p>Hello, {data.user?.fullname}</p>
            <button
              className="bg-white text-red-500 py-2 px-4 rounded"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-white text-red-500 py-2 px-4 rounded"
            onClick={() => signIn()}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
