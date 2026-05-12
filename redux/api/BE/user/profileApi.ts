import { baseApi } from "../../baseApi";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<any, void>({
      query: () => "/users/profile",
      providesTags: ["User"],
    }),
    uploadProfileImage: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: "/users/profile-image",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetProfileQuery, useUploadProfileImageMutation } = profileApi;
