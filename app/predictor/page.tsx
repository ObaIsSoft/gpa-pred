"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Plus } from "lucide-react"

export default function PredictorPage() {
  const [courses, setCourses] = useState([{ id: 1, name: "", units: "" }])

  const addCourse = () => {
    setCourses([...courses, { id: courses.length + 1, name: "", units: "" }])
  }

  return (
    <div className="px-6 py-8">
      <div className="mb-6 flex items-center">
        <Link href="/dashboard" className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5" />
          <span className="text-lg font-medium">CGPA Predictor</span>
        </Link>
      </div>

      <div className="mb-6 space-y-4">
        <div className="space-y-1">
          <label className="text-sm">Expected gpa</label>
          <input type="text" placeholder="Enter your expected gpa" className="w-full rounded bg-gray-200 p-3 text-sm" />
        </div>
      </div>

      <div className="mb-4 text-center">
        <p className="text-sm">Enter your courses and their units</p>
      </div>

      <div className="space-y-6">
        {courses.map((course) => (
          <div key={course.id} className="rounded-lg bg-gray-100 p-4">
            <h3 className="mb-4 text-sm font-medium">Course {course.id}</h3>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm">Course name</label>
                <input type="text" className="w-full rounded bg-gray-200 p-3 text-sm" />
              </div>

              <div className="space-y-1">
                <label className="text-sm">number of units</label>
                <input type="number" className="w-full rounded bg-gray-200 p-3 text-sm" />
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addCourse}
          className="flex items-center justify-center gap-2 rounded-full bg-gray-200 px-4 py-2 text-sm"
          style={{ position: "fixed", bottom: "20px", right: "20px" }}
        >
          <Plus className="h-5 w-5" />
          Add courses
        </button>
      </div>
    </div>
  )
}
