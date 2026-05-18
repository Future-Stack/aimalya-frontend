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
    updateProfile: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: "/users/profile",
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),
    changePassword: builder.mutation<any, any>({
      query: (body) => ({
        url: "/auth/change-password",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { 
  useGetProfileQuery, 
  useUploadProfileImageMutation, 
  useUpdateProfileMutation,
  useChangePasswordMutation 
} = profileApi;
