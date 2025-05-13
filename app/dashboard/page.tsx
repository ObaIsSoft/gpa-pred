"use client"

import Link from "next/link"
import { Calculator, BarChartIcon as ChartBar, FileText, History } from "lucide-react"
import { useState } from "react"

export default function DashboardPage() {
  const [userName] = useState("Samuel")

  return (
    <div className="px-6 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gray-200"></div>
          <span className="text-sm font-medium">Welcome {userName}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gray-200"></div>
          <div className="relative h-6 w-6 rounded-full bg-gray-200">
            <span className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[8px] text-white">
              1
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6 rounded-lg bg-gray-200 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Overall CGPA</span>
          <span className="text-3xl font-bold">4.95</span>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-4 gap-4">
        <Link href="/calculator" className="flex flex-col items-center gap-1">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200">
            <Calculator className="h-6 w-6" />
          </div>
          <span className="text-center text-xs">Calculate GPA</span>
        </Link>
        <Link href="/predictor" className="flex flex-col items-center gap-1">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200">
            <ChartBar className="h-6 w-6" />
          </div>
          <span className="text-center text-xs">Predict GPA</span>
        </Link>
        <Link href="/progress" className="flex flex-col items-center gap-1">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200">
            <FileText className="h-6 w-6" />
          </div>
          <span className="text-center text-xs">Progress Report</span>
        </Link>
        <Link href="/records" className="flex flex-col items-center gap-1">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200">
            <History className="h-6 w-6" />
          </div>
          <span className="text-center text-xs">Records</span>
        </Link>
      </div>

      <div className="mb-4">
        <h2 className="text-sm font-medium">2024/2025 2nd semester</h2>
      </div>

      <div className="space-y-3">
        <div className="rounded-lg bg-gray-200 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Current GPA</span>
            <span className="font-medium">5.00</span>
          </div>
        </div>

        <div className="rounded-lg bg-gray-200 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Projected GPA</span>
            <span className="font-medium">5.00</span>
          </div>
        </div>

        <div className="rounded-lg bg-gray-200 p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Courses</span>
              <span className="text-sm font-medium">Needed grades</span>
            </div>
            <div className="flex items-center justify-between border-t border-gray-300 pt-2">
              <span className="text-sm">CSC 502</span>
              <span className="text-sm">95</span>
            </div>
            <div className="flex items-center justify-between border-t border-gray-300 pt-2">
              <span className="text-sm">CSC 504</span>
              <span className="text-sm">96</span>
            </div>
            <div className="flex items-center justify-between border-t border-gray-300 pt-2">
              <span className="text-sm">CSC 506</span>
              <span className="text-sm">95</span>
            </div>
            <div className="flex items-center justify-between border-t border-gray-300 pt-2">
              <span className="text-sm">CSC 508</span>
              <span className="text-sm">95</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
