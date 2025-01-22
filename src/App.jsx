import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppError from './components/App-Error';
import { AboutMe, Portfolio, Contact, Resume, LoadingIndicator, NotFound } from './components/App-loading.jsx'



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
                <Route path="*" element={<NotFound />} />
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

