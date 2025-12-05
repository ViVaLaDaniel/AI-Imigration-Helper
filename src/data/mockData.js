// Mock Data - Realistic Users
export const mockUsers = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@email.com',
    role: 'user',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    planId: 'pro',
    createdAt: '2024-11-15',
    documentsProcessed: 23,
    lastActive: '2024-12-04',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    role: 'user',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    planId: 'enterprise',
    createdAt: '2024-10-20',
    documentsProcessed: 87,
    lastActive: '2024-12-04',
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@aimmigration.help',
    role: 'admin',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin',
    planId: 'enterprise',
    createdAt: '2024-09-01',
    documentsProcessed: 150,
    lastActive: '2024-12-04',
  },
];

// Mock Data - Realistic Documents
export const mockDocuments = [
  {
    id: 'doc-001',
    name: 'Passport_Scan_Final.pdf',
    type: 'passport',
    status: 'completed',
    uploadedAt: '2024-12-04T14:30:00Z',
    fileSize: '2.4 MB',
    fileUrl: '/mock-passport.pdf',
    aiResult: {
      summary: 'Valid US passport detected. Document expires in 18 months. All required fields are present and legible.',
      confidence: 0.95,
      issues: [
        {
          severity: 'warning',
          title: 'Expiration Notice',
          description: 'Your passport will expire on June 15, 2026. Consider renewing 6 months before expiration.',
        },
      ],
      recommendations: [
        'Update passport photo if appearance has changed significantly',
        'Verify signature matches current signature',
        'Check visa pages for sufficient blank pages',
      ],
      extractedData: {
        passportNumber: 'N1234567890',
        fullName: 'John Michael Smith',
        nationality: 'United States',
        dateOfBirth: '1990-03-15',
        issueDate: '2021-06-15',
        expiryDate: '2026-06-15',
        placeOfIssue: 'New York',
      },
    },
  },
  {
    id: 'doc-002',
    name: 'Work_Visa_Application.pdf',
    type: 'visa',
    status: 'completed',
    uploadedAt: '2024-12-03T10:15:00Z',
    fileSize: '1.8 MB',
    fileUrl: '/mock-visa.pdf',
    aiResult: {
      summary: 'H1-B visa application form detected. 3 fields require attention before submission.',
      confidence: 0.92,
      issues: [
        {
          severity: 'error',
          title: 'Missing Employer Information',
          description: 'Section 3, Question 15: Employer Tax ID (EIN) is required.',
        },
        {
          severity: 'warning',
          title: 'Incomplete Address',
          description: 'Section 2: Apartment number appears to be missing.',
        },
        {
          severity: 'info',
          title: 'Signature Date',
          description: 'Ensure signature date is within 30 days of submission.',
        },
      ],
      recommendations: [
        'Obtain employer EIN from HR department',
        'Verify complete residential address',
        'Gather required supporting documents (job offer letter, I-129)',
        'Schedule biometrics appointment after submission',
      ],
      extractedData: {
        applicantName: 'John Smith',
        visaType: 'H-1B',
        applicationDate: '2024-12-03',
        sponsorEmployer: 'Tech Corp Inc.',
        jobTitle: 'Senior Software Engineer',
      },
    },
  },
  {
    id: 'doc-003',
    name: 'Birth_Certificate.pdf',
    type: 'certificate',
    status: 'completed',
    uploadedAt: '2024-12-01T16:45:00Z',
    fileSize: '1.2 MB',
    fileUrl: '/mock-certificate.pdf',
    aiResult: {
      summary: 'Birth certificate from New York State. Document meets standard requirements for immigration purposes.',
      confidence: 0.98,
      issues: [],
      recommendations: [
        'Obtain apostille if using for international purposes',
        'Keep original in safe location',
        'Make certified copies for submission',
      ],
      extractedData: {
        fullName: 'John Michael Smith',
        dateOfBirth: '1990-03-15',
        placeOfBirth: 'New York, NY',
        certificateNumber: 'BC-1990-12345',
        issueDate: '1990-03-20',
      },
    },
  },
  {
    id: 'doc-004',
    name: 'Employment_Letter.pdf',
    type: 'other',
    status: 'processing',
    uploadedAt: '2024-12-04T18:20:00Z',
    fileSize: '890 KB',
    fileUrl: '/mock-letter.pdf',
    aiResult: null,
  },
  {
    id: 'doc-005',
    name: 'Police_Clearance.pdf',
    type: 'certificate',
    status: 'failed',
    uploadedAt: '2024-11-30T09:30:00Z',
    fileSize: '3.1 MB',
    fileUrl: '/mock-clearance.pdf',
    aiResult: {
      error: 'Document quality too low. Please upload a higher resolution scan.',
    },
  },
];

