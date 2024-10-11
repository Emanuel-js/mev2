"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Smartphone, Globe, Database } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Creating responsive and dynamic websites using modern frameworks and technologies.",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    description:
      "Building cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "Backend Development",
    description:
      "Designing and implementing robust server-side applications and APIs.",
    icon: Database,
  },
  {
    title: "Custom Software Solutions",
    description:
      "Developing tailored software to meet specific business needs and challenges.",
    icon: Code,
  },
];

export default function Services() {
  return (
    <section className="h-screen flex items-center justify-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-sm border-none text-white hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="mr-4 p-2 bg-white/20 rounded-full"
                    >
                      {<service.icon className="h-6 w-6 text-white" />}
                    </motion.div>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
