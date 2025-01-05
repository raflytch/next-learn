import Link from "next/link";
import NotFoundImage from "../../public/404.png";
import Image from "next/image";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
        <Image
          src={NotFoundImage}
          alt="404"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
      <h1 className="text-6xl sm:text-7xl md:text-9xl font-extrabold text-blue-600 mt-4">
        404
      </h1>
      <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center">
        Page Not Found
      </h2>
      <p className="mt-2 text-base sm:text-lg md:text-xl text-gray-600 text-center">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-6">
        <Link
          href="/"
          className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
