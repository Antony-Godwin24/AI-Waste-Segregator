import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Scanner from './pages/Scanner';
import Categories from './pages/Categories';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [preselectedCategoryId, setPreselectedCategoryId] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Jump from Categories or Home directly into Scanner with a preselected category
  const handleSelectCategoryForTesting = (categoryId) => {
    setPreselectedCategoryId(categoryId);
    setActivePage('scanner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScanSaved = () => {
    setToastMessage('Scan saved to your Dashboard history!');
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf9] text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900 font-sans">
      
      {/* Top Navigation Bar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-2.5 text-xs font-semibold animate-in slide-in-from-bottom-5 duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Page Content Router */}
      <main className="flex-1">
        {activePage === 'home' && (
          <Home 
            setActivePage={setActivePage} 
            onSelectCategoryForTesting={handleSelectCategoryForTesting} 
          />
        )}

        {activePage === 'scanner' && (
          <Scanner 
            onScanSaved={handleScanSaved}
            preselectedCategoryId={preselectedCategoryId}
            onResetPreselected={() => setPreselectedCategoryId(null)}
          />
        )}

        {activePage === 'categories' && (
          <Categories 
            onSelectCategoryForTesting={handleSelectCategoryForTesting} 
          />
        )}

        {activePage === 'dashboard' && (
          <Dashboard 
            setActivePage={setActivePage} 
          />
        )}

        {activePage === 'about' && (
          <About 
            setActivePage={setActivePage} 
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
