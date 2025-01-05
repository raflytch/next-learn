import Link from "next/link";
import NotFoundImage from "../../public/404.png";
import Image from "next/image";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Image src={NotFoundImage} alt="404" width={500} height={500} />
      <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
      <h2 className="mt-4 text-3xl font-bold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-600">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-6">
        <Link
          href={"/"}
          className="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
