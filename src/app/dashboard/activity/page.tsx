"use client"

import { DataTable } from '../../components/dashboard/data-table'

const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Member', joinDate: '2023-01-15' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', joinDate: '2023-02-20' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'Member', joinDate: '2023-03-10' },
  { id: '4', name: 'Alice Williams', email: 'alice@example.com', role: 'Trainer', joinDate: '2023-04-05' },
  { id: '5', name: 'Charlie Brown', email: 'charlie@example.com', role: 'Member', joinDate: '2023-05-12' },
]

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'joinDate', label: 'Join Date' },
]

export default function UserManagement() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">User Management</h1>
      <DataTable data={users} columns={columns} />
    </div>
  )
}

