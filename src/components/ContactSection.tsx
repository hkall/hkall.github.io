import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  return (
    <section className="relative bg-purple-900 text-white py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-500 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Get in touch to see how we can help.
          </h2>
          
          <p className="text-xl text-purple-100">
            Ready to transform your digital presence? Contact us today to discuss how we can bring your vision to life.
          </p>
          
          <div className="pt-4">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-purple-900 bg-white hover:bg-purple-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all text-lg px-10 py-5"
            >
              Contact Us
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;