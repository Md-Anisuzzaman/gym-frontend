"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";

import {
  useGetMemberByIdQuery,
  useUpdateMemberMutation,
} from "@/provider/redux/query/member";

export default function EditMemberForm() {
  const params = useParams(); // Access the route parameters
  const id = params?.id; // Extract the 'id'
  const router = useRouter();
  const { data, isLoading, isError, error } = useGetMemberByIdQuery(id);
  const [updateMember] = useUpdateMemberMutation(); // Mutation for updating the member

  const [formData, setFormData] = useState({
    full_name: "",
    age: "",
    profession: "",
    present_address: "",
    permanent_address: "",
    mobile_number: "",
    role: "",
    membership_type: "",
    body_type: "",
    weight: "",
    height: "",
    workout_plan_type: "",
  });

  // Populate formData when data is fetched
  useEffect(() => {
    if (data?.data) {
      setFormData({
        full_name: data?.data.full_name || "",
        age: data?.data.age?.toString() || "",
        profession: data?.data.profession || "",
        present_address: data?.data.present_address || "",
        permanent_address: data?.data.permanent_address || "",
        mobile_number: data?.data.mobile_number || "",
        role: data?.data.role || "",
        membership_type: data?.data.membership_type || "",
        body_type: data?.data.body_type || "",
        weight: data?.data.weight?.toString() || "",
        height: data?.data.height?.toString() || "",
        workout_plan_type: data?.data.workout_plan_type || "",
      });
    }
  }, [data]);

  // Handle form changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form data to the API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log("Updating member with ID:", id, "Data:", formData);
      const result = await updateMember({ id: params.id, data: formData }).unwrap();
      console.log("Update successful:", result);
      alert("Member details updated successfully!");
      router.push("/dashboard/members/details");
    } catch (updateError) {
      console.error("Error updating member:", updateError);
      alert("Failed to update member details.");
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  let errorMessage: string | undefined;
  if (isError) {
    errorMessage = "An unknown error occurred.";

    if ("status" in error) {
      if (
        typeof error.data === "object" &&
        error.data !== null &&
        "message" in error.data
      ) {
        errorMessage = (error.data as { message: string }).message;
      } else {
        errorMessage = `Error status: ${error.status}`;
      }
    } else if ("message" in error) {
      errorMessage = error.message;
    }

    return <p>Error loading member data: {errorMessage}</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Edit Member</h1>
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="flex items-center gap-2"
        >
          <ArrowLeft />
          Back
        </Button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <Label htmlFor="full_name">Full Name</Label>
            <Input
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
          </div>
          {/* Age */}
          <div>
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          {/* Profession */}
          <div>
            <Label htmlFor="profession">Profession</Label>
            <Input
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
            />
          </div>
          {/* Present Address */}
          <div>
            <Label htmlFor="present_address">Present Address</Label>
            <Input
              id="present_address"
              name="present_address"
              value={formData.present_address}
              onChange={handleChange}
            />
          </div>
          {/* Permanent Address */}
          <div>
            <Label htmlFor="permanent_address">Permanent Address</Label>
            <Input
              id="permanent_address"
              name="permanent_address"
              value={formData.permanent_address}
              onChange={handleChange}
            />
          </div>
          {/* Mobile Number */}
          <div>
            <Label htmlFor="mobile_number">Mobile Number</Label>
            <Input
              id="mobile_number"
              name="mobile_number"
              value={formData.mobile_number}
              onChange={handleChange}
              required
            />
          </div>
          {/* Membership Type */}
          <div>
            <Label htmlFor="membership_type">Membership Type</Label>
            <Input
              id="membership_type"
              name="membership_type"
              value={formData.membership_type}
              onChange={handleChange}
            />
          </div>
          {/* Body Type */}
          <div>
            <Label htmlFor="body_type">Body Type</Label>
            <Input
              id="body_type"
              name="body_type"
              value={formData.body_type}
              onChange={handleChange}
            />
          </div>
          {/* Weight */}
          <div>
            <Label htmlFor="weight">Weight</Label>
            <Input
              id="weight"
              name="weight"
              type="number"
              step="0.1"
              value={formData.weight}
              onChange={handleChange}
            />
          </div>
          {/* Height */}
          <div>
            <Label htmlFor="height">Height</Label>
            <Input
              id="height"
              name="height"
              type="text"
              value={formData.height}
              onChange={handleChange}
            />
          </div>
          {/* Workout Plan */}
          <div>
            <Label htmlFor="workout_plan_type">Workout Plan</Label>
            <Input
              id="workout_plan_type"
              name="workout_plan_type"
              value={formData.workout_plan_type}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="role">Role</Label>
            <Input
              id="role"
              name="role"
              type="text"
              value={formData.role}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* <div>
          <Label htmlFor="role">Role</Label>
          <Textarea
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
        </div> */}
        <div className="flex justify-end">
          <Button
            type="submit"
            variant="default"
            className="flex items-center gap-2"
          >
            <Save />
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}
