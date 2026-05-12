import { baseApiAi } from "./baseApiAi";

export interface DashboardOverviewResponse {
  overview: {
    overall_rating: number;
    review_volume: number;
    response_rate: number;
    satisfaction_index: number;
    key_strengths: { strength: string; mentions: number }[];
    key_issues: { issue: string; mentions: number }[];
  };
  sentiment_trend: { period: string; positive: number; neutral: number; negative: number }[];
  performance_criteria: {
    Service: number;
    Quality: number;
    Value: number;
    Cleanliness: number;
    Atmosphere: number;
  };
}

export const dashboardApi = baseApiAi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardOverview: builder.query<DashboardOverviewResponse, { userId: string; businessName: string; address: string }>({
      query: ({ userId, businessName, address }) => 
        `/dashboard/overview?user_id=${userId}&business_name=${encodeURIComponent(businessName)}&address=${encodeURIComponent(address)}`,
      providesTags: ["Business"],
    }),
  }),
});

export const { useGetDashboardOverviewQuery } = dashboardApi;
