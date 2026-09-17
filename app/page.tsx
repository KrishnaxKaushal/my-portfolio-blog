import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen animated-bg text-white">

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></div>
       <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">
          Krishna<span className="text-blue-500">.</span>
        </h1>

        <div className="flex gap-3 md:gap-6 text-gray-300 text-sm md:text-base">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="/blog">Blog</a>
        </div>
      </nav>

      {/* Hero Section */}
<section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6">

  <p className="text-blue-400 text-lg md:text-xl mb-4">
    👋 Hello, I&apos;am
  </p>

  <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
    Krishna Kaushal
  </h1>

  <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
    BCA Student | AI & ML Enthusiast
  </h2>

  <p className="max-w-2xl text-gray-400 text-lg md:text-xl leading-8 mb-10">
    I enjoy building projects with Python, Java, Machine Learning,
    and modern web technologies. I&apos;am constantly learning and
    improving my skills to become a better developer.
  </p>

  <div className="mb-8">
  <Image
    src="/profile.png"
    alt="Krishna Kaushal"
    width={144}
    height={144}
    className="w-36 h-36 rounded-full object-cover border-4 border-blue-500 shadow-lg"
  />
   </div>

</section>

      {/* About Section */}
<section
  id="about"
  className="py-20 px-10 max-w-5xl mx-auto"
>
  <h2 className="text-4xl font-bold mb-8">
    About Me
  </h2>

  <div className="text-gray-400 text-lg leading-8 space-y-4">
    <p>
      Hello! I&apos;am Krishna Kaushal, a BCA student with a strong
      interest in Artificial Intelligence and Machine Learning.
    </p>

    <p>
      I&apos;am currently learning programming, Java, web development,
      databases, and machine learning. I enjoy building projects
      and improving my technical skills.
    </p>

    <p>
      My goal is to become a skilled software or AI/ML professional
      and work on meaningful technology projects.
    </p>
  </div>
</section>

{/* Skills Section */}
<section id="skills" className="py-20 px-10 max-w-5xl mx-auto">
  <h2 className="text-4xl font-bold mb-10">Skills</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    <div className="border border-gray-700 p-6 rounded-xl hover:border-blue-500 transition">
      <h3 className="text-xl font-bold mb-3">Programming</h3>
      <p className="text-gray-400">
        Java, Python, C
      </p>
    </div>

    <div className="border border-gray-700 p-6 rounded-xl hover:border-blue-500 transition">
      <h3 className="text-xl font-bold mb-3">Web Development</h3>
      <p className="text-gray-400">
        HTML, CSS, JavaScript, Next.js
      </p>
    </div>

    <div className="border border-gray-700 p-6 rounded-xl hover:border-blue-500 transition">
      <h3 className="text-xl font-bold mb-3">AI & Machine Learning</h3>
      <p className="text-gray-400">
        Python, Pandas, NumPy, Machine Learning
      </p>
    </div>

    <div className="border border-gray-700 p-6 rounded-xl hover:border-blue-500 transition">
      <h3 className="text-xl font-bold mb-3">Data Visualization</h3>
      <p className="text-gray-400">
        Matplotlib, Pandas
      </p>
    </div>

    <div className="border border-gray-700 p-6 rounded-xl hover:border-blue-500 transition">
      <h3 className="text-xl font-bold mb-3">Database</h3>
      <p className="text-gray-400">
        SQL, MySQL
      </p>
    </div>

    <div className="border border-gray-700 p-6 rounded-xl hover:border-blue-500 transition">
      <h3 className="text-xl font-bold mb-3">Tools</h3>
      <p className="text-gray-400">
        Git, GitHub, VS Code
      </p>
    </div>

  </div>
</section>

{/* Projects Section */}
<section
  id="projects"
  className="py-20 px-10 max-w-5xl mx-auto"
>
  <h2 className="text-4xl font-bold mb-10">
    My Projects
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Project 1 */}
    <div className="border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
      <h3 className="text-2xl font-bold mb-3">
        Personal Portfolio
      </h3>

      <p className="text-gray-400 mb-5">
        A personal portfolio website built using Next.js and Tailwind CSS
        to showcase my skills, projects, and learning journey.
      </p>

      <div className="flex gap-3 flex-wrap mb-5">
        <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
          Next.js
        </span>

        <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
          React
        </span>

        <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
          Tailwind CSS
        </span>
      </div>

      <button className="text-blue-400 hover:text-blue-300">
        View Project →
      </button>
    </div>


    {/* Project 2 */}
    <div className="border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
      <h3 className="text-2xl font-bold mb-3">
        AI Resume Analyzer
      </h3>

      <p className="text-gray-400 mb-5">
        An AI-based project designed to analyze resumes and provide
        useful insights using natural language processing techniques.
      </p>

      <div className="flex gap-3 flex-wrap mb-5">
        <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
          Python
        </span>

        <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
          NLP
        </span>

        <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
          Machine Learning
        </span>
      </div>

      <button className="text-blue-400 hover:text-blue-300">
        View Project →
      </button>
    </div>


    {/* Project 3 */}
    <div className="border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
      <h3 className="text-2xl font-bold mb-3">
        Café Bloom
      </h3>

      <p className="text-gray-400 mb-5">
        A modern café website created to showcase a café, its menu,
        atmosphere, and online presence.
      </p>

      <div className="flex gap-3 flex-wrap mb-5">
        <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
          HTML
        </span>

        <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
          CSS
        </span>

        <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
          JavaScript
        </span>
      </div>

     <a
  href="https://github.com/KrishnaxKaushal/Cafe-Website-first-try"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-400 hover:text-blue-300"
>
  View Project →
</a>
    </div>


    {/* Project 4 */}
    <div className="border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
      <h3 className="text-2xl font-bold mb-3">
        Data Visualization Project
      </h3>

      <p className="text-gray-400 mb-5">
        A data analysis and visualization project using Python libraries
        to explore datasets and discover useful insights.
      </p>

      <div className="flex gap-3 flex-wrap mb-5">
        <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
          Python
        </span>

        <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
          Pandas
        </span>

        <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
          Matplotlib
        </span>
      </div>

      <button className="text-blue-400 hover:text-blue-300">
        View Project →
      </button>
    </div>

  </div>
</section>

{/* Contact Section */}
<section
  id="contact"
  className="py-20 px-10 max-w-5xl mx-auto"
>
  <h2 className="text-4xl font-bold mb-6">
    Get In Touch
  </h2>

  <p className="text-gray-400 text-lg mb-8 max-w-2xl">
    I&apos;am  always interested in learning, collaborating, and connecting
    with people. Feel free to reach out to me!
  </p>

  <div className="flex flex-col sm:flex-row gap-4">
    
    <a
      href="mailto:ky765343@gmail.com"
      className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition text-center"
    >
      Send Me an Email
    </a>

    <a
  href="https://github.com/KrishnaxKaushal/Cafe-Website-first-try"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-gray-700 hover:border-blue-500 px-6 py-3 rounded-lg transition text-center"
>
  GitHub
</a>

   <a
  href="https://www.linkedin.com/feed/update/urn:li:share:7427921316764164097/"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-gray-700 hover:border-blue-500 px-6 py-3 rounded-lg transition text-center"
>
  LinkedIn
</a>

  </div>
</section>

{/* Footer */}
<footer className="border-t border-gray-800 py-6 text-center text-gray-500">
  <p>
    © 2026 Krishna Kaushal. Built with Next.js & Tailwind CSS.
  </p>
</footer>

  
    </main>
  );
}