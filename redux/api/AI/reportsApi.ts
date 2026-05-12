import { baseApiAi } from "./baseApiAi";

export interface KPIData {
  value: number | null;
  change: number | null;
}

export interface ReportResponse {
  report_title: string;
  period: string;
  date_range: {
    start_date: string;
    end_date: string;
  };
  report_frequency: string;
  reviews_in_period: number;
  total_reviews_available: number;
  kpis: {
    avg_rating: KPIData;
    reviews: KPIData;
    satisfaction: KPIData;
    response_rate: KPIData;
  };
  executive_summary: string;
  review_volume_trend: { period: string; count: number }[];
  rating_trend: { period: string; rating: number }[];
  sentiment_breakdown: {
    positive: { percent: number; count: number };
    neutral: { percent: number; count: number };
    negative: { percent: number; count: number };
  };
  top_complaints: string[];
  top_praises: string[];
  ai_recommendations: { title: string; description: string; estimated_impact: string }[];
  action_plan: string[];
  business_goals: string[];
  saved_report_frequency: string | null;
}

export const reportsApi = baseApiAi.injectEndpoints({
  endpoints: (builder) => ({
    getMonthlyReport: builder.query<
      ReportResponse,
      {
        userId: string;
        businessName: string;
        reportFrequency: "monthly" | "weekly";
        startDate: string;
        endDate: string;
        address: string;
      }
    >({
      query: ({ userId, businessName, reportFrequency, startDate, endDate, address }) =>
        `/reports/monthly?user_id=${userId}&business_name=${encodeURIComponent(
          businessName
        )}&report_frequency=${reportFrequency}&start_date=${startDate}&end_date=${endDate}&address=${encodeURIComponent(
          address
        )}`,
      providesTags: ["Business"],
    }),
  }),
});

export const { useGetMonthlyReportQuery } = reportsApi;
