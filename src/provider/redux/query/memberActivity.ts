import { MemberActivityResponse, MembersResponse } from "@/types/dataTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// console.log("dotenv", process.env.NEXT_PUBLIC_API_BASE_URL);

export const memberActApi = createApi({
  reducerPath: "MemberActApi",
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    })(args, api, extraOptions);
    return result;
  },
  // baseQuery: fetchBaseQuery({
  //   baseUrl: process.env.API_BASE_URL,
  // }),
  endpoints: (builder) => ({
    getAllActivity: builder.query<MemberActivityResponse, void>({
      query: () => ({
        url: "/members-activity/",
        method: "GET",
      }),
      // transformResponse: (response: MemberActivityResponse) => {
      //   console.log("API Response:", response);
      //   return response;
      // },
    }),

    getActivityById: builder.query({
      query: (id) => {
        return {
          url: `/members-activity/${id}`,
          // method: "GET",
        };
      },
    }),

    addActivity: builder.mutation({
      query: (data) => ({
        url: `/members-activity/`,
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    updateActivity: builder.mutation({
      query: ({ id, data }) => ({
        url: `/members-activity/${id}/`,
        method: "PUT",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    deleteActivity: builder.mutation({
      query: (id) => ({
        url: `/members-activity/${id}/`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for the API endpoints
export const {
  useGetAllActivityQuery,
  useGetActivityByIdQuery,
  useAddActivityMutation,
  useUpdateActivityMutation,
  useDeleteActivityMutation,
} = memberActApi;
