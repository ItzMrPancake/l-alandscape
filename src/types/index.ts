export interface ServiceItem {
  id: string;
  title: string;
  target: 'Residential' | 'Commercial' | 'Commercial & Residential';
  shortDescription: string;
  fullDescription: string;
  features: string[];
  idealFor: string;
  seasonality: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'sod' | 'creek' | 'maintenance' | 'cleanup' | 'washing';
  categoryLabel: string;
  location: string;
  image: string;
  beforeImage?: string;
  hasBeforeAfter?: boolean;
  completionDate: string;
  description: string;
  highlights: string[];
  clientQuote?: string;
  clientName?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  roleOrRelation: string;
  location?: string;
  serviceReceived: string;
  rating: number;
  date: string;
  verified: boolean;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: 'Eugene' | 'Springfield' | 'Surrounding Lane County';
  propertyType: 'residential' | 'commercial';
  selectedServices: string[];
  estimatedSquareFootage: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  heardAboutUs?: string;
}
