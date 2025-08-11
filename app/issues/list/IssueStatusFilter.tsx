'use client'

import { Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import React from 'react'

const statuses: { label: string, value?: Status  }[] = [
    { label: 'All' },
    { value: 'OPEN', label: 'Open' },
    { value: 'CLOSED', label: 'Closed' },
    { value: 'IN_PROGRESS', label: 'In Progress' },
]

const IssueStatusFilter = () => {
    const router = useRouter()

  return (
    <Select.Root onValueChange={(status) => {
        const query = status && status !== 'All' ? `?status=${status}` : ''
        console.log('Selected status:', status)
        console.log('New URL:', `/issues/list${query}`)
        router.replace(`/issues/list${query}`)
    }}>
        <Select.Trigger placeholder='Filter by status...' />
        <Select.Content>
            {statuses.map((status) => (
                <Select.Item key={status.value || 'all'} value={status.value || "All"} >
                    {status.label}     
        </Select.Item>
            ))}
        </Select.Content>
    </Select.Root>
  )
}

export default IssueStatusFilter