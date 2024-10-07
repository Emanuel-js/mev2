"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section className="h-screen flex items-center justify-center text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-4">
              I'm a passionate software developer with over 5 years of experience in creating
              innovative web and mobile applications. My expertise spans across front-end and
              back-end technologies, with a focus on creating scalable and efficient solutions.
            </p>
            <p className="text-lg mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge through tech blogs and community events.
            </p>
            <Button asChild variant="outline" size="lg">
              <a href="/resume.pdf" download>Download Resume</a>
            </Button>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="w-64 h-64 rounded-full overflow-hidden mx-auto">
              <img
                src="https://source.unsplash.com/random/400x400?portrait"
                alt="Developer Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="font-bold">Skills:</p>
              <p>React, Node.js, Python, AWS</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}