export interface Images {
  total: number;
  total_pages: number;
  results?: ResultsEntity[] | null;
}
export interface ResultsEntity {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at?: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls;
  links: Links;
  likes: number;
  liked_by_user: boolean;
  current_user_collections?: null[] | null;
  sponsorship?: null;
  topic_submissions: TopicSubmissions;
  user: User;
  tags?: TagsEntity[] | null;
}
export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}
export interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}
export interface TopicSubmissions {
  wallpapers?: TravelOrWallpapersOrNature | null;
  nature?: TravelOrWallpapersOrNature1 | null;
}
export interface TravelOrWallpapersOrNature {
  status: string;
  approved_on: string;
}
export interface TravelOrWallpapersOrNature1 {
  status: string;
  approved_on: string;
}
export interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio?: string | null;
  location: string;
  links: Links1;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}
export interface Links1 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}
export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}
export interface Social {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email?: null;
}
export interface TagsEntity {
  type: string;
  title: string;
  source: Source;
}
export interface Source {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: CoverPhoto;
}
export interface Ancestry {
  type: TypeOrCategoryOrSubcategory;
  category: TypeOrCategoryOrSubcategory;
  subcategory: TypeOrCategoryOrSubcategory;
}
export interface TypeOrCategoryOrSubcategory {
  slug: string;
  pretty_slug: string;
}
export interface CoverPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at?: null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description?: null;
  alt_description?: null;
  urls: Urls;
  links: Links;
  likes: number;
  liked_by_user: boolean;
  current_user_collections?: null[] | null;
  sponsorship?: null;
  topic_submissions: TopicSubmissions1;
  premium: boolean;
  user: User1;
}
export interface TopicSubmissions1 {
  travel: TravelOrWallpapersOrNature2;
}
export interface TravelOrWallpapersOrNature2 {
  status: string;
  approved_on: string;
}
export interface User1 {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: Links1;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}
