"use client";

import { useGetAllActivityQuery } from "@/provider/redux/query/memberActivity";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Trash, Edit } from "lucide-react";

import { MemberActivity } from "@/types/dataTypes";
import { useDeleteMemberMutation } from "@/provider/redux/query/member";

export default function ActivityDetails() {
  // const [page, setPage] = useState(1);
  // const rowsPerPage = 10;

  // Update the data shown in the table using `paginatedData`.

  //   const { data, isLoading, isError, error } = useGetAllActivityQuery();
  const { data, isLoading, isError, error } = useGetAllActivityQuery();

  const activities = data?.data as MemberActivity[] | undefined;

  // const paginatedData = members?.slice(
  //   (page - 1) * rowsPerPage,
  //   page * rowsPerPage
  // );

  function convertToLocalTime(isoString: string) {
    const date = new Date(isoString); // Parse the ISO string to a Date object
    return date.toLocaleString(); // Convert to local time string
  }

  return (
    <div className="border p-4">
      <h3 className="text-2xl font-bold mb-4">Activity Details </h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <input type="checkbox" />
            </TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Member</TableHead>
            <TableHead>Locker</TableHead>
            <TableHead>Entry</TableHead>
            <TableHead>Exit</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activities?.map((activity) => (
            <TableRow key={activity.memActivites_id}>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell>{activity.memActivites_id}</TableCell>
              <TableCell>{activity.member.member_id}</TableCell>
              <TableCell>{activity.locker_no || "N/A"}</TableCell>
              <TableCell>{convertToLocalTime(activity.gym_entry)}</TableCell>
              <TableCell>{activity.gym_exit || "N/A"}</TableCell>
              <TableCell>{activity.activity_status}</TableCell>
              <TableCell>{activity.payment_status}</TableCell>
              <TableCell>{convertToLocalTime(activity.start_date)}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  {/* Delete Button */}
                  <Button
                    variant="destructive"
                    size="sm"
                    className="flex items-center gap-2"
                    // onClick={() => handleDelete(activity.member.member_id)}
                  >
                    <Trash />
                  </Button>
                  {/* Edit Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-green-600 border-green-600 hover:bg-green-100 flex items-center gap-2"
                  >
                    <Edit />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between mt-4">
        <Button variant="outline">Previous</Button>
        <div>1 2 3 ... 9 10</div>
        <Button>Next</Button>
      </div>
    </div>
  );
}
