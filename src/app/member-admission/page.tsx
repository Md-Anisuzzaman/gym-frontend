// "use client"

// import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import * as z from 'zod'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { useToast } from "@/hooks/use-toast"


// import { User, Briefcase, MapPin, Mail, Phone, UserCircle, Scale, Ruler, Calendar } from 'lucide-react'

// const membershipTypes = [
//   { value: 'Regular', label: 'Regular' },
//   { value: 'Monthly', label: 'Monthly' },
//   { value: 'Yearly', label: 'Yearly' },
// ]

// const bodyTypes = [
//   { value: 'Slim', label: 'Slim' },
//   { value: 'Medium', label: 'Medium' },
//   { value: 'Large', label: 'Large' },
// ]

// const workoutPlanTypes = [
//   { value: 'Cardio', label: 'Cardio' },
//   { value: 'Day_1', label: 'Day 1' },
//   { value: 'Day_2', label: 'Day 2' },
//   { value: 'Day_3', label: 'Day 3' },
//   { value: 'Day_1_plus_Cardio', label: 'Day 1 + Cardio' },
//   { value: 'Day_2_plus_Cardio', label: 'Day 2 + Cardio' },
//   { value: 'Day_3_plus_Cardio', label: 'Day 3 + Cardio' },
// ]

// const formSchema = z.object({
//   full_name: z.string().min(2, { message: "Full name must be at least 2 characters." }),
//   age: z.number().min(16, { message: "Age must be at least 16." }).optional(),
//   profession: z.string().min(2, { message: "Profession must be at least 2 characters." }),
//   present_address: z.string().min(5, { message: "Present address must be at least 5 characters." }),
//   permanent_address: z.string().min(5, { message: "Permanent address must be at least 5 characters." }),
//   email: z.string().email({ message: "Invalid email address." }),
//   password: z.string().min(8, { message: "Password must be at least 8 characters." }),
//   mobile_number: z.string().min(10, { message: "Mobile number must be at least 10 characters." }),
//   membership_type: z.enum(['Regular', 'Monthly', 'Yearly']),
//   body_type: z.enum(['Slim', 'Medium', 'Large']),
//   weight: z.string().min(2, { message: "Weight must be at least 2 characters." }),
//   height: z.string().min(2, { message: "Height must be at least 2 characters." }),
//   workout_plan_type: z.enum(['Cardio', 'Day_1', 'Day_2', 'Day_3', 'Day_1_plus_Cardio', 'Day_2_plus_Cardio', 'Day_3_plus_Cardio']),
// })

// export default function MemberAdmissionForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [userRole, setUserRole] = useState('Admin') // This should be fetched from your authentication system
//   const { toast } = useToast()

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       full_name: "",
//       profession: "",
//       present_address: "", 
//       permanent_address: "",
//       email: "",
//       password: "",
//       mobile_number: "",
//       membership_type: "Regular",
//       body_type: "Medium",
//       weight: "",
//       height: "",
//       workout_plan_type: "Cardio",
//     },
//   })

//   async function onSubmit(values: z.infer<typeof formSchema>) {
//     setIsSubmitting(true)
//     try {
//       // Here you would typically send the data to your API
//       console.log(values)
//       toast({
//         title: "Member admitted successfully",
//         description: "The new member has been added to the system.",
//       })
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "There was a problem admitting the member.",
//         variant: "destructive",
//       })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const isButtonDisabled = !['Admin', 'Employee'].includes(userRole) || isSubmitting

  

