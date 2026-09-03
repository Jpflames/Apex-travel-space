export type Country = {
  id: string;
  name: string;
  slug: string;
  flagUrl: string;
  heroImageUrl: string;
  overview: string;
  studyBenefits: string;
  popularPrograms: string;
  institutions: string;
  admissionRequirements: string;
  visaInformation: string;
  estimatedTuition: string;
  livingCosts: string;
  scholarships: string;
  accommodation: string;
  applicationProcess: string;
  faqs: { question: string; answer: string }[];
  published: boolean;
  region: string;
  createdAt: number;
  updatedAt: number;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImageUrl: string;
  category: string;
  author: string;
  tags: string[];
  readingTime: string;
  seoTitle: string;
  seoDescription: string;
  published: boolean;
  createdAt: number;
  updatedAt: number;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  published: boolean;
};

export type DownloadResource = {
  id: string;
  title: string;
  description: string;
  category: string;
  fileUrl: string;
  thumbnailUrl?: string;
  fileSize: string;
  downloadCount: number;
  published: boolean;
  createdAt: number;
};

export type Consultation = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  whatsapp?: string;
  country: string;
  serviceId: string;
  serviceName: string;
  consultationType?: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  timezone: string;
  duration: number; // minutes
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'rescheduled' | 'no-show';
  notes?: string;
  adminNotes?: string;
  assignedConsultantId?: string;
  createdAt: number;
  updatedAt: number;
};
