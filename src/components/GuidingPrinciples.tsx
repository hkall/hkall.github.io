import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const GuidingPrinciples = () => {
  // Core values data
  const coreValues = [
    {
      icon: 'fa-lightbulb',
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new creative possibilities.'
    },
    {
      icon: 'fa-heart',
      title: 'Passion',
      description: 'Our work is driven by a genuine love for creative expression and design.'
    },
    {
      icon: 'fa-users',
      title: 'Collaboration',
      description: 'We believe the best results come from working together as a team.'
    },
    {
      icon: 'fa-check-circle',
      title: 'Excellence',
      description: 'We strive for perfection in every detail of our creative process.'
    }
  ];

  // Why we do what we do data
  const whyWeDoIt = [
    {
      title: 'Client-Centered Approach',
      description: 'We prioritize understanding our clients\' needs and vision.'
    },
    {
      title: 'Creative Problem Solving',
      description: 'We turn challenges into opportunities for innovative solutions.'
    },
    {
      title: 'Results-Driven Design',
      description: 'Our creative work is focused on achieving measurable outcomes.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn about the guiding principles that drive Mirage Creative Studio to succeed.
          </h2>
          <div className="w-20 h-1 bg-purple-700 mx-auto mt-6 rounded-full"></div>
        </motion.div>
        
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Core Values */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h3>
              <p className="text-gray-600 mb-6">
                These fundamental principles guide everything we do at Mirage Creative Studio, ensuring we deliver exceptional work and maintain strong relationships with our clients.
              </p>
              
              <div className="space-y-4 mb-8">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0 mt-1">
                      <i className={`fa-solid fa-${value.icon} text-purple-700 text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a
                href="/about"
                className="inline-flex items-center px-6 py-2 border border-purple-700 text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50 transition-colors duration-300"
              >
                Read More
                <i className="fa-solid fa-arrow-right ml-2"></i>  
              </a>
            </div>
          </motion.div>
          
          {/* Right column: Why We Do What We Do */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1559028006-44a08e38356b"
                alt="Creative design details"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Creative Excellence</h4>
                  <p className="text-purple-100 text-sm">We pay attention to every detail in our design process.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Second row for the "Why We Do What We Do" section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
                alt="Team collaboration and client communication"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Collaborative Process</h4>
                  <p className="text-purple-100 text-sm">Working together to bring your vision to life.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right: Why We Do What We Do content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Do What We Do</h3>
              <p className="text-gray-600 mb-6">
                Our mission is driven by a passion for creativity and a desire to make a meaningful impact through design.
              </p>
              
              <div className="space-y-4 mb-8">
                {whyWeDoIt.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                        <i className="fa-solid fa-check text-purple-700 text-sm"></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-purple-700 hover:bg-purple-800 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Get Started
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuidingPrinciples;