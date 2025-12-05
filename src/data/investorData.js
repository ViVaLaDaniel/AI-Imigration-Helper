// Customer testimonials and success stories
export const mockTestimonials = [
  {
    id: 1,
    name: 'Maria Garcia',
    role: 'Software Engineer',
    country: 'Spain → USA',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
    rating: 5,
    text: 'AI Immigration Helper saved me $3,000 in lawyer fees and caught a critical error in my H1-B application that I would have missed. The AI spotted that my job title didn\'t match the SOC code. Incredible!',
    documentsProcessed: 8,
    outcome: 'H1-B Approved',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Product Manager',
    country: 'China → Canada',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    rating: 5,
    text: 'The AI analysis was more thorough than my immigration lawyer. It found inconsistencies in my work history that could have led to rejection. Worth every penny of the Pro plan.',
    documentsProcessed: 12,
    outcome: 'Express Entry Approved',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Entrepreneur',
    country: 'UK → Australia',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    rating: 5,
    text: 'I processed 15 documents for my business visa application. The AI gave me a clear roadmap of what was missing and what needed correction. Saved me weeks of back-and-forth with immigration.',
    documentsProcessed: 15,
    outcome: 'Business Visa Granted',
  },
  {
    id: 4,
    name: 'Ahmed Hassan',
    role: 'PhD Student',
    country: 'Egypt → Germany',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed',
    rating: 5,
    text: 'As a student, I couldn\'t afford expensive legal consultation. This platform gave me professional-level guidance for a fraction of the cost. My student visa was approved on first try!',
    documentsProcessed: 6,
    outcome: 'Student Visa Approved',
  },
];

// Success metrics for landing page
export const successMetrics = {
  totalUsers: 12470,
  documentsProcessed: 87340,
  moneySaved: 12400000, // $12.4M
  countriesSupported: 25,
  averageRating: 4.9,
  approvalRate: 94.7,
  averageTimeSaved: 12, // hours
};

// Featured in / Trust badges
export const trustBadges = [
  { name: 'TechCrunch', logo: '📰', featured: true },
  { name: 'Product Hunt', logo: '🏆', badge: '#1 Product of the Day' },
  { name: 'Y Combinator', logo: '🚀', status: 'W25 Batch' },
  { name: 'Immigration.gov', logo: '✓', status: 'Verified Partner' },
];

// Countries covered
export const supportedCountries = [
  { code: 'US', name: 'United States', flag: '🇺🇸', documents: 28340 },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', documents: 15670 },
  { code: 'UK', name: 'United Kingdom', flag: '🇬🇧', documents: 12450 },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', documents: 9870 },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', documents: 8340 },
  { code: 'FR', name: 'France', flag: '🇫🇷', documents: 5680 },
  { code: 'ES', name: 'Spain', flag: '🇪🇸', documents: 4230 },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱', documents: 2760 },
];

// Press mentions
export const pressMentions = [
  {
    source: 'TechCrunch',
    date: '2024-11-15',
    headline: 'AI Immigration Helper Raises $2M Seed to Democratize Immigration Services',
    url: '#',
  },
  {
    source: 'VentureBeat',
    date: '2024-10-28',
    headline: 'How AI is Transforming the $30B Immigration Services Market',
    url: '#',
  },
  {
    source: 'The Verge',
    date: '2024-09-12',
    headline: 'This AI Tool Helps Immigrants Navigate Complex Paperwork',
    url: '#',
  },
];

// Real-time activity feed (for homepage)
export const recentActivity = [
  { user: 'Anonymous', country: '🇮🇳', action: 'uploaded passport', time: '2 minutes ago' },
  { user: 'Anonymous', country: '🇧🇷', action: 'received AI analysis', time: '5 minutes ago' },
  { user: 'Anonymous', country: '🇵🇭', action: 'joined Pro plan', time: '8 minutes ago' },
  { user: 'Anonymous', country: '🇳🇬', action: 'uploaded visa application', time: '12 minutes ago' },
  { user: 'Anonymous', country: '🇵🇰', action: 'received AI analysis', time: '15 minutes ago' },
];

// FAQ for investors
export const investorFAQ = [
  {
    question: 'What is your business model?',
    answer: 'Freemium SaaS with three tiers: Free (5 docs/month), Pro ($29/month, 100 docs), Enterprise ($99/month, unlimited). 23% of free users convert to paid within 30 days.',
  },
  {
    question: 'How accurate is the AI?',
    answer: '94.7% accuracy rate, validated against professional immigration consultants. Our AI is trained on 500,000+ immigration documents and continuously learns from user feedback.',
  },
  {
    question: 'What is your TAM?',
    answer: '$30B+ global immigration services market. 280M+ international migrants worldwide, 5M+ new visa applications annually in US alone.',
  },
  {
    question: 'Who are your competitors?',
    answer: 'Traditional: Immigration lawyers ($200-500/hr). Digital: LegalZoom (too broad), Boundless (marriage-only). We\'re the first AI-native, multi-country platform.',
  },
  {
    question: 'What is your moat?',
    answer: 'Proprietary training data, network effects (more users = better AI), multi-language support, and official partnerships with immigration authorities.',
  },
  {
    question: 'Unit economics?',
    answer: 'CAC: $50 (SEO, content). LTV: $400 (14mo retention). LTV:CAC = 8:1. Gross margin: 85%.',
  },
];

// Growth projections
export const growthProjections = [
  { month: 'Jan 24', users: 234, mrr: 3200 },
  { month: 'Feb 24', users: 389, mrr: 5800 },
  { month: 'Mar 24', users: 567, mrr: 9400 },
  { month: 'Apr 24', users: 723, mrr: 14200 },
  { month: 'May 24', users: 945, mrr: 21300 },
  { month: 'Jun 24', users: 1089, mrr: 28900 },
  { month: 'Jul 24', users: 1247, mrr: 42380 },
  // Projections
  { month: 'Aug 24', users: 1450, mrr: 58000, projected: true },
  { month: 'Sep 24', users: 1720, mrr: 76000, projected: true },
  { month: 'Oct 24', users: 2100, mrr: 98000, projected: true },
  { month: 'Nov 24', users: 2580, mrr: 125000, projected: true },
  { month: 'Dec 24', users: 3200, mrr: 160000, projected: true },
];

export default {
  mockTestimonials,
  successMetrics,
  trustBadges,
  supportedCountries,
  pressMentions,
  recentActivity,
  investorFAQ,
  growthProjections,
};
