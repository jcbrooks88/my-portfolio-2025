import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppError from './components/App-error';  // Assuming AppError is a custom component
import LoadingIndicator from './components/LoadingIndicator.jsx'; // Assuming LoadingIndicator is a custom component

// Lazy load pages for better performance
const AboutMe = lazy(() => import('./pages/AboutMe'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const Resume = lazy(() => import('./pages/Resume'));


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <main>
          <AppError>
            <Suspense fallback={<LoadingIndicator />}>
              <Routes>
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </Suspense>
          </AppError>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
