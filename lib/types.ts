export interface RecommendedShow {
  eventName: string;
  cityName: string;
  date: string;
  weather: string;
  distanceKm: number; // Updated to be a number
  imgUrl: string;
}

export interface UpcomingEvent {
  eventName: string;
  cityName: string;
  date: string;
  weather: string;
  distanceKm: number;
  imgUrl: string;
}

export interface ApiResponse {
  events: UpcomingEvent[];
  page: number;
  pageSize: number;
  totalEvents: number;
  totalPages: number;
}
