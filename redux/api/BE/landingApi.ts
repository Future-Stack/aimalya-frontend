import { baseApi } from "../baseApi";

export interface SystemSettings {
  systemId: string;
  supportEmail: string;
  supportUrl: string;
  siteName: string;
  supportPhone: string;
  location: string;
  freeTrialDuration: number;
  planLimitMaxBusiness: number;
  planLimitMaxLocations: number;
  createdAt: string;
  updatedAt: string;
}

export interface SystemSettingsResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: SystemSettings;
}

export const landingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSystemSettings: builder.query<SystemSettingsResponse, void>({
      query: () => ({
        url: "/system",
        method: "GET",
        params: { sortOrder: "asc" },
      }),
    }),
  }),
});

export const { useGetSystemSettingsQuery } = landingApi;
