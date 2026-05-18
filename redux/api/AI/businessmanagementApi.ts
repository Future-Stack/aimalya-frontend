import { baseApiAi } from "./baseApiAi";

export const businessmanagementApi = baseApiAi.injectEndpoints({
    endpoints: (builder) => ({
        getBusinessManagement: builder.query<any, void>({
            query: () => ({
                url: "/businesses/management",
                method: "GET",
            }),
            providesTags: ["BusinessManagement"],
        }),
        getBusinessManagementDetail: builder.query<any, { business_name: string; overlook: string; user_id?: string }>({
            query: ({ business_name, overlook, user_id }) => ({
                url: "/businesses/management/detail",
                method: "GET",
                params: { business_name, overlook, user_id },
            }),
            providesTags: ["BusinessManagement"],
        }),
        updateBusinessStatus: builder.mutation<any, { action: "suspend" | "unsuspend"; business_name: string }>({
            query: (body) => ({
                url: "/businesses/management",
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["BusinessManagement"],
        }),
    }),
});

export const {
    useGetBusinessManagementQuery,
    useGetBusinessManagementDetailQuery,
    useUpdateBusinessStatusMutation,
} = businessmanagementApi;