//   return (
//     <div className="container mx-auto py-10 px-4 max-w-2xl">
//       <h1 className="text-3xl font-bold mb-8 text-center">Member Admission Form</h1>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//           <FormField
//             control={form.control}
//             name="full_name"
//             render={({ field }) => (
//               <FormItem className="space-y-2">
//                 <FormLabel className="block text-sm font-medium">Full Name</FormLabel>
//                 <FormControl>
//                   <div className="flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
//                     <User className="w-4 h-4 mr-2 text-muted-foreground" />
//                     <Input placeholder="John Doe" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
//                   </div>
//                 </FormControl>
//                 <FormMessage className="text-xs" />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="age"
//             render={({ field }) => (
//               <FormItem className="space-y-2">
//                 <FormLabel className="block text-sm font-medium">Age</FormLabel>
//                 <FormControl>
//                   <div className="flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
//                     <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
//                     <Input type="number" placeholder="25" {...field} onChange={e => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
//                   </div>
//                 </FormControl>
//                 <FormMessage className="text-xs" />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="profession"
//             render={({ field }) => (
//               <FormItem className="space-y-2">
//                 <FormLabel className="block text-sm font-medium">Profession</FormLabel>
//                 <FormControl>
//                   <div className="flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
//                     <Briefcase className="w-4 h-4 mr-2 text-muted-foreground" />
//                     <Input placeholder="Software Engineer" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
//                   </div>
//                 </FormControl>
//                 <FormMessage className="text-xs" />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="present_address"
//             render={({ field }) => (
//               <FormItem className="space-y-2">
//                 <FormLabel className="block text-sm font-medium">Present Address</FormLabel>
//                 <FormControl>
//                   <div className="flex items-start rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
//                     <MapPin className="w-4 h-4 mr-2 mt-1 text-muted-foreground" />
//                     <Textarea placeholder="123 Main St, City, Country" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
//                   </div>
//                 </FormControl>
//                 <FormMessage className="text-xs" />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="permanent_address"
//             render={({ field }) => (
//               <FormItem className="space-y-2">
//                 <FormLabel className="block text-sm font-medium">Permanent Address</FormLabel>
//                 <FormControl>
//                   <div className="flex items-start rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
//                     <MapPin className="w-4 h-4 mr-2 mt-1 text-muted-foreground" />
//                     <Textarea placeholder="456 Oak St, Town, Country" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
//                   </div>
//                 </FormControl>
//                 <FormMessage className="text-xs" />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem className="space-y-2">
//                 <FormLabel className="block text-sm font-medium">Email</FormLabel>
//                 <FormControl>
//                   <div className="flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
//                     <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
//                     <Input type="email" placeholder="john@example.com" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
//                   </div>
//                 </FormControl>
//                 <FormMessage className="text-xs" />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="password"
//             render={({ field }) => (
//               <FormItem className="space-y-2">
//                 <FormLabel className="block text-sm font-medium">Password</FormLabel>
//                 <FormControl>
//                   <div className="flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
//                     <UserCircle className="w-4 h-4 mr-2 text-muted-foreground" />
//                     <Input type="password" placeholder="********" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
//                   </div>
//                 </FormControl>
//                 <FormMessage className="text-xs" />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="mobile_number"
//             render={({ field }) => (
//               <FormItem className="space-y-2">
//                 <FormLabel className="block text-sm font-medium">Mobile Number</FormLabel>
//                 <FormControl>
//                   <div className="flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
//                     <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
//                     <Input placeholder="+1234567890" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
//                   </div>
//                 </FormControl>
//                 <FormMessage className="text-xs" />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="membership_type"
//             render={({ field }) => (
//               <FormItem className="space-y-2">
//                 <FormLabel className="block text-sm font-medium">Membership Type</FormLabel>
//                 <Select onValueChange={field.onChange} defaultValue={field.value}>
//                   <FormControl>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select membership type" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     {membershipTypes.map((type) => (
//                       <SelectItem key={type.value} value={type.value}>
//                         {type.label}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//                 <FormMessage className="text-xs" />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="body_type"
//             render={({ field }) => (
//               <FormItem className="space-y-2">
//                 <FormLabel className="block text-sm font-medium">Body Type</FormLabel>
//                 <Select onValueChange={field.onChange} defaultValue={field.value}>
//                   <FormControl>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select body type" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     {bodyTypes.map((type) => (
//                       <SelectItem key={type.value} value={type.value}>
//                         {type.label}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//                 <FormMessage className="text-xs" />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="weight"
//             render={({ field }) => (
//               <FormItem className="space-y-2">
//                 <FormLabel className="block text-sm font-medium">Weight</FormLabel>
//                 <FormControl>
//                   <div className="flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
//                     <Scale className="w-4 h-4 mr-2 text-muted-foreground" />
//                     <Input placeholder="70 kg" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
//                   </div>
//                 </FormControl>
//                 <FormMessage className="text-xs" />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="height"
//             render={({ field }) => (
//               <FormItem className="space-y-2">
//                 <FormLabel className="block text-sm font-medium">Height</FormLabel>
//                 <FormControl>
//                   <div className="flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
//                     <Ruler className="w-4 h-4 mr-2 text-muted-foreground" />
//                     <Input placeholder="175 cm" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
//                   </div>
//                 </FormControl>
//                 <FormMessage className="text-xs" />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="workout_plan_type"
//             render={({ field }) => (
//               <FormItem className="space-y-2">
//                 <FormLabel className="block text-sm font-medium">Workout Plan Type</FormLabel>
//                 <Select onValueChange={field.onChange} defaultValue={field.value}>
//                   <FormControl>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select workout plan type" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     {workoutPlanTypes.map((type) => (
//                       <SelectItem key={type.value} value={type.value}>
//                         {type.label}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//                 <FormMessage className="text-xs" />
//               </FormItem>
//             )}
//           />
//           <Button 
//             type="submit" 
//             disabled={isButtonDisabled}
//             className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-4 rounded-lg shadow-md transition-colors duration-200"
//           >
//             {isSubmitting ? "Submitting..." : "Submit Application"}
//           </Button>
//         </form>
//       </Form>
//     </div>
//   )
// }


