import React, { useState } from 'react';
import { Mail, Send, Check, AlertCircle, Heart, Shield, Users, Bell } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: Heart,
      title: "Health Tips",
      description: "Weekly health tips and wellness advice"
    },
    {
      icon: Bell,
      title: "Medical Updates",
      description: "Latest medical news and breakthroughs"
    },
    {
      icon: Shield,
      title: "Prevention Care",
      description: "Preventive care reminders and screenings"
    },
    {
      icon: Users,
      title: "Community Events",
      description: "Health seminars and community programs"
    }
  ];

  if (isSubmitted) {
    return (
      <section className="relative py-16 bg-gradient-to-br from-teal-50 via-white to-cyan-50 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-teal-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 border border-teal-100">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome to Our Community! 🎉
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Thank you for subscribing to Satguru Hospital's newsletter. You'll receive our first health update within 24 hours.
            </p>
            
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-teal-700 font-medium">
                📧 Check your email for a confirmation message
              </p>
            </div>
            
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-teal-50 via-white to-cyan-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-300 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent py-5 mb-4">
              Stay Healthy, Stay Informed
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of health-conscious individuals who receive our weekly newsletter packed with 
              expert medical advice, wellness tips, and important health updates from Satguru Hospital.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Benefits */}
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-lg flex items-center justify-center mb-4 shadow-md">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Trust indicators */}
              <div className="bg-white rounded-xl p-6 border border-teal-100 shadow-lg">
                <div className="flex items-center justify-between text-center">
                  <div>
                    <div className="text-2xl font-bold text-teal-600">15K+</div>
                    <div className="text-sm text-gray-600">Subscribers</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-600">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">Weekly</div>
                    <div className="text-sm text-gray-600">Updates</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Newsletter Form */}
            <div className="lg:pl-8">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-teal-100 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Get Your Weekly Health Digest
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Join our community and never miss important health updates, tips, and medical insights.
                  </p>

                  <div className="space-y-6">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-teal-100 focus:border-teal-400 outline-none transition-all duration-300 text-gray-700 bg-gray-50 focus:bg-white"
                        required
                      />
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-200">
                        <AlertCircle className="w-4 h-4" />
                        {error}
                      </div>
                    )}

                    <button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:scale-100 disabled:shadow-none flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Subscribing...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Subscribe to Newsletter
                        </>
                      )}
                    </button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-500 text-center leading-relaxed">
                      By subscribing, you agree to our{' '}
                      <a href="#" className="text-teal-600 hover:text-teal-700 underline">
                        Privacy Policy
                      </a>
                      {' '}and{' '}
                      <a href="#" className="text-teal-600 hover:text-teal-700 underline">
                        Terms of Service
                      </a>
                      . You can unsubscribe at any time.
                    </p>
                  </div>

                  {/* Recent newsletter preview */}
                  <div className="mt-8 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-4 border border-teal-100">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Latest Issue Preview</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          "5 Heart-Healthy Foods to Include in Your Diet" + Mental Health Awareness Week updates
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;