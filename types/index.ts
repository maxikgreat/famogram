export interface User {
  given_name: string,
  family_name: string,
  nickname: string,
  name: string,
  picture: string,
  locale: string,
  updated_at: string,
  email: string,
  email_verified: boolean,
  sub: string,
  user_metadata: Metadata | null,
}

export interface ExtendedUser extends User {
  // see auth api management (api/v2/users) docs to add more info
  created_at: string,
}

export const categories = [
  'Marketing',
  'Agriculture',
  'Arts and Entertainment',
  'Automotive, Aircraft and Boat',
  'Beauty, Cosmetic and Personal Care',
  'Commercial and Industrial',
  'Education',
  'Finance',
  'Food and Beverage',
  'Hotel and Lodging',
  'Legal',
  'Local Service',
  'Media/News Company',
  'Medical and Health',
  'Non-Government Organization',
  'Nonprofit Organization',
  'Public and Government Services',
  'Real Estate',
  'Science, Technology and Engineering',
  'Shopping and Retail',
  'Sports and Recreation',
  'Travel and Transportation',
  'Armed Forces',
  'Charity Organization',
  'Community Service',
  'Country Club / Clubhouse',
  'Environmental Conservation Organization',
  'Labor Union',
  'Private Members Club',
  'Religious Organization',
  'Social Club' ,
  'Sorority and Fraternity',
  'Sports Club',
  'Youth Organization',
  'Art',
  'Book and Magazine',
  'Music',
  'Show',
  'TV and Movies',
  'ATM',
  'Campus Building',
  'City Infrastructure',
  'Landmark and Historical Places',
  'Locality',
  'Meeting Room',
  'Outdoor Recreation',
  'Public Toilet',
  'Religious Place of Worship',
  'Residence',
  'Brand',
  'Cause',
  'Just for Fun',
  'Public Figure',
  'Model',
  'Writer'
] as const;

export type Category = typeof categories[number];

export type Role = 'instagram' | 'tiktok' | 'influencer';

export interface InstaUser {
  biography: string,
  businessEmail: string,
  externalUrl: string,
  followedBy: number,
  follow: number,
  fullName: string,
  isBusinessAccount: boolean,
  businessCategoryName: string,
  isPrivate: boolean,
  photoUrl: string,
  username: string,
}

export type Metadata = {
  contactInfo?: ContactInfoMetadata,
  instagram?: InstagramMetadata,
  tiktok?: TitTokMetadata,
}

export interface InstagramMetadata {
  user: InstaUser,
  category: Category,
  price: {
    story: number,
    post: number,
  },
  desc: string,
}

export interface ContactInfoMetadata {
  contactEmail: string,
  messengers: {
    whatsApp: string,
    facebook: string,
  }
}

export interface TitTokMetadata {
  user: string,
}
