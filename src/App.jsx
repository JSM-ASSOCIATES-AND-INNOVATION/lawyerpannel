import React from 'react'
import LandingPage from './features/Landing/LandingPage'
import Header from './shared/layouts/Header'
import Footer from './shared/layouts/Footer'

function App() {
  return (
    <div className="flex flex-col font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Liquid Mesh Background */}
      <div className="fixed inset-0 z-[-1] bg-light dark:bg-dark transition-colors duration-500 overflow-hidden">
         <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/20 dark:bg-primary/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-70"></div>
         <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-300/30 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-70"></div>
         <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-green-200/30 dark:bg-green-900/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-70"></div>
      </div>

      <Header />
      <main className="flex-grow w-full">
        <LandingPage />
      </main>
      <Footer />
    </div>
  )
}

export default App