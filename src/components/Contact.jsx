import React from 'react';

const Contact = () => {
  const footerLinks = [
    { name: 'GitHub', url: 'https://github.com/ravijadav-dev' },
    { name: 'Twitter', url: '' }, // Leave empty to hide
    { name: 'Resume', url: '/ravijadav-dev.github.io/Ravi%20Jadav%20-%20Resume.pdf' }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-6">Let's Build <span className="text-gradient">Quality</span> Together.</h2>
        <p className="text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you're looking to revolutionize your CI/CD pipeline, build a resilient automation framework from scratch, or simply connect.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-20">
          <a href="mailto:theravijadav@gmail.com" className="px-8 py-4 bg-white text-darker rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)] w-full sm:w-auto">
            Say Hello
          </a>
          <a href="https://linkedin.com/in/ravijadav" target="_blank" rel="noopener noreferrer" className="px-8 py-4 glass text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
            LinkedIn
          </a>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">© {new Date().getFullYear()} Ravi Jadav. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.map((link) => (
              link.url ? (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ) : null
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
