import React, { useState } from 'react';

// Main App Component
export default function App() {
  // State hooks to manage input values for the login form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // In a real application, you would add your authentication logic here
    console.log('Logging in with:', { username, password });
    // You could show a success message or redirect the user
  };

  const FeatureCard = ({ icon, title, children }) => (
    <div className="feature-card">
      <div className="feature-card-header">
        {icon}
        <h3>{title}</h3>
      </div>
      <p>{children}</p>
    </div>
  );
  
  const HowItWorksStep = ({ title, children }) => (
    <div className="how-it-works-step">
        <div className="step-title-container">
            <h3>{title}</h3>
        </div>
        <p>{children}</p>
    </div>
  );

  return (
    <>
      <style>{`
        /* General Body Styles */
        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .app-container {
          background-color: #f9fafb; /* bg-gray-50 */
          color: #1f2937; /* text-gray-800 */
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .container {
          width: 100%;
          max-width: 1280px; /* Standard container width */
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        /* Header */
        .header {
          width: 100%;
          padding: 1rem;
          border-bottom: 1px solid #e5e7eb; /* border-gray-200 */
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(4px);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.75rem; /* space-x-3 */
        }

        .logo-container h1 {
          font-size: 1.5rem; /* text-2xl */
          font-weight: 700;
          letter-spacing: -0.025em; /* tracking-tight */
        }

        .logo {
          height: 2.5rem; /* h-10 */
          width: 2.5rem; /* w-10 */
          border-radius: 9999px; /* rounded-full */
          border: 2px solid #e5e7eb; /* border-gray-200 */
        }

        .nav-buttons {
          display: flex;
          align-items: center;
          gap: 0.5rem; /* space-x-2 */
        }

        .nav-buttons button {
          padding: 0.5rem 1rem; /* px-4 py-2 */
          font-size: 0.875rem; /* text-sm */
          font-weight: 500;
          border-radius: 0.375rem; /* rounded-md */
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
        }

        .btn-login {
          background-color: transparent;
        }
        .btn-login:hover {
          background-color: #f3f4f6; /* hover:bg-gray-100 */
        }

        .btn-signup {
          background-color: #3b82f6; /* bg-blue-600 */
          color: white;
        }
        .btn-signup:hover {
          background-color: #2563eb; /* hover:bg-blue-700 */
        }

        /* Main Content */
        .main-content {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 1rem; /* py-16 p-4 */
        }

        .homepage-content {
          display: flex;
          flex-direction: column;
          gap: 5rem; /* space-y-20 */
          text-align: center;
        }

        /* Hero Section */
        .hero-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem; /* space-y-6 */
        }

        .hero-title {
          font-size: 2.25rem; /* text-4xl */
          font-weight: 800;
          letter-spacing: -0.05em; /* tracking-tighter */
          color: #3b82f6; /* Updated to solid blue */
        }

        .hero-subtitle {
          max-width: 42rem; /* max-w-2xl */
          font-size: 1.125rem; /* text-lg */
          color: #4b5563; /* text-gray-600 */
        }

        .btn-get-started {
          background-color: #3b82f6; /* bg-blue-600 */
          color: white;
          padding: 0.75rem 2rem; /* px-8 py-3 */
          border-radius: 0.375rem; /* rounded-md */
          font-weight: 600;
          font-size: 1.125rem; /* text-lg */
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: transform 0.2s, background-color 0.2s;
        }

        .btn-get-started:hover {
          background-color: #2563eb; /* hover:bg-blue-700 */
          transform: scale(1.05);
        }

        /* Features & How It Works Sections */
        .section-title {
          font-size: 1.875rem; /* text-3xl */
          font-weight: 700;
          margin-bottom: 3rem; /* mb-12 */
        }

        .features-grid, .how-it-works-grid {
          display: grid;
          gap: 2rem; /* gap-8 */
        }

        .feature-card {
          background-color: white;
          padding: 1.5rem;
          border-radius: 0.5rem; /* rounded-lg */
          border: 1px solid #e5e7eb; /* border-gray-200 */
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          text-align: left;
          height: 100%;
        }

        .feature-card-header {
          display: flex;
          align-items: center;
          gap: 1rem; /* space-x-4 */
          margin-bottom: 0.75rem; /* mb-3 */
        }

        .feature-card-header h3 {
          font-size: 1.25rem; /* text-xl */
          font-weight: 600;
          margin: 0;
        }

        .feature-card p {
          color: #4b5563; /* text-gray-600 */
          margin: 0;
        }

        .feature-icon {
          color: #3b82f6; /* text-blue-500 */
          height: 2rem; /* h-8 */
          width: 2rem; /* w-8 */
        }

        /* Updated How It Works Section Styles */
        .how-it-works-step {
          text-align: center;
        }

        .step-title-container {
          background-color: #dbeafe; /* Light blue background */
          border-radius: 9999px; /* Pill shape */
          padding: 0.75rem 1.5rem;
          margin-bottom: 1rem;
          display: inline-block; /* Fit content width */
        }

        .step-title-container h3 {
          margin: 0;
          font-size: 1.125rem;
          font-weight: 600;
          color: #1e3a8a; /* Darker blue for text */
        }

        .how-it-works-step p {
          color: #4b5563;
          margin-top: 1rem;
        }


        /* Login Section */
        .login-section {
          display: flex;
          justify-content: center;
        }

        .login-card {
          width: 100%;
          max-width: 24rem; /* max-w-sm */
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          padding: 2rem;
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
        }

        .login-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .login-header h3 {
          font-size: 1.875rem;
          font-weight: 700;
          margin: 0;
        }
        .login-header p {
          color: #6b7280; /* text-gray-500 */
          margin-top: 0.5rem;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .login-form input {
          width: 100%;
          padding: 0.75rem;
          background-color: #f9fafb;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          box-sizing: border-box;
        }
        .login-form input::placeholder {
          color: #9ca3af;
        }
        .login-form input:focus {
          outline: none;
          box-shadow: 0 0 0 2px #3b82f6;
        }

        .btn-submit {
          width: 100%;
          background-color: #3b82f6;
          color: white;
          padding: 0.75rem;
          border-radius: 0.375rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .btn-submit:hover {
          background-color: #2563eb;
        }

        .btn-back {
          margin-top: 1rem;
          font-size: 0.875rem;
          color: #3b82f6;
          text-decoration: none;
          border: none;
          background: none;
          cursor: pointer;
        }
        .btn-back:hover {
          text-decoration: underline;
        }

        /* Footer */
        .footer {
          width: 100%;
          padding: 2rem;
          border-top: 1px solid #e5e7eb;
          background-color: white;
          text-align: center;
          color: #6b7280;
        }

        /* Responsive Media Queries */
        @media (min-width: 768px) {
          .header {
            padding: 1.5rem;
          }
          .hero-title {
            font-size: 3.75rem; /* md:text-6xl */
          }
          .hero-subtitle {
            font-size: 1.25rem; /* md:text-xl */
          }
          .section-title {
            font-size: 2.25rem; /* md:text-4xl */
          }
          .features-grid {
            grid-template-columns: repeat(3, 1fr); /* md:grid-cols-3 */
          }
          .how-it-works-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem; /* gap-12 */
          }
        }
      `}</style>
      <div className="app-container">
        
        {/* Header Section */}
        <header className="header">
          <div className="container header-content">
            <div className="logo-container">
              {/* Logo placeholder */}
              <img 
                src="https://placehold.co/40x40/f9fafb/1f2937?text=SC" 
                alt="SecuroCheck Logo" 
                className="logo" 
              />
              <h1>SecuroCheck</h1>
            </div>
            <nav className="nav-buttons">
              <button onClick={() => setShowLogin(true)} className="btn-login">Login</button>
              <button onClick={() => setShowLogin(true)} className="btn-signup">Sign Up</button>
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="main-content">
          <div className="container">
              
            { !showLogin ? (
              <div className="homepage-content">
                {/* Hero Section */}
                <section className="hero-section">
                  <h2 className="hero-title">
                    Welcome to SecuroCheck
                  </h2>
                  <p className="hero-subtitle">
                    Secure your future. Verify certificates instantly, ensuring authenticity and building trust.
                  </p>
                  <button onClick={() => setShowLogin(true)} className="btn-get-started">
                    Get Started
                  </button>
                </section>

                {/* Features Section */}
                <section className="features-section">
                   <h2 className="section-title">Core Features</h2>
                  <div className="features-grid">
                    <FeatureCard 
                      title="Instant Verification"
                      icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m9 15 2 2 4-4"></path></svg>}
                    >
                      Use a unique certificate ID to validate any document in seconds, providing immediate confirmation of authenticity.
                    </FeatureCard>
                     <FeatureCard 
                      title="Tamper-Proof Security"
                      icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>}
                    >
                      Leveraging blockchain, every certificate is cryptographically sealed, making them impossible to alter or forge.
                    </FeatureCard>
                     <FeatureCard 
                      title="Effortless Issuing"
                      icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon"><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 7h1" /><path d="M9 13h6" /><path d="M9 17h6" /></svg>}
                    >
                      Institutions can easily issue, manage, and revoke digital certificates through our intuitive and secure dashboard.
                    </FeatureCard>
                  </div>
                </section>

                {/* How It Works Section */}
                 <section>
                   <h2 className="section-title">Simple Steps to Security</h2>
                   <div className="how-it-works-grid">
                     <HowItWorksStep title="1. Issue Certificate">
                       Institutions create and issue tamper-proof digital certificates in minutes.
                     </HowItWorksStep>
                     <HowItWorksStep title="2. Share Securely">
                      Recipients get a unique, shareable link for resumes or social profiles.
                     </HowItWorksStep>
                     <HowItWorksStep title="3. Verify Instantly">
                      Employers and institutions can verify authenticity with a single click.
                     </HowItWorksStep>
                   </div>
                 </section>
              </div>
            ) : (
               /* Login Form Section */
              <section className="login-section">
                <div className="login-card">
                  <div className="login-header">
                      <h3>Login</h3>
                      <p>Access your secure account.</p>
                  </div>
                  <form className="login-form" onSubmit={handleLogin}>
                    <input
                      type="text"
                      placeholder="Username or Email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button type="submit" className="btn-submit">
                      Login
                    </button>
                  </form>
                   <button onClick={() => setShowLogin(false)} className="btn-back">
                      &larr; Back to Home
                  </button>
                </div>
              </section>
            )}

          </div>
        </main>

        {/* Footer Section */}
        <footer className="footer">
          <div className="container">
              <p>&copy; 2025 SecuroCheck Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}