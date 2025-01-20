export interface Member {
    member_id: number;
    full_name: string;
    age: number;
    profession: string;
    present_address: string;
    permanent_address: string;
    email: string;
    mobile_number: string;
    role: string;
    image: string | null;
    membership_type: string;
    body_type: string;
    weight: string;
    height: string;
    workout_plan_type: string;
    joined_date: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface MembersResponse {
    data: Member[];
  }

  export interface MemberActivity {
    memActivites_id: number;
    member: Member;
    locker_no: string;
    start_date: string;
    gym_entry: string;
    gym_exit: string | null;
    activity_status: string;
    due_amount: number | null;
    payment_status: string;
  }

  export interface MemberActivityResponse {
    data: MemberActivity;
  }

  export interface ErrorResponse {
    errors: {
        [field: string]: string[]; // Index signature for dynamic field names
    };
}

 type ApiError = {
  data?: {
    errors?: Record<string, string>; // Key-value pairs for validation errors
  };
  message?: string; // Optional general error message
};

export function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === "object" &&
    error !== null &&
    "data" in error &&
    typeof (error as ApiError).data === "object"
  );
}
