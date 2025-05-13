"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronDown, ChevronRight, ChevronUp, Search } from "lucide-react"

export default function RecordsPage() {
  const [expandedYear, setExpandedYear] = useState<number | null>(1)
  const [expandedSemester, setExpandedSemester] = useState<string | null>(null)

  const toggleYear = (year: number) => {
    setExpandedYear(expandedYear === year ? null : year)
    setExpandedSemester(null)
  }

  const toggleSemester = (semester: string) => {
    setExpandedSemester(expandedSemester === semester ? null : semester)
  }

  return (
    <div className="px-6 py-8">
      <div className="mb-6 flex items-center">
        <Link href="/dashboard" className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5" />
          <span className="text-lg font-medium">Records page</span>
        </Link>
      </div>

      <div className="mb-6 flex items-center rounded-full bg-gray-200 px-4 py-2">
        <Search className="mr-2 h-4 w-4 text-gray-500" />
        <input type="text" placeholder="Search" className="w-full bg-transparent text-sm focus:outline-none" />
      </div>

      <div className="space-y-3">
        <button
          onClick={() => toggleYear(1)}
          className="flex w-full items-center justify-between rounded-lg bg-gray-200 p-4"
        >
          <span className="text-sm font-medium">Year 1</span>
          {expandedYear === 1 ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        {expandedYear === 1 && (
          <div className="ml-4 space-y-2">
            <Link href="/records/semester/1-1" className="flex items-center justify-between rounded-lg bg-gray-100 p-4">
              <span className="text-sm">Semester 1</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link href="/records/semester/1-2" className="flex items-center justify-between rounded-lg bg-gray-100 p-4">
              <span className="text-sm">Semester 2</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        )}

        <button
          onClick={() => toggleYear(2)}
          className="flex w-full items-center justify-between rounded-lg bg-gray-200 p-4"
        >
          <span className="text-sm font-medium">Year 2</span>
          {expandedYear === 2 ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        <button
          onClick={() => toggleYear(3)}
          className="flex w-full items-center justify-between rounded-lg bg-gray-200 p-4"
        >
          <span className="text-sm font-medium">Year 3</span>
          {expandedYear === 3 ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        <button
          onClick={() => toggleYear(4)}
          className="flex w-full items-center justify-between rounded-lg bg-gray-200 p-4"
        >
          <span className="text-sm font-medium">Year 4</span>
          {expandedYear === 4 ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        <button
          onClick={() => toggleYear(5)}
          className="flex w-full items-center justify-between rounded-lg bg-gray-200 p-4"
        >
          <span className="text-sm font-medium">Year 5</span>
          {expandedYear === 5 ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
      </div>
    </div>
  )
}
