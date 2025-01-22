import React, { useState, useEffect } from 'react';
import { Search, Calendar, Clock, ChevronRight, Rocket, Star, ChevronLeft } from 'lucide-react';

const BlogListingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Featured blog data
  const featuredBlogs = [
    {
      id: 1,
      title: "James Webb Telescope's Groundbreaking Discoveries",
      excerpt: "Unveiling the mysteries of the early universe with the most powerful space telescope ever built.",
      author: "Dr. Emily Richards",
      date: "2025-01-16",
      readTime: "12 min",
      category: "Deep Space",
      image: "https://assets.science.nasa.gov/dynamicimage/assets/science/hpd/solar-physics/Lovelyloops_SDO.jpg"
    },
    {
      id: 2,
      title: "The Race to Europa: Searching for Alien Life",
      excerpt: "How Jupiter's icy moon might hold the key to discovering extraterrestrial life in our solar system.",
      author: "Prof. Michael Wong",
      date: "2025-01-15",
      readTime: "15 min",
      category: "Astrobiology",
      image: "https://www.nasa.gov/wp-content/uploads/2023/01/webb-tarantula-neb.png?resize=1536,1199"
    },
    {
      id: 3,
      title: "Dark Matter: The Invisible Force Shaping Our Universe",
      excerpt: "New research sheds light on the mysterious substance that makes up 85% of the universe's mass.",
      author: "Dr. Lisa Kumar",
      date: "2025-01-14",
      readTime: "10 min",
      category: "Cosmology",
      image: "https://www.nasa.gov/wp-content/uploads/2025/01/51276996483-8a47cff873-k.jpg?resize=1024,683"
    }
  ];

  // Regular blog data
  const blogs = [
    {
      id: 1,
      title: "The Search for Exoplanets: New Discoveries",
      excerpt: "Recent telescopic observations have revealed fascinating new exoplanets in the habitable zone of distant star systems. Learn about these potential Earth-like worlds.",
      author: "Dr. Sarah Martinez",
      date: "2025-01-15",
      readTime: "7 min",
      category: "Astronomy",
      image: "https://assets.science.nasa.gov/dynamicimage/assets/science/hpd/solar-physics/Lovelyloops_SDO.jpg"
    },
    {
      id: 2,
      title: "Understanding Black Holes: A Beginner's Guide",
      excerpt: "Dive into the mysterious world of black holes. From their formation to their mind-bending effects on space and time, discover what makes these cosmic objects so fascinating.",
      author: "Prof. James Chen",
      date: "2025-01-14",
      readTime: "10 min",
      category: "Astrophysics",
      image: "https://www.nasa.gov/wp-content/uploads/2023/01/webb-tarantula-neb.png?resize=1536,1199"
    },
    {
      id: 3,
      title: "Mars Colonization: Progress and Challenges",
      excerpt: "As we edge closer to establishing human presence on Mars, explore the current technological advances and obstacles we face in making multi-planetary life a reality.",
      author: "Alex Thompson",
      date: "2025-01-13",
      readTime: "8 min",
      category: "Space Exploration",
      image: "https://www.nasa.gov/wp-content/uploads/2025/01/51276996483-8a47cff873-k.jpg?resize=1024,683"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredBlogs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredBlogs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredBlogs.length) % featuredBlogs.length);
  };

  return (
    <div className="min-h-screen pt-10 bg-gray-900 text-gray-100">
      {/* Header with star decoration */}
      <header className="bg-gray-800 shadow-lg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="flex items-center space-x-3">
            <Rocket className="text-blue-400" size={32} />
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Vyomnauts
            </h1>
          </div>
          <p className="mt-2 text-gray-400">Exploring the Universe, One Story at a Time</p>
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <Star className="absolute top-4 right-8 text-yellow-400" size={16} />
          <Star className="absolute top-12 right-24 text-yellow-400" size={12} />
          <Star className="absolute top-8 right-48 text-yellow-400" size={14} />
        </div>
      </header>

      {/* Featured Blog Carousel */}
      <div className="relative bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Featured Blogs
          </h2>
          <div className="relative h-[400px] overflow-hidden rounded-xl">
            {featuredBlogs.map((blog, index) => (
              <div
                key={blog.id}
                className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
                  index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
              >
                <div className="relative h-full">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="px-3 py-1 bg-blue-900 text-blue-300 text-sm font-medium rounded-full mb-4 inline-block">
                      {blog.category}
                    </span>
                    <h3 className="text-3xl font-bold mb-2 text-white">{blog.title}</h3>
                    <p className="text-gray-300 mb-4 max-w-3xl">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {new Date(blog.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock size={16} className="mr-1" />
                          {blog.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-900/50 hover:bg-gray-900 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-900/50 hover:bg-gray-900 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
            {/* Carousel Indicators */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {featuredBlogs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search the cosmos..."
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Blog Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article 
              key={blog.id} 
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-blue-500/10 transition-all duration-300 border border-gray-700 hover:border-blue-500/50"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 opacity-60"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-3 py-1 bg-blue-900 text-blue-300 text-sm font-medium rounded-full">
                    {blog.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-100 mb-2 hover:text-blue-400 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-400 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(blog.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {blog.readTime}
                    </span>
                  </div>
                  <button className="flex items-center text-blue-400 hover:text-blue-300 font-medium group">
                    Explore More
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogListingPage;