import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              SUKRIT SAHA
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted">
              Developer who turns ideas into interactive realities
            </p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="min-h-screen flex items-center py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About</h2>
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              Full-Stack Engineer with 3 years of experience delivering complete
              product solutions spanning frontend, backend, and mobile ecosystems.
            </p>
          </div>
        </section>

        {/* Journey */}
        <section id="journey" className="min-h-screen flex items-center py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Journey</h2>
            <p className="text-muted">Career timeline coming in Phase 3.</p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="min-h-screen flex items-center py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Experience</h2>
            <p className="text-muted">Experience cards coming in Phase 4.</p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="min-h-screen flex items-center py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Projects</h2>
            <p className="text-muted">Project showcase coming in Phase 4.</p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="min-h-screen flex items-center py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Skills</h2>
            <p className="text-muted">Skills visualization coming in Phase 5.</p>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="min-h-screen flex items-center py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Education</h2>
            <p className="text-muted">Education cards coming in Phase 5.</p>
          </div>
        </section>

        {/* Beyond Code */}
        <section id="beyond" className="min-h-screen flex items-center py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Beyond Code</h2>
            <p className="text-muted">Interests & hobbies coming in Phase 5.</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="min-h-screen flex items-center justify-center py-24 px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-muted">Contact form coming in Phase 6.</p>
          </div>
        </section>
      </main>
    </>
  );
}
