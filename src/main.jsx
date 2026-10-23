import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const publicAsset = path => `${import.meta.env.BASE_URL}${path.split('/').map(encodeURIComponent).join('/')}`;

const projects = [
  {
    id: 'supply',
    number: '01',
    tags: ['data', 'bigquery', 'dbt', 'etl', 'ml', 'cloud', 'analytics'],
    img: publicAsset('supply_chain_screenshot.jpeg'),
    url: 'https://github.com/Meriamsikini/supply_chain',
  },
  {
    id: 'tumor',
    number: '02',
    tags: ['deep-learning', 'medical-imaging', 'segmentation', 'diffusion', 'pytorch'],
    img: publicAsset('brats_visualization.png'),
    url: 'https://github.com/Meriamsikini/Segmentation-3D-et-pr-diction-de-progression-des-tumeurs-avec-mod-les-de-diffusion-conditionnels',
  },
  {
    id: 'pneumonia',
    number: '03',
    tags: ['deep-learning', 'computer-vision', 'cnn', 'tensorflow', 'multi-agent', 'jade', 'spring-boot'],
    img: publicAsset('pneumonia_screenshot.jpeg'),
    url: 'https://github.com/Meriamsikini/pneumonia-detection-multi-agent-system',
  },
  {
    id: 'parking',
    number: '04',
    tags: ['computer-vision', 'opencv', 'ml', 'image-processing', 'smart-cities'],
    img: publicAsset('parking_detection.png'),
    url: 'https://github.com/Meriamsikini/smart-parking-detection',
  },
  {
    id: 'political',
    number: '05',
    tags: ['bigdata', 'llm', 'streaming', 'kafka', 'spark', 'hadoop', 'streamlit'],
    img: publicAsset('morrocan_opinion_insight1.png'),
    url: 'https://github.com/Meriamsikini/Moroccan-Political-Insight',
  },
  {
    id: 'jobs',
    number: '06',
    tags: ['ml', 'analytics', 'scraping', 'oracle', 'predictive', 'nlp'],
    img: publicAsset('image (2).png'),
    url: 'https://github.com/Meriamsikini/-End-to-End-Job-Intelligence-System-Scrape-Analyze-Predict-Recommend',
  },
  {
    id: 'hr',
    number: '07',
    tags: ['ml', 'analytics', 'xgboost', 'random-forest', 'powerbi', 'streamlit'],
    img: publicAsset('HR_analysis_screen.png'),
    url: 'https://github.com/Meriamsikini/HR-Analytics-and-Attrition-Prediction',
  },
  {
    id: 'queenswarm',
    number: '08',
    tags: ['optimization', 'metaheuristics', 'pso', 'python', 'customtkinter'],
    img: publicAsset('QueenSwarm.png'),
    url: 'https://github.com/Meriamsikini/QueenSwarm-Metaheuristic-PSO-Solver-for-N-Queens',
  },
];

const filters = ['data', 'ml','deep-learning','computer-vision', 'analytics', 'bigdata', 'llm', 'streaming', 'scraping'];
const navigation = ['education', 'experience', 'work', 'skills', 'certificates', 'approach', 'contact'];
const routeSections = ['top', 'vision', ...navigation];
const deploymentBase = import.meta.env.BASE_URL.replace(/\/$/, '');

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

