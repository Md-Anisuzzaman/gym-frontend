"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
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
// import { toast } from "@/components/ui/use-toast"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LogIn, LogOut, UserCircle, Briefcase, MapPin, Clock } from 'lucide-react'

const roles = [
  { value: 'trainer', label: 'Trainer' },
  { value: 'admin', label: 'Admin' },
  { value: 'super_admin', label: 'Super Admin' },
  { value: 'cleaner', label: 'Cleaner' },
]

const shifts = [
  { value: 'morning', label: 'Morning' },
  { value: 'evening', label: 'Evening' },
]

const branches = [
  { value: 'branch_1', label: 'Branch-1 (Siddirganj)' },
  { value: 'branch_2', label: 'Branch-2 (Sanarapar)' },
  { value: 'branch_3', label: 'Branch-3 (Saddam Market)' },
]

const formSchema = z.object({
  id: z.string().min(1, { message: "Employee ID is required." }),
  role: z.enum(['trainer', 'admin', 'super_admin', 'cleaner']),
  shift: z.enum(['morning', 'evening']),
  branch: z.enum(['branch_1', 'branch_2', 'branch_3']),
})

export default function EmployeeAttendance() {
    const [isSubmittingEntry, setIsSubmittingEntry] = useState(false)
    const [isSubmittingExit, setIsSubmittingExit] = useState(false)
    const { toast } = useToast()
  
    const entryForm = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        id: "",
        role: "trainer",
        shift: "morning",
        branch: "branch_1",
      },
    })
  
    const exitForm = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        id: "",
        role: "trainer",
        shift: "morning",
        branch: "branch_1",
      },
    })
  
    async function onEntrySubmit(values: z.infer<typeof formSchema>) {
      setIsSubmittingEntry(true)
      try {
        // Here you would typically send the data to your API
        console.log("Entry submission:", { ...values, date: new Date().toISOString() })
        toast({
          title: "Entry recorded successfully",
          description: "The employee entry has been logged.",
        })
      } catch (error) {
        toast({
          title: "Error",
          description: "There was a problem recording the entry.",
          variant: "destructive",
        })
      } finally {
        setIsSubmittingEntry(false)
      }
    }
  
    async function onExitSubmit(values: z.infer<typeof formSchema>) {
      setIsSubmittingExit(true)
      try {
        // Here you would typically send the data to your API
        console.log("Exit submission:", { ...values, date: new Date().toISOString() })
        toast({
          title: "Exit recorded successfully",
          description: "The employee exit has been logged.",
        })
      } catch (error) {
        toast({
          title: "Error",
          description: "There was a problem recording the exit.",
          variant: "destructive",
        })
      } finally {
        setIsSubmittingExit(false)
      }
    }
  
    return (
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Employee Attendance</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <LogIn className="mr-2" /> Employee Entry
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...entryForm}>
                <form onSubmit={entryForm.handleSubmit(onEntrySubmit)} className="space-y-4">
                  <FormField
                    control={entryForm.control}
                    name="id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employee ID</FormLabel>
                        <FormControl>
                          <div className="flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                            <UserCircle className="w-4 h-4 mr-2 text-muted-foreground" />
                            <Input placeholder="Enter ID" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={entryForm.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="flex items-center justify-start">
                              <Briefcase className="w-4 h-4 mr-2 text-muted-foreground" />
                              <SelectValue placeholder="Select role" className="text-left" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {roles.map((role) => (
                              <SelectItem key={role.value} value={role.value}>
                                {role.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={entryForm.control}
                    name="shift"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Shift</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="flex items-center justify-start">
                              <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                              <SelectValue placeholder="Select shift" className="text-left" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {shifts.map((shift) => (
                              <SelectItem key={shift.value} value={shift.value}>
                                {shift.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={entryForm.control}
                    name="branch"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Branch</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="flex items-center justify-start">
                              <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                              <SelectValue placeholder="Select branch" className="text-left" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {branches.map((branch) => (
                              <SelectItem key={branch.value} value={branch.value}>
                                {branch.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmittingEntry}
                    className="w-full"
                  >
                    {isSubmittingEntry ? "Recording..." : "Record Entry"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <LogOut className="mr-2" /> Employee Exit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...exitForm}>
                <form onSubmit={exitForm.handleSubmit(onExitSubmit)} className="space-y-4">
                  <FormField
                    control={exitForm.control}
                    name="id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employee ID</FormLabel>
                        <FormControl>
                          <div className="flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                            <UserCircle className="w-4 h-4 mr-2 text-muted-foreground" />
                            <Input placeholder="Enter ID" {...field} className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={exitForm.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled>
                          <FormControl>
                            <SelectTrigger className="flex items-center justify-start">
                              <Briefcase className="w-4 h-4 mr-2 text-muted-foreground" />
                              <SelectValue placeholder="Select role" className="text-left" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {roles.map((role) => (
                              <SelectItem key={role.value} value={role.value}>
                                {role.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={exitForm.control}
                    name="shift"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Shift</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled>
                          <FormControl>
                            <SelectTrigger className="flex items-center justify-start">
                              <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                              <SelectValue placeholder="Select shift" className="text-left" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {shifts.map((shift) => (
                              <SelectItem key={shift.value} value={shift.value}>
                                {shift.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={exitForm.control}
                    name="branch"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Branch</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled>
                          <FormControl>
                            <SelectTrigger className="flex items-center justify-start">
                              <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                              <SelectValue placeholder="Select branch" className="text-left" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {branches.map((branch) => (
                              <SelectItem key={branch.value} value={branch.value}>
                                {branch.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmittingExit}
                    className="w-full"
                  >
                    {isSubmittingExit ? "Recording..." : "Record Exit"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
  
  