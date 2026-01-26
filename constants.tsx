
import React from 'react';
import { BlogPost, Service, TeamMember } from './types';

export const BUSINESS_NAME = "Authorize";
export const PRIMARY_KEYWORD = "Digital Authorization Services";

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Identity Verification',
    description: 'Real-time KYC and identity verification to ensure your users are who they say they are.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    slug: 'identity-verification'
  },
  {
    id: '2',
    title: 'Secure Authentication',
    description: 'Advanced multi-factor authentication (MFA) and biometric solutions for enterprise systems.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    slug: 'secure-authentication'
  },
  {
    id: '3',
    title: 'Compliance Automation',
    description: 'Streamline regulatory compliance with automated auditing and reporting tools.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    slug: 'compliance-automation'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'The Future of Digital Identity in 2025',
    excerpt: 'Explore how decentralized identity is reshaping the authorization landscape for global enterprises.',
    content: 'Long form content about digital identity trends, blockchain integration, and privacy-preserving protocols...',
    date: 'March 15, 2024',
    author: 'Sarah Chen',
    slug: 'future-of-digital-identity-2025',
    category: 'Trends',
    imageUrl: 'https://picsum.photos/seed/id/800/600'
  },
  {
    id: 'post-2',
    title: '5 Steps to Secure Your API Ecosystem',
    excerpt: 'API security is no longer optional. Learn the best practices for robust authorization headers and scope management.',
    content: 'Detailed technical guide on JWT, OAuth2, and Zero Trust architectures...',
    date: 'February 28, 2024',
    author: 'James Wilson',
    slug: 'secure-api-ecosystem',
    category: 'Technical',
    imageUrl: 'https://picsum.photos/seed/api/800/600'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Dr. Elena Vance",
    role: "CEO & Founder",
    bio: "Ex-Google security lead with 15 years of experience in cryptosystems.",
    imageUrl: "https://picsum.photos/seed/elena/400/400"
  },
  {
    name: "Marcus Thorne",
    role: "CTO",
    bio: "Passionate about building scalable, secure backend infrastructures.",
    imageUrl: "https://picsum.photos/seed/marcus/400/400"
  }
];
