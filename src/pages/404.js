import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <section className="flex items-center h-full p-16">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-400">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              href="/"
              rel="noopener noreferrer"
              className="font-semibold rounded flex justify-center items-center gap-5 btn btn-outline btn-accent text-center"
            >
              <BiArrowBack />
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
