import React from 'react';
import './Accordion.css';

const Accordion = () => {
  const resources = [
    { 
      title: 'Claude.ai', 
      link: 'https://claude.ai/', 
      image: 'https://claude.ai/favicon.ico', 
      description: 'AI Assistant for various tasks' 
    },
    { 
      title: 'Mendeley', 
      link: 'https://www.mendeley.com/', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mendeley_logo.svg/1200px-Mendeley_logo.svg.png', 
      description: 'Reference Manager for research papers'
    },
    { 
      title: 'Classgist (Abstrak otomatis)', 
      link: 'https://classgist.com', 
      image: 'https://classgist.com/favicon.ico', 
      description: 'Automatic abstract generator for research papers'
    },
    { 
      title: 'Turnitin', 
      link: 'https://www.turnitin.com/', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Turnitin_logo.svg', 
      description: 'Plagiarism detection tool for academic writing'
    },
    { 
      title: 'Perplexity', 
      link: 'https://www.perplexity.ai/', 
      image: 'https://perplexity.ai/favicon.ico', 
      description: 'AI-based search and summarization tool'
    },
    { 
      title: 'QuillBot (Parafrase)', 
      link: 'https://www.quillbot.com/', 
      image: 'https://www.quillbot.com/static/media/favicon.8198b409b660afc5c8f8.ico', 
      description: 'Paraphrasing tool for rewriting text'
    },
    { 
      title: 'DeepL (Translate)', 
      link: 'https://www.deepl.com/', 
      image: 'https://www.deepl.com/img/favicon/favicon-32x32.png', 
      description: 'High-quality translation tool'
    },
    { 
      title: 'HumataAi (Review Jurnal)', 
      link: 'https://www.humata.ai/', 
      image: 'https://www.humata.ai/favicon.ico', 
      description: 'AI tool for journal paper review'
    },
    { 
      title: 'Connected Papers (Latar Belakang)', 
      link: 'https://www.connectedpapers.com/', 
      image: 'https://www.connectedpapers.com/favicon.ico', 
      description: 'Explore and visualize academic research papers'
    },
    { 
      title: 'EconBiz', 
      link: 'https://www.econbiz.de/', 
      image: 'https://www.econbiz.de/favicon.ico', 
      description: 'Database for business and economics research'
    },
    { 
      title: 'Publish or Perish', 
      link: 'https://www.publishorperish.com/', 
      image: 'https://www.publishorperish.com/favicon.ico', 
      description: 'Citation analysis tool for academic research'
    },
    { 
      title: 'Academia', 
      link: 'https://www.academia.edu/', 
      image: 'https://www.academia.edu/favicon.ico', 
      description: 'Social networking site for researchers and academics'
    },
    { 
      title: 'ResearchGate', 
      link: 'https://www.researchgate.net/', 
      image: 'https://www.researchgate.net/favicon.ico', 
      description: 'Platform for sharing and discovering academic research'
    },
    { 
      title: 'JSTOR', 
      link: 'https://www.jstor.org/', 
      image: 'https://www.jstor.org/favicon.ico', 
      description: 'Digital library for academic journals, books, and primary sources'
    },
    { 
      title: 'ScholarShy', 
      link: 'https://www.scholarshy.com/', 
      image: 'https://www.scholarshy.com/favicon.ico', 
      description: 'Extracts key points and provides research summaries'
    },
    { 
      title: 'Iris AI', 
      link: 'https://iris.ai/', 
      image: 'https://iris.ai/favicon.ico', 
      description: 'AI-based tool for identifying key points and highlights in texts'
    },
    { 
      title: 'SummarizeBot', 
      link: 'https://summarizebot.com/', 
      image: 'https://summarizebot.com/favicon.ico', 
      description: 'Summarizes links, files, and images using AI'
    }
  ];

  return (
    <div className="card-container">
      {resources.map((resource, index) => (
        <div key={index} className="card">
          <img src={resource.image} alt={resource.title} className="card-logo" />
          <div className="card-content">
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">Visit</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
