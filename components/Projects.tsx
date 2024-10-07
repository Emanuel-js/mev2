"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
    image: 'https://source.unsplash.com/random/800x600?ecommerce',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Task Management App',
    description: 'A productivity app built with Vue.js and Firebase.',
    image: 'https://source.unsplash.com/random/800x600?productivity',
    tags: ['Vue.js', 'Firebase'],
    link: '#'
  },
  {
    title: 'Weather Forecast Dashboard',
    description: 'Real-time weather data visualization using D3.js and OpenWeatherMap API.',
    image: 'https://source.unsplash.com/random/800x600?weather',
    tags: ['D3.js', 'API Integration'],
    link: '#'
  }
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="h-screen flex items-center justify-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl mx-auto"
            >
              <Card className="bg-white/10 backdrop-blur-sm text-white border-none">
                <CardHeader>
                  <CardTitle>{projects[currentProject].title}</CardTitle>
                  <CardDescription className="text-gray-300">{projects[currentProject].description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={projects[currentProject].image} alt={projects[currentProject].title} className="w-full h-64 object-cover rounded-md mb-4" />
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-white/20 text-white">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <a href={projects[currentProject].link} className="text-blue-300 hover:underline">View Project</a>
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatePresence>
          <motion.button
            onClick={prevProject}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/10 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-white/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={nextProject}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/10 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-white/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}