const copy = {
  en: {
    nav: ['Education', 'Experience', 'Projects', 'Skills', 'Certificates', 'Approach', 'Contact'],
    hero: [
      'DATA & AI ENGINEER · MOROCCO',
      'MERIAM<br><i>SIKINI</i>',
      'I build intelligent systems that connect machine learning, data engineering, and software into practical AI applications.',
      'Explore my work',
      'View resume',
    ],
    vision: [
      'VISION',
      'From raw data<br>to <i>useful intelligence.</i>',
      'I approach AI as an engineering discipline: reliable data, explicit evaluation, model capabilities, and interfaces people can use.',
      'My work spans data pipelines, retrieval systems, computer vision, and production-minded application layers - translating complex inputs into decisions and usable tools.',
    ],
    education: ['EDUCATION', 'The foundations<br>behind <i>the work.</i>'],
    experience: ['EXPERIENCE', 'Building systems<br>in <i>the real world.</i>'],
    work: [
      'SELECTED WORK',
      'Systems with<br><i>real constraints.</i>',
      'Documented projects across data, AI, and applied analytics.',
      'All projects',
      'Repository',
    ],
    approach: [
      'ENGINEERING APPROACH',
      'A system is more<br>than its <i>model.</i>',
      'The implementation changes with the problem. The principle does not: make data flows visible, keep decisions explainable, and design for the people who use the system.',
    ],
    skills: ['SKILLS', 'Tools for the<br><i>whole system.</i>'],
    certificates: ['CERTIFICATES', 'Learning, made <i>visible.</i>'],
    contact: [
      'CONTACT',
      'Have a system<br>worth <i>building?</i>',
      'I’m open to AI engineering, machine learning, and data-focused opportunities.',
      'Name',
      'Email',
      'Message',
      'Send message',
      'Sending…',
      'Message sent. Thank you for reaching out!',
      'Email is not configured yet. Add your EmailJS values to the .env file.',
      'Something went wrong while sending. Please try again.',
      'Designed and built with intention',
    ],
    tags: {
      data: 'Data Engineering',
      bigquery: 'BigQuery',
      dbt: 'dbt',
      etl: 'ETL/ELT',
      ml: 'Machine Learning',
      cloud: 'Cloud',
      analytics: 'Analytics',
      'deep-learning': 'Deep Learning',
      'medical-imaging': 'Medical Imaging',
      segmentation: '3D Segmentation',
      diffusion: 'Diffusion Models',
      pytorch: 'PyTorch',
      'computer-vision': 'Computer Vision',
      cnn: 'CNN',
      tensorflow: 'TensorFlow',
      'multi-agent': 'Multi-Agent Systems',
      jade: 'JADE',
      'spring-boot': 'Spring Boot',
      opencv: 'OpenCV',
      'image-processing': 'Image Processing',
      'smart-cities': 'Smart Cities',
      bigdata: 'Big Data',
      llm: 'LLMs',
      streaming: 'Streaming',
      kafka: 'Kafka',
      spark: 'Spark',
      hadoop: 'Hadoop',
      streamlit: 'Streamlit',
      scraping: 'Web Scraping',
      oracle: 'Oracle SQL',
      predictive: 'Predictive Analytics',
      nlp: 'NLP',
      xgboost: 'XGBoost',
      'random-forest': 'Random Forest',
      powerbi: 'Power BI',
      optimization: 'Optimization',
      metaheuristics: 'Metaheuristics',
      pso: 'Particle Swarm Optimization',
      python: 'Python',
      customtkinter: 'CustomTkinter',
    },
    details: {
      supply: [
        'Supply Chain <i>Analytics & ML Platform</i>',
        'A data platform combining supply chain data preparation, BigQuery warehousing, dbt transformations, analytical data models, business KPIs, and predictive modeling for logistics and demand-related problems.',
        'Data platform · Analytics · Prediction',
      ],
      tumor: [
        '3D Tumor Segmentation & <i>Progression Prediction</i>',
        'Explores 3D tumor segmentation and conditional diffusion models for investigating tumor progression in volumetric medical images, with notebooks, saved checkpoints, training curves, and visual outputs.',
        'Volumetric medical imaging',
      ],
      pneumonia: [
        'Pneumonia Detection — <i>Multi-Agent System</i>',
        'Integrates a CNN for chest X-ray classification with a Python inference API and a Java multi-agent architecture to coordinate image analysis, decision-making, validation, and alerts.',
        'Computer vision · Coordinated analysis',
      ],
      parking: [
        'Smart Parking <i>Detection</i>',
        'Detects available and occupied parking spaces in video using predefined parking masks, image classification, and frame-difference optimization, with annotated video output and occupancy counters.',
        'Video analytics · Smart cities',
      ],
      political: [
        'Moroccan <i>Political Insight</i>',
        'A real-time pipeline that streams social media posts through Kafka, processes them with Spark and Hadoop, applies Mistral-based political classification and sentiment analysis, and visualizes trends in a Streamlit dashboard.',
        'Real-time social intelligence',
      ],
      jobs: [
        'Job Market <i>Intelligence System</i>',
        'Collects and structures job offers from multiple job platforms, stores them in Oracle, visualizes employment trends, predicts future job and skill demand, and recommends relevant offers based on CV content.',
        'From job listings to guidance',
      ],
      hr: [
        'HR Analytics & <i>Employee Attrition Prediction</i>',
        'Analyzes workforce data to identify employee attrition patterns, builds classification models using Random Forest and XGBoost, and presents insights and predictions through Power BI and Streamlit.',
        'Workforce insights · Prediction',
      ],
      queenswarm: [
        'QueenSwarm — PSO Solver for <i>N-Queens</i>',
        'Solves the N-Queens constraint problem using Particle Swarm Optimization, with configurable swarm parameters, conflict minimization, and an interactive chessboard visualization.',
        'Optimization · Interactive visualization',
      ],
    },
    skillGroups: [
      ['AI / Machine Learning', 'PyTorch, TensorFlow, scikit-learn, XGBoost, Hugging Face, Computer Vision, OCR, CNN, OpenCV, YOLOv8, MONAI.'],
      ['LLMs, RAG & agents', 'LLMs, RAG, NLP, embeddings, fine-tuning, LangChain, LangGraph.'],
      ['Data Engineering', 'Spark Streaming, Kafka, Hadoop HDFS, PySpark, dbt, ETL / ELT pipelines, MinIO.'],
      ['Backend & data', 'FastAPI, PostgreSQL, MongoDB, MySQL, Oracle DB, Firebase, BigQuery, SQL / PL/SQL.'],
      ['Engineering tools', 'Python, Git/GitHub, Docker, Linux, Power BI, Jupyter, VS Code.'],
    ],
    experienceItems: [
      {
        date: 'SEP 2026 — PRESENT',
        role: 'AI Research Intern',
        company: 'Labo de recherche Ibn Tofail & Labo ',
        description: 'Conducted a comparative study of AraBERT and XLM-RoBERTa to investigate which Transformer architecture performs best for Arabic fake news detection. Developed a data-centric pipeline involving dataset cleaning, merging, deduplication, and semantic reduction to construct a balanced dataset. Fine-tuned both pretrained models using PyTorch and Hugging Face Transformers, then evaluated and compared their classification performance using accuracy, precision, recall, F1-score, and ROC-AUC where applicable. Analyzed experimental results to assess model effectiveness for Arabic text classification and identify the most suitable architecture for the task.',
        logo: publicAsset('Uni.jpg'),
        logoAlt: 'Labo de recherche Ibn Tofail & Labo ',
      },
      {
        date: 'MAR 2026 — SEP 2026',
        role: 'AI Engineer Intern',
        company: 'Slaoui Global Capital · Casablanca',
        description: 'Developed a full-stack AI-powered insurance claims platform integrating intelligent document processing, multimodal damage assessment, and fraud detection. Combined Azure AI Document Intelligence (OCR) and Gemini to extract and structure insurance document data, and leveraged Computer Vision preprocessing with Gemini Vision to analyze accident images. Designed a LangGraph-based AI agent to orchestrate document, image, policy, and claim-history analysis, identify inconsistencies, and generate explainable investigation reports. Built backend services using FastAPI and PostgreSQL to integrate AI workflows into the platform.',
        logo: publicAsset('SL.jpeg'),
        logoAlt: 'Slaoui Global Capital logo',
      },
      {
        date: 'JUN 2025 — OCT 2025',
        role: 'AI Engineer Intern',
        company: 'XAI · Rabat',
        description: 'Designed and developed an end-to-end Retrieval-Augmented Generation (RAG) platform for context-aware question answering over news data. Built a data ingestion and semantic retrieval pipeline using NewsAPI, Google Generative AI embeddings, MongoDB Atlas, and K-Nearest Neighbors (KNN) vector search. Integrated Gemini with LangChain to generate context-grounded responses based on retrieved information. Deployed the solution through a FastAPI REST API, containerized the application with Docker, and implemented CI/CD automation using GitHub Actions.',
        logo: publicAsset('XAI.jpg'),
        logoAlt: 'XAI logo',
      },
    ],
    educationItems: [
      {
        date: '2024 — 2026',
        degree: 'Master’s in Big Data, AI & Advanced Applications',
        school: 'Ibn Tofail University · Expected graduation 2026',
      },
      {
        date: '2021 — 2024',
        degree: 'Bachelor’s in Mathematical & Computer Sciences',
        school: 'Ibn Tofail University',
      },
    ],
    certificateItems: [
      { title: 'AWS Educate — Introduction to Generative AI', driveUrl: '', url: 'https://www.credly.com/badges/d5578e2f-b446-4865-9730-3fecaa5ab90e/public_url', image: publicAsset('aws-educate-introduction-to-generative-ai.png') },
      { title: 'Learning AI Through Visualization — Columbia University', driveUrl: '', url: 'https://badges.plus.columbia.edu/0c0fb753-093e-4b88-960b-c2974aae2091#acc.MXOx9UjA', image: publicAsset('columbia certifecate.png') },
      { title: 'Introduction to Artificial Intelligence — LinkedIn Learning', driveUrl: '', url: 'https://www.linkedin.com/learning/certificates/e2541c1d527cc45811bb5209a032df70720109deef2133ca18cb8ed5448d9054?trk=share_certificate', image: publicAsset('intro_to_AI_certif.jpg') },
      { title: 'Introduction to Career Skills in Data Analytics — LinkedIn Learning', driveUrl: '', url: 'https://www.linkedin.com/learning/certificates/655e6e108c03d0e941f0df0ac01b7018597090e01fea253e536d49db6f1e1219?trk=share_certificate', image: publicAsset('data_analytics_certif.jpg') },
      { title: 'TensorFlow: Working With NLP — LinkedIn Learning', driveUrl: '', url: 'https://www.linkedin.com/learning/certificates/c237ff8508a33c0ce2a371216442d6f7c569af2e75a4623144e7a452742f83d5?trk=share_certificate', image: publicAsset('Tenserflow_certif.jpg') },
    ],
  },
  fr: {
    nav: ['Formation', 'Expérience', 'Projets', 'Compétences', 'Certificats', 'Approche', 'Contact'],
    hero: [
      "INGÉNIEURE DE DONNÉES ET D'IA · MAROC",
      'MERIAM<br><i>SIKINI</i>',
      'Je conçois des systèmes intelligents qui relient machine learning, ingénierie des données et logiciel pour créer des applications IA concrètes.',
      'Découvrir mes projets',
      'Voir le CV',
    ],
    vision: [
      'VISION',
      'Des données brutes<br>à une <i>intelligence utile.</i>',
      'J’aborde l’IA comme une discipline d’ingénierie : des données fiables, une évaluation explicite, des capacités de modèles et des interfaces réellement utilisables.',
      'Mon travail couvre les pipelines de données, les systèmes de recherche, la vision par ordinateur et les couches applicatives orientées production - pour transformer des entrées complexes en décisions et outils utiles.',
    ],
    education: ['FORMATION', 'Les fondations<br>de <i>mon parcours.</i>'],
    experience: ['EXPÉRIENCE', 'Des systèmes<br><i>en situation réelle.</i>'],
    work: [
      'PROJETS SÉLECTIONNÉS',
      'Des systèmes aux<br><i>contraintes réelles.</i>',
      'Des projets documentés en données, IA et analytique appliquée.',
      'Tous les projets',
      'Dépôt',
    ],
    approach: [
      'APPROCHE D’INGÉNIERIE',
      'Un système est plus<br>que son <i>modèle.</i>',
      'L’implémentation change selon le problème. Le principe reste le même : rendre les flux de données visibles, garder les décisions explicables et concevoir pour les personnes qui utilisent le système.',
    ],
    skills: ['COMPÉTENCES', 'Des outils pour<br><i>tout le système.</i>'],
    certificates: ['CERTIFICATS', 'Apprendre, <i>concrètement.</i>'],
    contact: [
      'CONTACT',
      'Un système qui mérite<br>d’être <i>construit ?</i>',
      'Je suis ouverte aux opportunités en ingénierie IA, machine learning et data.',
      'Nom',
      'E-mail',
      'Message',
      'Envoyer le message',
      'Envoi…',
      'Message envoyé. Merci de m’avoir contactée !',
      'L’e-mail n’est pas encore configuré. Ajoutez vos paramètres EmailJS dans le fichier .env.',
      'Une erreur est survenue lors de l’envoi. Veuillez réessayer.',
      'Conçu et développé avec intention',
    ],
    tags: {
      data: 'Ingénierie des données',
      bigquery: 'BigQuery',
      dbt: 'dbt',
      etl: 'ETL/ELT',
      ml: 'Machine Learning',
      cloud: 'Cloud',
      analytics: 'Analytique',
      'deep-learning': 'Deep Learning',
      'medical-imaging': 'Imagerie médicale',
      segmentation: 'Segmentation 3D',
      diffusion: 'Modèles de diffusion',
      pytorch: 'PyTorch',
      'computer-vision': 'Vision par ordinateur',
      cnn: 'CNN',
      tensorflow: 'TensorFlow',
      'multi-agent': 'Systèmes multi-agents',
      jade: 'JADE',
      'spring-boot': 'Spring Boot',
      opencv: 'OpenCV',
      'image-processing': 'Traitement d’image',
      'smart-cities': 'Villes intelligentes',
      bigdata: 'Big Data',
      llm: 'LLMs',
      streaming: 'Streaming',
      kafka: 'Kafka',
      spark: 'Spark',
      hadoop: 'Hadoop',
      streamlit: 'Streamlit',
      scraping: 'Web scraping',
      oracle: 'Oracle SQL',
      predictive: 'Analytique prédictive',
      nlp: 'NLP',
      xgboost: 'XGBoost',
      'random-forest': 'Random Forest',
      powerbi: 'Power BI',
      optimization: 'Optimisation',
      metaheuristics: 'Métaheuristiques',
      pso: 'Optimisation par essaim particulaire',
      python: 'Python',
      customtkinter: 'CustomTkinter',
    },
    details: {
      supply: [
        'Supply Chain <i>Analytics & ML Platform</i>',
        'Une plateforme de données qui combine préparation des données supply chain, entrepôt BigQuery, transformations dbt, modèles analytiques, KPI métier et modélisation prédictive pour la logistique et la demande.',
        'Plateforme data · Analytique · Prédiction',
      ],
      tumor: [
        'Segmentation 3D des tumeurs & <i>prédiction de progression</i>',
        'Explore la segmentation 3D des tumeurs et les modèles de diffusion conditionnels pour étudier leur progression dans des images médicales volumiques, avec notebooks, checkpoints, courbes d’entraînement et visualisations.',
        'Imagerie médicale volumique',
      ],
      pneumonia: [
        'Détection de pneumonie — <i>Système multi-agents</i>',
        'Associe un CNN pour classifier les radiographies thoraciques à une API d’inférence Python et une architecture multi-agents Java pour coordonner l’analyse, la décision, la validation et les alertes.',
        'Vision par ordinateur · Analyse coordonnée',
      ],
      parking: [
        'Détection de <i>stationnement intelligent</i>',
        'Détecte les places libres et occupées dans des vidéos à l’aide de masques prédéfinis, de classification d’images et d’optimisation par différence entre les images, avec annotations et compteurs.',
        'Analyse vidéo · Villes intelligentes',
      ],
      political: [
        'Moroccan <i>Political Insight</i>',
        'Un pipeline temps réel diffuse des publications via Kafka, les traite avec Spark et Hadoop, applique une classification politique et une analyse de sentiment basées sur Mistral, puis visualise les tendances dans Streamlit.',
        'Analyse sociale en temps réel',
      ],
      jobs: [
        'Système d’intelligence du <i>marché de l’emploi</i>',
        'Collecte et structure des offres de plusieurs plateformes, les stocke dans Oracle, visualise les tendances, prédit les métiers et compétences recherchés et recommande des offres selon le CV.',
        'Des offres à l’orientation',
      ],
      hr: [
        'Analytique RH & <i>prédiction de l’attrition</i>',
        'Analyse les données RH pour identifier les facteurs d’attrition, entraîne des modèles Random Forest et XGBoost, puis présente les analyses et prédictions avec Power BI et Streamlit.',
        'Analytique RH · Prédiction',
      ],
      queenswarm: [
        'QueenSwarm — solveur PSO pour <i>N-Reines</i>',
        'Résout le problème des N-Reines avec Particle Swarm Optimization, des paramètres configurables, la minimisation des conflits et un échiquier interactif.',
        'Optimisation · Visualisation interactive',
      ],
    },
    skillGroups: [
      ['IA / Machine Learning', 'PyTorch, TensorFlow, scikit-learn, XGBoost, Hugging Face, vision par ordinateur, OCR, CNN, OpenCV, YOLOv8, MONAI.'],
      ['LLMs, RAG & agents', 'LLMs, RAG, NLP, embeddings, fine-tuning, LangChain, LangGraph.'],
      ['Ingénierie des données', 'Spark Streaming, Kafka, Hadoop HDFS, PySpark, dbt, pipelines ETL / ELT, MinIO.'],
      ['Backend & données', 'FastAPI, PostgreSQL, MongoDB, MySQL, Oracle DB, Firebase, BigQuery, SQL / PL/SQL.'],
      ['Outils d’ingénierie', 'Python, Git/GitHub, Docker, Linux, Power BI, Jupyter, VS Code.'],
    ],
    experienceItems: [
      {
        date: 'SEP 2026 —  PRESENT',
        role: 'Stagiaire chercheuse en IA',
        company: 'Laboratoires de recherche Ibn Tofail & ',
        description: 'Développement d’une plateforme intelligente de gestion des sinistres automobiles intégrant l’automatisation documentaire, l’analyse multimodale et la détection de fraude. Mise en œuvre de solutions OCR avec Azure AI Document Intelligence et d’extraction et de structuration de données avec Gemini. Intégration de l’analyse d’images d’accidents à l’aide de techniques de prétraitement en vision par ordinateur et de Gemini Vision. Conception d’un agent IA basé sur LangGraph pour analyser les documents, les images, les contrats et l’historique des sinistres, détecter les incohérences et générer des rapports d’investigation explicables. Développement des services backend avec FastAPI et PostgreSQL.',
        logo: publicAsset('Uni.jpg'),
        logoAlt: 'Logo de Slaoui Global Capital',
      },
      {
        date: 'MARS 2026 —  SEP 2026',
        role: 'Stagiaire Ingénieure AI',
        company: 'Slaoui Global Capital · Casablanca',
        description: 'Développement d’une plateforme intelligente de gestion des sinistres automobiles intégrant l’automatisation documentaire, l’analyse multimodale et la détection de fraude. Mise en œuvre de solutions OCR avec Azure AI Document Intelligence et d’extraction et de structuration de données avec Gemini. Intégration de l’analyse d’images d’accidents à l’aide de techniques de prétraitement en vision par ordinateur et de Gemini Vision. Conception d’un agent IA basé sur LangGraph pour analyser les documents, les images, les contrats et l’historique des sinistres, détecter les incohérences et générer des rapports d’investigation explicables. Développement des services backend avec FastAPI et PostgreSQL.',
        logo: publicAsset('SL.jpeg'),
        logoAlt: 'Logo de Slaoui Global Capital',
      },
      {
        date: 'JUIN 2025 — OCT. 2025',
        role: 'Stagiaire AI Engineer',
        company: 'XAI · Rabat',
        description: 'Conception et développement d’une plateforme de génération augmentée par récupération (RAG) permettant de produire des réponses contextualisées à partir de données issues de l’actualité. Mise en place d’un pipeline d’ingestion et de recherche sémantique combinant NewsAPI, les embeddings de Google Generative AI, MongoDB Atlas et la recherche vectorielle par K plus proches voisins (KNN). Intégration de Gemini avec LangChain pour générer des réponses fondées sur les informations récupérées. Développement d’une API REST avec FastAPI, conteneurisation de l’application avec Docker et automatisation du pipeline CI/CD avec GitHub Actions.',
        logo: publicAsset('XAI.jpg'),
        logoAlt: 'Logo de XAI',
      },
    ],
    educationItems: [
      {
        date: '2024 — 2026',
        degree: 'Master Big Data, IA & Applications Avancées',
        school: 'Université Ibn Tofail · Diplôme prévu en 2026',
      },
      {
        date: '2021 — 2024',
        degree: 'Licence Sciences Mathématiques et Informatiques',
        school: 'Université Ibn Tofail',
      },
    ],
    certificateItems: [
      { title: 'AWS Educate — Introduction to Generative AI', driveUrl: '', url: 'https://www.credly.com/badges/d5578e2f-b446-4865-9730-3fecaa5ab90e/public_url', image: publicAsset('aws-educate-introduction-to-generative-ai.png') },
      { title: 'Learning AI Through Visualization — Columbia University', driveUrl: '', url: 'https://badges.plus.columbia.edu/0c0fb753-093e-4b88-960b-c2974aae2091#acc.MXOx9UjA', image: publicAsset('columbia certifecate.png') },
      { title: 'Introduction to Artificial Intelligence — LinkedIn Learning', driveUrl: '', url: 'https://www.linkedin.com/learning/certificates/e2541c1d527cc45811bb5209a032df70720109deef2133ca18cb8ed5448d9054?trk=share_certificate', image: publicAsset('intro_to_AI_certif.jpg') },
      { title: 'Introduction to Career Skills in Data Analytics — LinkedIn Learning', driveUrl: '', url: 'https://www.linkedin.com/learning/certificates/655e6e108c03d0e941f0df0ac01b7018597090e01fea253e536d49db6f1e1219?trk=share_certificate', image: publicAsset('data_analytics_certif.jpg') },
      { title: 'TensorFlow: Working With NLP — LinkedIn Learning', driveUrl: '', url: 'https://www.linkedin.com/learning/certificates/c237ff8508a33c0ce2a371216442d6f7c569af2e75a4623144e7a452742f83d5?trk=share_certificate', image: publicAsset('Tenserflow_certif.jpg') },
    ],
  },
};

