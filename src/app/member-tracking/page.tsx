"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { LogIn, LogOut, User, Key } from 'lucide-react'

// Placeholder for API calls
async function sendToAPI(data: any) {
  // This is where you would implement your API call
  console.log('Sending to API:', data)
  // For now, we'll just return a mock success response
  return { success: true }
}

export default function MemberTracking() {
  const [entryId, setEntryId] = useState('')
  const [entryLocker, setEntryLocker] = useState('')
  const [exitId, setExitId] = useState('')
  const [exitLocker, setExitLocker] = useState('')

  const handleEntrySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const now = new Date()
    const entryData = {
      id: entryId,
      locker: entryLocker,
      date: now.toISOString().split('T')[0],
      time: now.toTimeString().split(' ')[0]
    }
    console.log('Entry submitted:', entryData)
    
    try {
      const response = await sendToAPI({
        type: 'entry',
        ...entryData
      })
      if (response.success) {
        // Handle successful submission (e.g., show a success message)
        console.log('Entry recorded successfully')
        setEntryId('')
        setEntryLocker('')
      } else {
        // Handle error (e.g., show an error message)
        console.error('Failed to record entry')
      }
    } catch (error) {
      console.error('Error submitting entry:', error)
    }
  }

  const handleExitSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const now = new Date()
    const exitData = {
      id: exitId,
      locker: exitLocker,
      date: now.toISOString().split('T')[0],
      time: now.toTimeString().split(' ')[0]
    }
    console.log('Exit submitted:', exitData)
    
    try {
      const response = await sendToAPI({
        type: 'exit',
        ...exitData
      })
      if (response.success) {
        // Handle successful submission (e.g., show a success message)
        console.log('Exit recorded successfully')
        setExitId('')
        setExitLocker('')
      } else {
        // Handle error (e.g., show an error message)
        console.error('Failed to record exit')
      }
    } catch (error) {
      console.error('Error submitting exit:', error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Member Tracking</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <LogIn className="mr-2" /> Member Entry
            </CardTitle>
            <CardDescription>Record member entry time</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleEntrySubmit} className="space-y-4">
              <div className="flex items-center space-x-2">
                <User className="text-gray-400" />
                <Input
                  type="text"
                  placeholder="Member ID"
                  value={entryId}
                  onChange={(e) => setEntryId(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Key className="text-gray-400" />
                <Input
                  type="text"
                  placeholder="Locker Number"
                  value={entryLocker}
                  onChange={(e) => setEntryLocker(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Record Entry
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <LogOut className="mr-2" /> Member Exit
            </CardTitle>
            <CardDescription>Record member exit time</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleExitSubmit} className="space-y-4">
              <div className="flex items-center space-x-2">
                <User className="text-gray-400" />
                <Input
                  type="text"
                  placeholder="Member ID"
                  value={exitId}
                  onChange={(e) => setExitId(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Key className="text-gray-400" />
                <Input
                  type="text"
                  placeholder="Locker Number"
                  value={exitLocker}
                  onChange={(e) => setExitLocker(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Record Exit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

