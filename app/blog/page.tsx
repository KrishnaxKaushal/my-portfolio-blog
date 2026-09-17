import Link from "next/link";

export default function Blog() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-5xl mx-auto">
        <Link
         href="/"
        className="inline-block mb-8 text-blue-400 hover:text-blue-300"
         >
         ← Back to Portfolio
        </Link>

        <h1 className="text-5xl font-bold mb-4">
          My Blog
        </h1>

        <p className="text-gray-400 text-lg mb-12">
          Thoughts, tutorials, projects, and my learning journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <article className="border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">

            <h2 className="text-2xl font-bold mb-3">
              My Journey into AI & Machine Learning
            </h2>

            <p className="text-gray-400 mb-5">
              My experience learning Python, machine learning,
              and artificial intelligence as a BCA student.
            </p>

            <a
            href="/blog/ai-ml-journey"
            className="text-blue-400 hover:text-blue-300"
            >
             Read More →
            </a>

          </article>

          <article className="border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">

            <h2 className="text-2xl font-bold mb-3">
              Learning Next.js
            </h2>

            <p className="text-gray-400 mb-5">
              What I learned while building my first portfolio
              website using Next.js and Tailwind CSS.
            </p>

            <button className="text-blue-400 hover:text-blue-300">
            <a
              href="/blog/learning-nextjs"
              className="text-blue-400 hover:text-blue-300"
            >
              Read More →
            </a>
            </button>

          </article>

        </div>

      </div>

    </main>
  );
}