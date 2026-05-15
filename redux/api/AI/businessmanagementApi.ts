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
        getBusinessManagementDetail: builder.query<any, { business_name: string; overlook: string }>({
            query: ({ business_name, overlook }) => ({
                url: "/businesses/management/detail",
                method: "GET",
                params: { business_name, overlook },
            }),
            providesTags: ["BusinessManagement"],
        }),
    }),
});

export const {
    useGetBusinessManagementQuery,
    useGetBusinessManagementDetailQuery,
} = businessmanagementApi;
