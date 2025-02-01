import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>

        <h2 className="text-3xl font-semibold text-gray-700">Page Not Found</h2>

        <p className="text-lg text-gray-600 max-w-md">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
      <div className="mt-12">
        <Image
          src="/404-illustration.svg"
          alt="404 Illustration"
          width={256}
          height={256}
          className="w-64 h-64"
        />
      </div>
    </div>
  );
}
