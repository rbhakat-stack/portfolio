
import { ExperienceItem, EducationItem, TestimonialItem, CertificationItem } from './types';

export const PROFILE = {
  name: "Ranabir Bhakat",
  headline: "Partner at ZS Associates | Technology Consulting Leader | Life Sciences Strategy",
  location: "New York City Metropolitan Area",
  about: [
    "Ranabir is a Partner with ZS Associates and is a Technology Consulting Leader for large Life Sciences organizations. With a distinguished tenure exceeding two and a half decades, he has forged strategic partnerships with numerous global Life Sciences companies, guiding them towards achieving tangible business outcomes.",
    "He has helped executive teams through complex transformations that modernize commercial models, elevate field and medical effectiveness, reimagine patient support, and harmonize omnichannel engagement. These outcomes are rooted in the strategic deployment and optimization of investments in digital technologies, AI, and other technological innovations, directly aligning with the organizations' growth objectives.",
    "A trusted C-suite advisor, Ranabir blends business strategy with technical acumen to architect next-generation data ecosystems, design AI-enabled operating models, and deploy digital platforms that accelerate decision-making across the Commercial, Medical, and Market Access value chain.",
    "Within ZS’s Digital & Technology business, Ranabir helps shape and execute the firm’s strategy, leading multi-year go-to-market programs and driving innovation in data, cloud, and AI enablement. He has cultivated high-impact partnerships with AWS, Microsoft, Databricks, Snowflake, and Salesforce—combining cutting-edge capabilities with Life Sciences context to deliver transformation at scale.",
    "A forward-looking leader, Ranabir is passionate about building agentic AI applications, data-product-driven foundations, and composable technology ecosystems that unlock the next wave of Commercial excellence, medical impact, and patient-centric innovation."
  ],
  avatarUrl: "profile.jpg", 
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'zs',
    company: "ZS Associates",
    role: "Partner & Technology Leader",
    period: "Sep 2021 - Present",
    location: "NYC Area",
    description: [
      "Advise C-suite stakeholders on enterprise transformation across data, digital, and AI, architecting strategies that reshape customer understanding and optimize engagement.",
      "Span the full Life Sciences Commercial spectrum, including Sales, Marketing, Medical Affairs, Patient Services, and Market Access.",
      "Modernize data ecosystems and build scalable digital foundations leveraging ZS’s consulting, analytics, and technology capabilities.",
      "Design and deliver solutions using cloud computing, data mesh, data fabric, Classical AI, Generative AI, and Agentic AI to drive measurable performance across the value chain."
    ]
  },
  {
    id: 'ey',
    company: "Ernst & Young",
    role: "Managing Director",
    period: "Jun 2017 - Sep 2021",
    location: "NYC Area",
    description: [
      "Led North America Data & Analytics practice for emerging technologies in Life Sciences.",
      "Architected enterprise-level omnichannel customer experience platforms for Fortune 500 pharmaceutical leaders.",
      "Bridged the gap between legacy data systems and modern AI-ready operating models."
    ]
  },
  {
    id: 'ibm',
    company: "IBM Global Business Services",
    role: "Associate Partner",
    period: "May 2008 - Jun 2017",
    location: "NYC Area",
    description: [
      "Managed multi-million dollar portfolios for global leaders like Medtronic and J&J.",
      "Focused on Master Data Management and Big Data strategy to accelerate R&D and Commercial excellence.",
      "Top-quartile sales performer and client advisor for IBM's flagship analytics programs."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'columbia',
    school: "Columbia Business School",
    degree: "MBA",
    details: "Finance and Strategy"
  },
  {
    id: 'iit',
    school: "Indian Institute of Technology (I.I.T.), Kharagpur",
    degree: "B.Tech",
    details: "Electrical Engineering"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'oxford',
    name: "Strategic Business Leadership Programme",
    issuer: "Saïd Business School, University of Oxford",
    date: "2025"
  },
  {
    id: 'harvard',
    name: "Harvard Leadership Program",
    issuer: "Harvard Business Publishing",
    date: "2019"
  }
];

export const SKILLS: string[] = [
  "Enterprise Data Strategy",
  "Cloud Data Platforms",
  "Data Mesh & Fabric",
  "Classical & Generative AI",
  "Agentic AI Frameworks",
  "Intelligent Automation",
  "Business Intelligence",
  "C-Suite Advisory",
  "Life Sciences Commercial Technology"
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'alex',
    name: "Alex Jacob",
    role: "Executive | Patient Support Strategy",
    relation: "Executive Mentorship",
    text: "Ranabir is a leader who is truly invested in the lives of his people. He bridges the gap between high-level strategy and genuine support, encouraging teams to exceed even their own aspirations."
  },
  {
    id: 'zhiyang',
    name: "Zhiyang Yu",
    role: "Executive Director, Lenovo",
    relation: "Leadership Impact",
    text: "A natural leader who excels in any high-stakes executive role. His attention to detail goes beyond project management into true business value creation."
  },
  {
    id: 'sankett',
    name: "Sankett Deshpande",
    role: "Marketing Leader",
    relation: "Strategic Vision",
    text: "Ranabir has incredible clarity about the desired end point of any transformation. He possesses both the visionary mindset for the goal and the tactical plan to get there."
  }
];
