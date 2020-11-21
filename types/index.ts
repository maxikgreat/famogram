
// 'Marketing' = 'Marketing',
//   'Agriculture' = 'Agriculture',
//   'Arts and Entertainment' = 'Arts and Entertainment',
//   'Automotive, Aircraft and Boat' = 'Automotive, Aircraft and Boat',
//   'Beauty, Cosmetic and Personal Care' = 'Beauty, Cosmetic and Personal Care',
//   'Commercial and Industrial' = 'Commercial and Industrial',
//   'Education' = 'Education',
//   'Finance' = 'Finance',
//   'Food and Beverage' = 'Food and Beverage',
//   'Hotel and Lodging' = 'Hotel and Lodging',
//   'Legal' = 'Legal',
//   'Local Service' = 'Local Service',
//   'Media/News Company' = 'Media/News Company',
//   'Medical and Health' = 'Medical and Health',
//   'Non-Government Organization' = 'Non-Government Organization',
//   'Nonprofit Organization' = 'Nonprofit Organization',
//   'Public and Government Services' = 'Public and Government Services',
//   'Real Estate' = 'Real Estate',
//   'Science, Technology and Engineering' = 'Science, Technology and Engineering',
//   'Shopping and Retail' = 'Shopping and Retail',
//   'Sports and Recreation' = 'Sports and Recreation',
//   'Travel and Transportation' = 'Travel and Transportation'
//   'Armed Forces' = 'Armed Forces',
//   'Charity Organization' = 'Charity Organization',
//   'Community Service' = 'Community Service',
//   'Country Club / Clubhouse' = 'Country Club / Clubhouse',
//   'Environmental Conservation Organization' = 'Environmental Conservation Organization',
//   'Labor Union' = 'Labor Union',
//   'Private Members Club' = 'Private Members Club',
//   'Religious Organization' = 'Religious Organization',
//   'Social Club' = 'Social Club',
//   'Sorority and Fraternity' = 'Sorority and Fraternity',
//   'Sports Club' = 'Sports Club',
//   'Youth Organization' = 'Youth Organization',
//   'Art' = 'Art',
//   'Book and Magazine' = 'Book and Magazine',
//   'Music' = 'Music',
//   'Show' = 'Show',
//   'TV and Movies' = 'TV and Movies',
//   'ATM' = 'ATM',
//   'Campus Building' = 'Campus Building',
//   'City Infrastructure' = 'City Infrastructure',
//   'Landmark and Historical Places' = 'Landmark and Historical Places',
//   'Locality' = 'Locality',
//   'Meeting Room' = 'Meeting Room',
//   'Outdoor Recreation' = 'Outdoor Recreation',
//   'Public Toilet' = 'Public Toilet',
//   'Religious Place of Worship' = 'Religious Place of Worship',
//   'Residence' = 'Residence',
//   'Brand' = 'Brand',
//   'Cause' = 'Cause',
//   'Just for Fun' = 'Just for Fun',
//   'Public Figure' = 'Public Figure',
//   'Model' = 'Model',
//   'Writer' = 'Writer'
// };

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

export interface Metadata {
  instagram: InstagramMetadata,
  contactInfo: {
    contactEmail: string,
    messengers: {
      whatsApp: string,
      facebook: string,
    }
  }
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

export interface TittokMetadata {
  user: string,
}