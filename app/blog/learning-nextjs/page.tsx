export default function LearningNextJS() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <article className="max-w-3xl mx-auto">

        <p className="text-blue-400 mb-4">
          Web Development
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Learning Next.js
        </h1>

        <p className="text-gray-400 text-lg leading-8 mb-8">
          My experience learning Next.js and building my personal
          portfolio website.
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-8">

          <p>
            I started learning Next.js to understand how modern
            React applications are built and structured.
          </p>

          <p>
            While building my portfolio, I learned about pages,
            components, routing, Tailwind CSS, and the Next.js
            development server.
          </p>

          <p>
            Building this project has helped me understand how
            different parts of a web application work together.
          </p>

          <p>
            I plan to continue learning Next.js and eventually
            build full-stack applications with databases,
            authentication, and APIs.
          </p>

        </div>

        <a
          href="/blog"
          className="inline-block mt-10 text-blue-400 hover:text-blue-300"
        >
          ← Back to Blog
        </a>

      </article>
    </main>
  );
}