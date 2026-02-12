import './App.css'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Lana Nguyen</h1>
            <div className="flex gap-6">
              <a href="#about" className="text-slate-600 hover:text-blue-600">About</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            Marketing Professional & Data Analyst
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Sydney, Australia
          </p>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Results-driven and customer-focused marketing professional with 4 years of experience 
            in email and social media marketing. Specializing in data-driven campaigns with 
            interactive visualizations and analytics.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <a 
              href="https://www.linkedin.com/in/lana-nguyen-1406" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              LinkedIn
            </a>
            <a 
              href="#projects" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-slate-800 mb-8">About Me</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-slate-800 mb-4">Experience</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-slate-800">Mosaic Brands Ltd</p>
                  <p className="text-slate-600">Marketing Specialist</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-slate-800 mb-4">Education</h4>
              <div>
                <p className="font-semibold text-slate-800">Deakin University</p>
                <p className="text-slate-600">2020 - 2021</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-slate-800 mb-4">Skills</h4>
            <div className="flex flex-wrap gap-3">
              {['Email Marketing', 'Social Media Marketing', 'Data Analysis', 'Campaign Management', 
                'Data Visualization', 'Dashboard Design', 'Marketing Analytics'].map(skill => (
                <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-slate-800 mb-8">Marketing Analytics Dashboard</h3>
          <p className="text-slate-600 mb-8">Interactive visualizations showcasing campaign performance and channel analytics</p>
          <Dashboard />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">Get In Touch</h3>
          <p className="text-slate-600 mb-6">Sydney, New South Wales, Australia</p>
          <a 
            href="https://www.linkedin.com/in/lana-nguyen-1406" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© 2026 Lana Nguyen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
