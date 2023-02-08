import React from 'react'
import bgImg from './images/bg-img.jpg'

const MainSection = () => {
  return (
    
    <section className="bg-cover bg-center py-32" style={{ backgroundImage: `url(${bgImg})` }}>
       <div className="container mx-auto py-12 text-white">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">Finance for Education</h1>
            <p className="text-xl mb-8">We provide funding for students in need.</p>
            <button className="bg-green-300 text-white px-4 py-2 rounded-lg border-2 hover:bg-green-500">
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSection
