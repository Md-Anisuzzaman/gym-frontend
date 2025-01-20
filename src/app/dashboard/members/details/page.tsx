"use client";

import { useDeleteMemberMutation, useGetAllMembersQuery } from "@/provider/redux/query/member";
import { Member } from "@/types/dataTypes";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Trash, Edit } from "lucide-react";
import Link from "next/link";
import { toast } from "@/hooks/use-toast";

export default function MmeberDetails() {
  // const [page, setPage] = useState(1);
  // const rowsPerPage = 10;

  // Update the data shown in the table using `paginatedData`.
  const { data, isLoading, isError, error,refetch } = useGetAllMembersQuery();
  const [ deleteMember ] = useDeleteMemberMutation();
  const members = data?.data as Member[] | undefined;

  // const paginatedData = members?.slice(
  //   (page - 1) * rowsPerPage,
  //   page * rowsPerPage
  // );

  
  const handleDelete = async (memberId: number) => {
    try {
      const response = await deleteMember(memberId).unwrap();
      console.log("Member deleted:", response);
      toast({
        title: "Member deleted successfully",
        description: "The new member has been added to the system.",
        variant: "success",
      });
      refetch();
      // Optionally refetch data to update the table
    } catch (error:any) {
      console.error("Error deleting member:", error);
      toast({
        title: "Error deleting member",
        description: error.data.error,
        variant: "destructive",
      });
    }
  };



  return (
    <div className="border p-4">
      <h3 className="text-2xl font-bold mb-4">Member Details </h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <input type="checkbox" />
            </TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Profession</TableHead>
            <TableHead>Mobile Number</TableHead>
            <TableHead>Membership Type</TableHead>
            <TableHead>Body Type</TableHead>
            <TableHead>Weight</TableHead>
            <TableHead>Height</TableHead>
            <TableHead>Workout Plan</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members?.map((member) => (
            <TableRow key={member.member_id}>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell>{member.member_id}</TableCell>
              <TableCell>{member.full_name}</TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>{member.profession}</TableCell>
              <TableCell>{member.mobile_number}</TableCell>
              <TableCell>{member.membership_type}</TableCell>
              <TableCell>{member.body_type}</TableCell>
              <TableCell>{member.weight}</TableCell>
              <TableCell>{member.height}</TableCell>
              <TableCell>{member.workout_plan_type}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  {/* Delete Button */}
                  <Button
                    variant="destructive"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => handleDelete(member.member_id)}
                  >
                    <Trash />
                  </Button>
                  {/* Edit Button */}
                  <Link href={`/dashboard/members/edit/${member.member_id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-green-600 border-green-600 hover:bg-green-100 flex items-center gap-2"
                    >
                      <Edit />
                    </Button>
                  </Link>
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