const HTML = ({ children }) => <span dangerouslySetInnerHTML={{ __html: children }} />;

function drivePreviewUrl(link) {
  const value = link.trim();
  if (!value) return '';
  if (/^https?:\/\//i.test(value)) {
    const id = value.match(/(?:\/file\/d\/|[?&]id=)([^/?&]+)/)?.[1];
    if (id) return `https://drive.google.com/file/d/${id}/preview`;
    return value.replace(/\/view(?:\?.*)?$/, '/preview');
  }
  return `https://drive.google.com/file/d/${value}/preview`;
}

function App() {
  const [lang, setLang] = useState(localStorage.getItem('portfolio-language') || 'en');
  const [filter, setFilter] = useState('all');
  const [menu, setMenu] = useState(false);
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('portfolio-language', lang);
    document.title = lang === 'fr' ? 'Meriam Sikini - Ingénieure IA' : 'Meriam Sikini - AI Engineer';
  }, [lang]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('in')),
      { threshold: 0.12 },
    );
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let scrollFrame = 0;
    const basePath = deploymentBase;
    const getPathForSection = section => (
      section === 'top'
        ? `${basePath}/` || '/'
        : `${basePath}/${section}`
    );

    const updatePathFromScroll = () => {
      scrollFrame = 0;
      const activationLine = window.innerHeight * 0.35;
      let activeSection = 'top';

      routeSections.slice(1).forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section && section.getBoundingClientRect().top <= activationLine) {
          activeSection = sectionId;
        }
      });

      const nextPath = `${getPathForSection(activeSection)}${window.location.search}`;
      if (window.location.pathname !== getPathForSection(activeSection)) {
        window.history.replaceState(null, '', nextPath);
      }
    };

    const schedulePathUpdate = () => {
      if (!scrollFrame) {
        scrollFrame = window.requestAnimationFrame(updatePathFromScroll);
      }
    };

    const scrollToPath = () => {
      const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
      const route = basePath && pathname.startsWith(`${basePath}/`)
        ? pathname.slice(basePath.length + 1)
        : basePath && pathname === basePath
          ? ''
          : pathname.replace(/^\/+/, '');
      const targetSection = routeSections.includes(route) ? route : 'top';
      document.getElementById(targetSection)?.scrollIntoView({ behavior: 'instant' });
      schedulePathUpdate();
    };

    window.addEventListener('scroll', schedulePathUpdate, { passive: true });
    window.addEventListener('popstate', scrollToPath);
    scrollToPath();

    return () => {
      window.removeEventListener('scroll', schedulePathUpdate);
      window.removeEventListener('popstate', scrollToPath);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
    };
  }, []);

  const visibleProjects = projects.filter(project => filter === 'all' || project.tags.includes(filter));

  async function handleContactSubmit(event) {
    event.preventDefault();
    setFormStatus({ type: '', message: '' });

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setFormStatus({ type: 'error', message: t.contact[9] });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const templateParams = {
      from_name: formData.get('from_name'),
      from_email: formData.get('from_email'),
      message: formData.get('message'),
    };

    setSending(true);
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: emailJsConfig.serviceId,
          template_id: emailJsConfig.templateId,
          user_id: emailJsConfig.publicKey,
          template_params: templateParams,
        }),
      });

      if (!response.ok) {
        const responseMessage = (await response.text()).trim();
        throw new Error(responseMessage || `EmailJS returned HTTP ${response.status}`);
      }

      form.reset();
      setFormStatus({ type: 'success', message: t.contact[8] });
    } catch (error) {
      console.error('EmailJS message delivery failed:', error);
      setFormStatus({
        type: 'error',
        message: t.contact[10],
        detail: error instanceof Error ? error.message : String(error),
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <a className="skip" href="#main">{lang === 'fr' ? 'Aller au contenu' : 'Skip to content'}</a>
      <header>
        <a className="brand" href="#top">MERIAM <span>SIKINI</span></a>
        <nav aria-label={lang === 'fr' ? 'Navigation principale' : 'Primary navigation'}>
          {navigation.map((section, index) => (
            <a key={section} href={`#${section}`}>{t.nav[index]}</a>
          ))}
        </nav>
        <div className="actions">
          <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
          /
          <button className={lang === 'fr' ? 'on' : ''} onClick={() => setLang('fr')} aria-pressed={lang === 'fr'}>FR</button>
          <button className="hamb" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label={lang === 'fr' ? 'Ouvrir le menu' : 'Open menu'}>
            <b></b><b></b>
          </button>
        </div>
        {menu && (
          <nav className="mobile" aria-label={lang === 'fr' ? 'Navigation mobile' : 'Mobile navigation'}>
            {navigation.map((section, index) => (
              <a key={section} onClick={() => setMenu(false)} href={`#${section}`}>{t.nav[index]}</a>
            ))}
          </nav>
        )}
      </header>
      <main id="main">
        <section id="top" className="hero">
          <div className="media">
            <video autoPlay muted loop playsInline poster={`${import.meta.env.BASE_URL}assets/hero-poster.jpg`}>
              <source src={`${import.meta.env.BASE_URL}assets/hero-ai-systems.mp4`} type="video/mp4" />
            
            </video>
          </div>
          <div className="shade" />
          <div className="heroText reveal">
            <p className="eyebrow">{t.hero[0]}</p>
            <h1><HTML>{t.hero[1]}</HTML></h1>
            <p>{t.hero[2]}</p>
            <div>
              <a className="cta" href="#work">{t.hero[3]} <b>↘</b></a>
              <a className="link" href="https://docs.google.com/document/d/1zByEoOyPlCQHJ3QNPegcf49-jtActAJW5HmgvOBdQ28/edit?usp=sharing" target="_blank" rel="noreferrer">{t.hero[4]} ↗</a>
            </div>
          </div>
        </section>

        <section id="vision" className="intro pad">
          <p className="index">01 / {t.vision[0]}</p>
          <div className="two reveal">
            <h2><HTML>{t.vision[1]}</HTML></h2>
            <div>
              <p>{t.vision[2]}</p>
              <p>{t.vision[3]}</p>
              <a className="link dark" href="#approach">{lang === 'fr' ? 'Mon approche' : 'How I build'} ↓</a>
            </div>
          </div>
        </section>

        <section id="education" className="background pad">
          <div className="heading reveal">
            <p className="index">02 / {t.education[0]}</p>
            <h2><HTML>{t.education[1]}</HTML></h2>
          </div>
          <div className="edu">
            {t.educationItems.map(item => (
              <article key={item.date}>
                <img className="education-logo" src={publicAsset('Uni.jpg')} alt={lang === 'fr' ? 'Logo de l’Université Ibn Tofail' : 'Ibn Tofail University logo'} loading="lazy" />
                <small className="education-date">{item.date}</small>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="background pad experience-section">
          <div className="heading reveal">
            <p className="index">03 / {t.experience[0]}</p>
            <h2><HTML>{t.experience[1]}</HTML></h2>
          </div>
          <div className="timeline">
            {t.experienceItems.map(item => (
              <article key={item.company}>
                <small>{item.date}</small>
                <div className="experience-company">
                  <img src={item.logo} alt={item.logoAlt} loading="lazy" />
                  <div><h3>{item.role}</h3><p>{item.company}</p></div>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="work pad">
          <div className="section-video-banner work-banner">
            <video className="section-background-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
              <source src={`${import.meta.env.BASE_URL}videos/6153453-sd_640_338_25fps.mp4`} type="video/mp4" />
            </video>
            <div className="section-background-shade" />
            <div className="section-video-content reveal">
              <p className="index">04 / {t.work[0]}</p>
              <h2><HTML>{t.work[1]}</HTML></h2>
              <p>{t.work[2]}</p>
            </div>
          </div>
          <div className="filters" aria-label={lang === 'fr' ? 'Filtres des projets' : 'Project filters'}>
            <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>{t.work[3]}</button>
            {filters.map(tag => (
              <button className={filter === tag ? 'active' : ''} onClick={() => setFilter(tag)} key={tag}>
                {t.tags[tag]}
              </button>
            ))}
          </div>
          <div className="projectList">
            {visibleProjects.map(project => {
              const detail = t.details[project.id];
              return (
                <article className="project" key={project.id}>
                  <div className={`cover ${project.img ? '' : 'dataCover'}`}>
                    {project.img
                      ? <img loading="lazy" src={project.img} alt={detail[0].replace(/<[^>]*>/g, '')} />
                      : <><span></span><small>{project.tags.slice(0, 3).map(tag => t.tags[tag]).join(' · ')}</small></>}
                  </div>
                  <div className="pbody">
                    <small>{project.number}</small>
                    <h3><HTML>{detail[0]}</HTML></h3>
                    <p>{detail[1]}</p>
                    <small>{detail[2]}</small>
                  </div>
                  <div className="pside">
                    <div>{project.tags.map(tag => <em key={tag}>{t.tags[tag]}</em>)}</div>
                    <a href={project.url} target="_blank" rel="noreferrer">{t.work[4]} <b>↗</b></a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="skills" className="caps pad">
          <div className="heading reveal">
            <p className="index">05 / {t.skills[0]}</p>
            <h2><HTML>{t.skills[1]}</HTML></h2>
          </div>
          <div className="capList">
            {t.skillGroups.map((group, index) => (
              <article key={group[0]}><small>0{index + 1}</small><h3>{group[0]}</h3><p>{group[1]}</p></article>
            ))}
          </div>
        </section>

        <section id="certificates" className="certificates pad">
          <div className="heading reveal">
            <p className="index">06 / {t.certificates[0]}</p>
            <h2><HTML>{t.certificates[1]}</HTML></h2>
          </div>
          <p className="certificate-hint">
            {lang === 'fr'
              ? 'Survolez un titre ou sélectionnez-le au clavier pour afficher le certificat.'
              : 'Hover over a title or focus it with the keyboard to preview its certificate.'}
          </p>
          <div className="certificate-grid">
            {t.certificateItems.map(certificate => {
              const previewUrl = drivePreviewUrl(certificate.driveUrl);
              return (
                <article className="cert-card" key={certificate.title} tabIndex="0">
                  <h3>
                    <a className="certificate-title-link" href={certificate.url} target="_blank" rel="noreferrer">
                      {certificate.title}
                    </a>
                  </h3>
                  <span className="certificate-arrow" aria-hidden="true">↗</span>
                  <div className="cert-preview">
                    {previewUrl
                      ? <iframe title={`${certificate.title} certificate preview`} src={previewUrl} loading="lazy" allow="autoplay" />
                      : certificate.image
                        ? <img src={certificate.image} alt={`${certificate.title} certificate`} loading="lazy" />
                        : <p>{lang === 'fr' ? 'Ajoutez ici le lien Drive du certificat.' : 'Add the certificate’s Google Drive link here.'}</p>}
                    <a className="certificate-verify-link" href={certificate.url} target="_blank" rel="noreferrer">
                      {lang === 'fr' ? 'Vérifier le certificat' : 'Verify certificate'} <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="approach" className="approach pad">
          <div className="section-video-banner approach-banner">
            <video className="section-background-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
              <source src={`${import.meta.env.BASE_URL}videos/12433512-20s.mp4`} type="video/mp4" />
            </video>
            <div className="section-background-shade" />
            <div className="section-video-content reveal">
              <p className="index">07 / {t.approach[0]}</p>
              <h2><HTML>{t.approach[1]}</HTML></h2>
            </div>
          </div>
          <div className="flow reveal">
            {(lang === 'fr' ? ['Ingestion', 'Préparer', 'Raisonner', 'Livrer', 'Évaluer'] : ['Ingest', 'Prepare', 'Reason', 'Deliver', 'Evaluate']).map((label, index) => (
              <React.Fragment key={label}>
                <div>
                  <small>0{index + 1}</small>
                  <strong>{label}</strong>
                  <span>{(lang === 'fr'
                    ? ['Données sources', 'Qualité & structure', 'Modèles & logique', 'API & interfaces', 'Boucles de retour']
                    : ['Source data', 'Quality & structure', 'Models & logic', 'APIs & interfaces', 'Feedback loops'])[index]}</span>
                </div>
                {index < 4 && <i />}
              </React.Fragment>
            ))}
          </div>
          <p className="note reveal">{t.approach[2]}</p>
        </section>

        <section id="contact" className="contact pad">
          <div className="orb" />
          <div className="contact-content reveal">
            <p className="index">09 / {t.contact[0]}</p>
            <h2><HTML>{t.contact[1]}</HTML></h2>
            <p>{t.contact[2]}</p>
            <a className="email" href="mailto:meriamsikini@gmail.com">meriamsikini@gmail.com ↗</a>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label>{t.contact[3]}<input name="from_name" type="text" autoComplete="name" required /></label>
              <label>{t.contact[4]}<input name="from_email" type="email" autoComplete="email" required /></label>
              <label>{t.contact[5]}<textarea name="message" rows="5" required /></label>
              <button type="submit" disabled={sending}>{sending ? t.contact[7] : t.contact[6]} <span aria-hidden="true">↗</span></button>
              {formStatus.message && (
                <p className={`form-status ${formStatus.type}`} role="status" aria-live="polite">
                  {formStatus.message}
                  {formStatus.detail && <span className="form-status-detail"> {formStatus.detail}</span>}
                </p>
              )}
            </form>
            <div className="social">
              <a href="https://github.com/Meriamsikini" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/meriam-sikini/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://docs.google.com/document/d/1zByEoOyPlCQHJ3QNPegcf49-jtActAJW5HmgvOBdQ28/edit?usp=sharing" target="_blank" rel="noreferrer">{lang === 'fr' ? 'CV' : 'Resume'} ↗</a>
            </div>
          </div>
          <footer>© {new Date().getFullYear()} MERIAM SIKINI <span>{t.contact[11]}</span></footer>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
