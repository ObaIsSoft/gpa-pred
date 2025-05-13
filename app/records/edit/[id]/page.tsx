"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface EditRecordsPageProps {
  params: {
    id: string
  }
}

export default function EditRecordsPage({ params }: EditRecordsPageProps) {
  const recordId = params.id
  const [courses, setCourses] = useState([
    { id: 1, name: "csc 510", units: "2", grade: "90" },
    { id: 2, name: "csc 510", units: "2", grade: "" },
  ])

  return (
    <div className="px-6 py-8">
      <div className="mb-6 flex items-center">
        <Link href={`/records/semester/${recordId}`} className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5" />
          <span className="text-lg font-medium">Edit records</span>
        </Link>
      </div>

      <div className="space-y-6">
        {courses.map((course) => (
          <div key={course.id} className="rounded-lg bg-gray-100 p-4">
            <h3 className="mb-4 text-sm font-medium">Course {course.id}</h3>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm">Course name</label>
                <input type="text" defaultValue={course.name} className="w-full rounded bg-gray-200 p-3 text-sm" />
              </div>

              <div className="space-y-1">
                <label className="text-sm">number of units</label>
                <input type="number" defaultValue={course.units} className="w-full rounded bg-gray-200 p-3 text-sm" />
              </div>

              <div className="space-y-1">
                <label className="text-sm">Grade obtained</label>
                <input type="number" defaultValue={course.grade} className="w-full rounded bg-gray-200 p-3 text-sm" />
              </div>
            </div>
          </div>
        ))}

        <Link
          href={`/records/semester/${recordId}`}
          className="flex w-full items-center justify-center rounded-full bg-black py-3 text-center text-white"
        >
          Save
        </Link>
      </div>
    </div>
  )
}
