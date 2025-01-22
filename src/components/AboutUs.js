import React from 'react';
import { Rocket, Star, Mail, Linkedin, Github } from 'lucide-react';

const AboutUs = () => {
  const getmaillink = (email) => {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Contact`;
  };

  const teamdata = () => {
    return [
      {
        name: "Vaishnavi Chaurasiya",
        role: "Vice Precident",
        email: "vaishnavii0302@gmail.com",
        profile: "vaishnavi.jpg",
        linkedin: "https://www.linkedin.com/in/vaishnavi-chaurasiya-19917024a",
        github: "https://github.com/Vaishnaviii0302",
        desc: ""
    },
        {
            name: "Ritish Katiyar",
            role: "Leader Cansat",
            email: "2k22.ec.2213567@gmail.com",
            profile: "ritesh.jpg",
            linkedin: "https://www.linkedin.com/in/ritish-katiyar-612aba260",
            github: "https://github.com/sarp4fri",
            desc: ""
        },
        {
            name: "Arya Mishra",
            role: "Sensor Subsystem Engineer",
            email: "aryasmishra071@gmail.com",
            profile: "arya.jpg",
            linkedin: "https://www.linkedin.com/in/arya-mishra-43307525a",
            github: "https://github.com/aryasmishra",
            desc: ""
        },
        {
            name: "Rahul Kumar",
            role: "Communication Engineer",
            email: "2k22.ece.2211241@gmail.com",
            profile: "rahul.jpg",
            linkedin: "www.linkedin.com/in/rahul-kumar-a73533261",
            github: "https://github.com/Rahulk212004",
            desc: ""
        },
        {
            name: "Anshuman Pathak",
            role: "Club Member",
            email: "",
            profile: "anshuman.jpg",
            linkedin: "www.linkedin.com/in/the-anshuman-pathak/",
            github: "",
            desc: ""
        },
        {
            name: "Sandeep Kumar Khare",
            role: "Club Member",
            email: "",
            profile: "sandeep.jpg",
            linkedin: "www.linkedin.com/in/the-anshuman-pathak/",
            github: "",
            desc: ""
        },
        {
            name: "Jitendra Singh",
            role: "Club Member",
            email: "",
            profile: "jitendra.jpg",
            linkedin: "www.linkedin.com/in/the-anshuman-pathak/",
            github: "",
            desc: ""
        },
        {
            name: "Dr. Manish Kumar",
            role: "Club Member",
            email: "",
            profile: "manish_sir.jpg",
            linkedin: "",
            github: "",
            desc: ""
        },
        {
            name: "Sparsh Verma",
            role: "Flight Control Engineer",
            email: "sparshverma2004@gmail.com",
            profile: "sparsh.jpg",
            linkedin: "https://www.linkedin.com/in/ssrvsparsh/",
            github: "https://github.com/ssrvsparsh",
            desc: ""
        },
        {
            name: "Yaggya",
            role: "Ground Control Software Head",
            email: "yaggyachopra01@gmail.com",
            profile: "yagya.jpeg",
            linkedin: "https://www.linkedin.com/in/yaggyachopra/",
            github: "https://github.com/yaggyachopra",
            desc: ""
        },
        {
            name: "Shikha",
            role: "On-Board Computer Engineer",
            email: "2k23.ece2311523@gmail.com",
            profile: "shikha.jpg",
            linkedin: "https://www.linkedin.com/in/shikha-shikha-30b9aa325",
            github: "https://github.com/shikha274",
            desc: ""
        },
        {
            name: "Anushka",
            role: "Descent Control Engineer",
            email: "2k23.cs2312047@gmail.com",
            profile: "anushka.jpg",
            linkedin: "http://www.linkedin.com/in/anushka-v-shukla",
            github: "https://github.com/anu04xe",
            desc: ""
        },
        {
            name: "Gaurav Shahi",
            role: "AI Engineer",
            email: "shahigaurav836@gmail.com",
            profile: "gaurav.jpg",
            linkedin: "https://www.linkedin.com/in/gaurav-shahi-90a23229b",
            github: "https://github.com/RudeHats",
            desc: ""
        },
        {
            name: "Lavitra Sahu",
            role: "Telemetry and Communication Engineer",
            email: "",
            profile: "lavitra.png",
            linkedin: "",
            github: "",
            desc: ""
        },
        {
            name: "Anshu Gupta",
            role: "Ground Control Software Head",
            email: "2k22.cscys.2212695@gmail.com",
            profile: "anshu.jpg",
            linkedin: "http://www.linkedin.com/in/anshugupta370",
            github: "https://github.com/Anshu370",
            desc: ""
        },
        {
            name: "Tanishq Mishra",
            role: "Web Developer",
            email: "2k23.cs2313608@gmail.com",
            profile: "tanishq.jpg",
            linkedin: "https://www.linkedin.com/in/tanishq-mishra9936/",
            github: "https://github.com/imperiorhackers9934/",
            desc: ""
        },
        {
            name: "Arjita Sahu",
            role: "Ground Control Software Engineer",
            email: "2k22.cse.2213081@gmail.com",
            profile: "arjita.jpg",
            linkedin: "https://www.linkedin.com/in/arjita-sahu-578a53259",
            github: "https://github.com/ArjitaSahu123",
            desc: ""
        },
        {
            name: "Riya Verma",
            role: "Descent Control Engineer",
            email: "riyav4532@gmail.com",
            profile: "riya.jpg",
            linkedin: "https://www.linkedin.com/in/riya-verma",
            github: "https://github.com/intelliboyy",
            desc: ""
        }
    ];
};

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section with Parallax Stars */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-gray-900 to-gray-900" />
          {/* Animated stars background */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <Star
                key={i}
                className="absolute text-white animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.5,
                  animation: `pulse ${Math.random() * 3 + 2}s infinite`
                }}
                size={Math.random() * 4 + 2}
              />
            ))}
          </div>
        </div>

        {/* About Content */}
        <div className="relative px-6 py-24 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              About Vyomnauts
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed">
                Welcome to the Vyomnauts Club! PSIT Vyomnauts is a student-led space club committed to sparking curiosity and deepening
                knowledge in space science and technology. We offer a platform for students passionate about
                astronomy, engineering, and space exploration to come together, learn, and collaborate.
              </p>
              <div className="mt-6 text-gray-300 leading-relaxed">
                <p>Through solar observations, stargazing nights, workshops, and expert talks, we provide hands-on
                  experiences that bring cosmic phenomena closer to our members. Our goal is to build a
                  supportive community where students can develop technical skills, undertake space-related
                  projects, and share a common love for the mysteries of the universe.</p>
              </div>
              <div className="mt-8">
                <Rocket className="inline-block text-blue-400 mb-4" size={48} />
                <p className="text-xl font-semibold text-blue-400">Join us as we reach for the stars, one step at a time!</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-24">
            <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Our Stellar Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamdata().map((member, index) => (
                <div key={index} className="group">
                  <div className="relative h-96 lg:h-80 bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                    {/* Profile Image */}
                    <div className="aspect-w-4 aspect-h-5">
                      <img
                        src={`/team/${member.profile}`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                    </div>

                    {/* Member Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-300 mb-4">{member.role}</p>

                      {/* Social Links */}
                      <div className="flex space-x-4">
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors">
                            <Linkedin size={20} />
                          </a>
                        )}
                        {member.email && (
                          <a href={getmaillink(member.email)} target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors">
                            <Mail size={20} />
                          </a>
                        )}
                        {member.github && (
                          <a href={member.github} target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors">
                            <Github size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;