// Mock Data - Subscription Plans
export const mockPlans = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    documentLimit: 5,
    features: [
      'Basic document analysis',
      '5 documents per month',
      'Email support',
      'Basic AI recommendations',
    ],
  },
  {
    id: 'pro',
    name: 'Professional',
    price: 29,
    documentLimit: 100,
    popular: true,
    features: [
      'Advanced AI analysis',
      '100 documents per month',
      'Priority support',
      'Custom recommendations',
      'Export to PDF',
      'Document templates',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99,
    documentLimit: -1,
    features: [
      'Everything in Pro',
      'Unlimited documents',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'Team collaboration',
      'White-label option',
    ],
  },
];

// Mock Data - Billing History
export const mockPayments = [
  {
    id: 'pay-001',
    date: '2024-12-01',
    amount: 29.00,
    currency: 'USD',
    status: 'paid',
    method: 'Visa ****1234',
    invoice: 'INV-2024-12-001',
  },
  {
    id: 'pay-002',
    date: '2024-11-01',
    amount: 29.00,
    currency: 'USD',
    status: 'paid',
    method: 'Visa ****1234',
    invoice: 'INV-2024-11-001',
  },
  {
    id: 'pay-003',
    date: '2024-10-01',
    amount: 29.00,
    currency: 'USD',
    status: 'paid',
    method: 'Visa ****1234',
    invoice: 'INV-2024-10-001',
  },
];

// Mock Data - Support Tickets
export const mockTickets = [
  {
    id: 'ticket-001',
    subject: 'Question about document requirements',
    status: 'resolved',
    createdAt: '2024-11-28',
    updatedAt: '2024-11-29',
    priority: 'normal',
  },
  {
    id: 'ticket-002',
    subject: 'Upload error with large PDF',
    status: 'in-progress',
    createdAt: '2024-12-02',
    updatedAt: '2024-12-03',
    priority: 'high',
  },
];

// Mock Data - Notifications
export const mockNotifications = [
  {
    id: 'notif-001',
    type: 'success',
    title: 'Document Analysis Complete',
    message: 'Your passport scan has been analyzed successfully.',
    timestamp: '2024-12-04T14:35:00Z',
    read: false,
  },
  {
    id: 'notif-002',
    type: 'warning',
    title: 'Document Expiring Soon',
    message: 'Your passport expires in 18 months. Consider renewing soon.',
    timestamp: '2024-12-04T14:36:00Z',
    read: false,
  },
  {
    id: 'notif-003',
    type: 'info',
    title: 'New Feature Available',
    message: 'Try our new document comparison tool!',
    timestamp: '2024-12-03T10:00:00Z',
    read: true,
  },
  {
    id: 'notif-004',
    type: 'success',
    title: 'Payment Successful',
    message: 'Your subscription has been renewed for another month.',
    timestamp: '2024-12-01T08:00:00Z',
    read: true,
  },
];

// Mock Data - Dashboard Stats
export const mockStats = {
  totalDocuments: 23,
  documentsThisMonth: 7,
  activeIssues: 2,
  successRate: 95.6,
  avgProcessingTime: '4.2s',
  documentsProcessed: 23,
  issuesDetected: 8,
  recommendationsGiven: 47,
};

// Mock Data - Admin Analytics
export const mockAdminStats = {
  totalUsers: 1247,
  activeUsers: 892,
  totalDocuments: 8934,
  documentsToday: 156,
  revenue: 42380,
  revenueGrowth: 23.5,
  averageProcessingTime: 3.8,
  successRate: 96.2,
  userGrowth: [
    { month: 'Jun', users: 234 },
    { month: 'Jul', users: 389 },
    { month: 'Aug', users: 567 },
    { month: 'Sep', users: 723 },
    { month: 'Oct', users: 945 },
    { month: 'Nov', users: 1089 },
    { month: 'Dec', users: 1247 },
  ],
  documentsByType: [
    { type: 'Passport', count: 3421 },
    { type: 'Visa', count: 2987 },
    { type: 'Certificate', count: 1654 },
    { type: 'Other', count: 872 },
  ],
};

// Mock current user
export const mockCurrentUser = mockUsers[0];
