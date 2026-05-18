import { baseApi } from "../../baseApi";

export const planApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSubscription: builder.mutation<any, any>({
      query: (data) => ({
        url: "/subscription",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateSubscriptionMutation } = planApi;
