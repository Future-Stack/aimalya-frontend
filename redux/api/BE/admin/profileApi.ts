import { baseApi } from "../../baseApi";

export const adminProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminProfile: builder.query<any, void>({
      query: () => "/admin/profile",
      providesTags: ["User"],
    }),
    updateAdminProfile: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: "/admin/profile",
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetAdminProfileQuery,
  useUpdateAdminProfileMutation,
} = adminProfileApi;
