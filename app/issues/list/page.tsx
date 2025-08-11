import prisma from '@/prisma/client'
import { Table } from '@radix-ui/themes'
import { IssueStatusBadge, Link, Pagination } from '@/app/components'
import NextLink from 'next/link'
import IssueActions from './IssueActions'
import { Issue, Status } from '@prisma/client'
import { redirect } from 'next/navigation';
import { ArrowUpIcon } from '@radix-ui/react-icons'

interface Props {
  searchParams: Promise<{ status?: string, orderBy?: keyof Issue, sortOrder?: 'asc' | 'desc', page?: string }>;
}

const IssuesPage = async ({ searchParams }: Props) => {

  const columns: {
    label: string;
    value: keyof Issue;
    className?: string
  }[] = [
      { label: "Issue", value: "title" },
      { label: "Status", value: "status", className: "hidden md:table-cell" },
      { label: "Created", value: "createdAt", className: "hidden md:table-cell" },
    ]

  const params = await searchParams

  // Validate status parameter
  const validStatuses: Status[] = ['OPEN', 'CLOSED', 'IN_PROGRESS']
  const status = params.status && validStatuses.includes(params.status as Status)
    ? params.status as Status
    : undefined

  // Redirect if invalid status is provided
  if (params.status && !status) {
    redirect('/issues/list')
  }

  // Handle sorting
  const orderBy = params.orderBy || 'createdAt'
  const sortOrder = params.sortOrder || 'desc'

  // Handle pagination
  const page = parseInt(params.page || '1')
  const pageSize = 10
  const skip = (page - 1) * pageSize

  // Validate page number
  if (page < 1) {
    redirect('/issues/list')
  }

  const issues = await prisma.issue.findMany({
    where: {
      ...(status && { status }),
    },
    orderBy: {
      [orderBy]: sortOrder
    },
    skip,
    take: pageSize
  });

  const issueCount = await prisma.issue.count({
    where: {
      ...(status && { status }),
    }
  });


  return (
    <div>
      <IssueActions />
             <Table.Root variant='surface'>
         <Table.Header>
           <Table.Row>
             {columns.map(column => {
               const isCurrentSort = params.orderBy === column.value
               const newSortOrder = isCurrentSort && params.sortOrder === 'asc' ? 'desc' : 'asc'
               
               return (
                 <Table.ColumnHeaderCell key={column.value} className={column.className}>
                   <NextLink href={{
                     pathname: '/issues/list',
                     query: { 
                       ...(params.status && { status: params.status }),
                       orderBy: column.value,
                       sortOrder: newSortOrder
                     }
                   }}>
                     {column.label}
                   </NextLink>
                   {isCurrentSort && (
                     <ArrowUpIcon className={`inline ml-1 ${params.sortOrder === 'desc' ? 'rotate-180' : ''}`} />
                   )}
                 </Table.ColumnHeaderCell>
               )
             })}
           </Table.Row>
         </Table.Header>
        <Table.Body>
          {issues.map(issue => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>
                  {issue.title}
                </Link>
                <div className='block md:hidden'>
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>{new Date(issue.createdAt).toLocaleDateString()}</Table.Cell>
            </Table.Row>
          ))}
                 </Table.Body>
       </Table.Root>
       <div className="mt-5">
         <Pagination 
           itemCount={issueCount} 
           pageSize={pageSize} 
           currentPage={page} 
         />
       </div>
     </div>
   )
 }
export const dynamic = 'force-dynamic';
export default IssuesPage