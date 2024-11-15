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
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Mendeley_Logo_Vertical.png/900px-Mendeley_Logo_Vertical.png', 
      description: 'Reference Manager for research papers'
    },
    { 
      title: 'Classgist', 
      link: 'https://www.classgist.com/abstract-generator.aspx', 
      image: 'https://www.classgist.com/images/portallogo.png', 
      description: 'Automatic abstract generator for research papers'
    },
    { 
      title: 'Turnitin', 
      link: 'https://www.turnitin.com/', 
      image: 'https://s3.amazonaws.com/libapps/accounts/124207/images/turnitin-logo-primary-cmyk.jpg', 
      description: 'Plagiarism detection tool for academic writing'
    },
    { 
      title: 'Ejaan.id', 
      link: 'https://ejaan.id/', 
      image: 'https://ejaan.id/favicon.ico', 
      description: 'Tool to check Indonesian spelling and grammar'
    },
    { 
      title: 'Ipusnas', 
      link: 'https://ipusnas.id/', 
      image: 'https://i0.wp.com/suarausu.or.id/wp-content/uploads/2021/06/whatsapp-image-2021-05-17-at-15-40-24-60a235c3d541df7da906cda2.jpeg?w=720&ssl=1', 
      description: 'Digital library platform in Indonesia'
    },
    { 
      title: 'Zotero', 
      link: 'https://www.zotero.org/', 
      image: 'https://www.logo.wine/a/logo/Zotero/Zotero-Logo.wine.svg', 
      description: 'Open-source reference management software'
    },
    { 
      title: 'Perplexity', 
      link: 'https://www.perplexity.ai/', 
      image: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/perplexity-ai-icon.png', 
      description: 'AI-based search and summarization tool'
    },
    { 
      title: 'QuillBot (Parafrase)', 
      link: 'https://www.quillbot.com/', 
      image: 'https://softwareaccountant.com/wp-content/uploads/2021/07/QuillBot.png.webp', 
      description: 'Paraphrasing tool for rewriting text'
    },
    { 
      title: 'DeepL (Translate)', 
      link: 'https://www.deepl.com/', 
      image: 'https://static.deepl.com/img/logo/deepl-logo-blue.svg', 
      description: 'High-quality translation tool'
    },
    { 
      title: 'HumataAi (Review Jurnal)', 
      link: 'https://www.humata.ai/', 
      image: 'https://www.humata.ai/favicon.ico', 
      description: 'AI tool for journal paper review'
    },
    { 
      title: 'Connected Papers', 
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
      title: 'SummarizeBot', 
      link: 'https://www.summarizebot.com/', 
      image: 'https://www.summarizebot.com/assets/img/logo.svg', 
      description: 'Summarizes links, files, and images using AI'
    },
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
