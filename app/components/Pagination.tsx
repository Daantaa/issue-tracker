'use client'

import { Button, Flex, Text } from '@radix-ui/themes'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface Props {
  itemCount: number
  pageSize: number
  currentPage: number
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const searchParams = useSearchParams()
  const pageCount = Math.ceil(itemCount / pageSize)

  if (pageCount <= 1) return null

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `/issues/list?${params.toString()}`
  }

  return (
    <Flex align="center" gap="2">
      <Text size="2">
        Page {currentPage} of {pageCount}
      </Text>
      <Flex gap="1">
        <Link href={createPageURL(currentPage - 1)}>
          <Button 
            color="gray" 
            variant="soft" 
            disabled={currentPage <= 1}
          >
            <ChevronLeftIcon />
          </Button>
        </Link>
        <Link href={createPageURL(currentPage + 1)}>
          <Button 
            color="gray" 
            variant="soft" 
            disabled={currentPage >= pageCount}
          >
            <ChevronRightIcon />
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Pagination 