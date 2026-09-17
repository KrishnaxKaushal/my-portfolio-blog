export default function AIMLJourney() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <article className="max-w-3xl mx-auto">

        <p className="text-blue-400 mb-4">
          My Learning Journey
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          My Journey into AI & Machine Learning
        </h1>

        <p className="text-gray-400 text-lg leading-8 mb-8">
          My experience learning Python, Machine Learning, and
          Artificial Intelligence as a BCA student.
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-8">

          <p>
            I started my journey into programming with Python.
            At first, understanding programming concepts was difficult,
            but regular practice helped me improve.
          </p>

          <p>
            After learning Python basics, I started exploring libraries
            such as NumPy, Pandas, and Matplotlib.
          </p>

          <p>
            I then moved towards Machine Learning and started learning
            concepts such as regression, classification, KNN,
            decision trees, and clustering.
          </p>

          <p>
            My goal is to continue improving my skills, build real-world
            projects, and eventually work as a software or AI/ML professional.
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