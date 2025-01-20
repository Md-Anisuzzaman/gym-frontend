import { MembersResponse } from "@/types/dataTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const memberApi = createApi({
  reducerPath: "MemberApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_BASE_URL,
  }),
  endpoints: (builder) => ({
    // Fetch all members
    getAllMembers: builder.query<MembersResponse, void>({
      query: () => ({
        url: "/members/",
        method: "GET",
      }),
    }),

    // Fetch a single member by ID
    getMemberById: builder.query({
      query: (id) => ({
        url: `/member/${id}`,
        // method: "GET",
      }),
    }),

    addMember: builder.mutation({
      query: (data) => {
        return {
          url: `/members/`,
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),

    updateMember: builder.mutation({
      query: ({ id, data }) => {
        console.log("ID:", id, "Data:", data); // Debugging
        return {
          url: `/member/${id}`,
          method: "PUT",
          body: data,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),

    // Delete a single member by ID
    deleteMember: builder.mutation({
      query: (id) => ({
        url: `/member/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for the API endpoints
export const {
  useGetAllMembersQuery,
  useGetMemberByIdQuery,
  useUpdateMemberMutation,
  useDeleteMemberMutation,
  useAddMemberMutation,
} = memberApi;
