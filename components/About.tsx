"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, Github } from "lucide-react";

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
              I'm a passionate software developer with over 5 years of
              experience in creating innovative web and mobile applications. My
              expertise spans across front-end and back-end technologies, with a
              focus on creating scalable and efficient solutions.
            </p>
            <p className="text-lg mb-6">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through tech blogs and community events.
            </p>
            <div className="flex">
              <div className="p-3">
                <a href="https://www.linkedin.com/in/emanuel-awol/">
                  <LinkedinIcon />
                </a>
              </div>
              <div className="p-3">
                <a href="https://github.com/Emanuel-js">
                  <Github />
                </a>
              </div>
            </div>
            <Button asChild variant="outline" size="lg">
              <a href="/assets/Amanuelawol.pdf" download>
                Download Resume
              </a>
            </Button>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="w-64 h-64 rounded-full overflow-hidden mx-auto">
              <img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Black&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Smile&skinColor=DarkBrown" />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="font-bold">Skills:</p>
              <p>React, Node.js, Flutter, Nest,Vue</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