"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Briefcase, MapPin, Mail, Phone, UserCircle, Scale, Ruler, Calendar, Dumbbell } from 'lucide-react'

const membershipTypes = [
  { value: 'Regular', label: 'Regular' },
  { value: 'Monthly', label: 'Monthly' },
  { value: 'Yearly', label: 'Yearly' },
]

const bodyTypes = [
  { value: 'Slim', label: 'Slim' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Large', label: 'Large' },
]

const workoutPlanTypes = [
  { value: 'Cardio', label: 'Cardio' },
  { value: 'Day_1', label: 'Day 1' },
  { value: 'Day_2', label: 'Day 2' },
  { value: 'Day_3', label: 'Day 3' },
  { value: 'Day_1_plus_Cardio', label: 'Day 1 + Cardio' },
  { value: 'Day_2_plus_Cardio', label: 'Day 2 + Cardio' },
  { value: 'Day_3_plus_Cardio', label: 'Day 3 + Cardio' },
]

const formSchema = z.object({
  full_name: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  age: z.number().min(16, { message: "Age must be at least 16." }).optional(),
  profession: z.string().min(2, { message: "Profession must be at least 2 characters." }),
  present_address: z.string().min(5, { message: "Present address must be at least 5 characters." }),
  permanent_address: z.string().min(5, { message: "Permanent address must be at least 5 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  mobile_number: z.string().min(10, { message: "Mobile number must be at least 10 characters." }),
  membership_type: z.enum(['Regular', 'Monthly', 'Yearly']),
  body_type: z.enum(['Slim', 'Medium', 'Large']),
  weight: z.string().min(2, { message: "Weight must be at least 2 characters." }),
  height: z.string().min(2, { message: "Height must be at least 2 characters." }),
  workout_plan_type: z.enum(['Cardio', 'Day_1', 'Day_2', 'Day_3', 'Day_1_plus_Cardio', 'Day_2_plus_Cardio', 'Day_3_plus_Cardio']),
})

export default function MemberAdmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [userRole, setUserRole] = useState('Admin') // This should be fetched from your authentication system
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      profession: "",
      present_address: "",
      permanent_address: "",
      email: "",
      password: "",
      mobile_number: "",
      membership_type: "Regular",
      body_type: "Medium",
      weight: "",
      height: "",
      workout_plan_type: "Cardio",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      // Here you would typically send the data to your API
      console.log(values)
      toast({
        title: "Member admitted successfully",
        description: "The new member has been added to the system.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem admitting the member.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isButtonDisabled = !['Admin', 'Employee'].includes(userRole) || isSubmitting

  return (
    <div className="container mx-auto py-10 px-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-8 text-center">Member Admission Form</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="full_name"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="block text-sm font-medium">Full Name</FormLabel>
                    <FormControl>
                      <div className="flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                        <User className="w-4 h-4 mr-2 text-muted-foreground" />
                        <Input placeholder="John Doe" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="block text-sm font-medium">Age</FormLabel>
                    <FormControl>
                      <div className="flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                        <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                        <Input type="number" placeholder='22' value={field.value || ""}  onChange={e => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="profession"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="block text-sm font-medium">Profession</FormLabel>
                    <FormControl>
                      <div className="flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                        <Briefcase className="w-4 h-4 mr-2 text-muted-foreground" />
                        <Input placeholder="Software Engineer" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="present_address"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="block text-sm font-medium">Present Address</FormLabel>
                    <FormControl>
                      <div className="flex items-start rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                        <MapPin className="w-4 h-4 mr-2 mt-1 text-muted-foreground" />
                        <Textarea placeholder="123 Main St, City, Country" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="permanent_address"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="block text-sm font-medium">Permanent Address</FormLabel>
                    <FormControl>
                      <div className="flex items-start rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                        <MapPin className="w-4 h-4 mr-2 mt-1 text-muted-foreground" />
                        <Textarea placeholder="456 Oak St, Town, Country" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="block text-sm font-medium">Email</FormLabel>
                    <FormControl>
                      <div className="flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                        <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                        <Input type="email" placeholder="john@example.com" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="block text-sm font-medium">Password</FormLabel>
                    <FormControl>
                      <div className="flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                        <UserCircle className="w-4 h-4 mr-2 text-muted-foreground" />
                        <Input type="password" placeholder="********" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobile_number"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="block text-sm font-medium">Mobile Number</FormLabel>
                    <FormControl>
                      <div className="flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                        <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                        <Input placeholder="+1234567890" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="membership_type"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="block text-sm font-medium">Membership Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="flex items-center justify-start">
                          <UserCircle className="w-4 h-4 mr-2 text-muted-foreground" />
                          <SelectValue placeholder="Select membership type" className="text-left" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {membershipTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="body_type"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="block text-sm font-medium">Body Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="flex items-center justify-start">
                          <UserCircle className="w-4 h-4 mr-2 text-muted-foreground" />
                          <SelectValue placeholder="Select body type" className="text-left" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {bodyTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="block text-sm font-medium">Weight</FormLabel>
                    <FormControl>
                      <div className="flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                        <Scale className="w-4 h-4 mr-2 text-muted-foreground" />
                        <Input placeholder="70 kg" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="block text-sm font-medium">Height</FormLabel>
                    <FormControl>
                      <div className="flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                        <Ruler className="w-4 h-4 mr-2 text-muted-foreground" />
                        <Input placeholder="175 cm" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="workout_plan_type"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="block text-sm font-medium">Workout Plan Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="flex items-center justify-start">
                          <Dumbbell className="w-4 h-4 mr-2 text-muted-foreground" />
                          <SelectValue placeholder="Select workout plan type" className="text-left" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {workoutPlanTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                disabled={isButtonDisabled}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-4 rounded-lg shadow-md transition-colors duration-200"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}