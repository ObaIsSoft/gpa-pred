import Link from "next/link"
import { ArrowLeft, Pencil } from "lucide-react"

interface SemesterDetailsPageProps {
  params: {
    id: string
  }
}

export default function SemesterDetailsPage({ params }: SemesterDetailsPageProps) {
  const semesterId = params.id
  const [year, semester] = semesterId.split("-")

  return (
    <div className="px-6 py-8">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/records" className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5" />
          <span className="text-lg font-medium">
            Semester {semester}/Year {year}
          </span>
        </Link>
        <Link href={`/records/edit/${semesterId}`} className="flex items-center gap-1 text-sm">
          Edit records
          <Pencil className="h-4 w-4" />
        </Link>
      </div>

      <div className="mb-4 space-y-2">
        <p className="text-sm">Your grade point average for the semester is:</p>
        <h1 className="text-center text-6xl font-bold">4.98</h1>
      </div>

      <div className="mb-6 rounded-lg bg-gray-200 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Overall CGPA</span>
          <span className="font-medium">5.00</span>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-sm font-medium">List of courses</h2>

        <div className="rounded-lg bg-gray-100 p-4">
          <h3 className="mb-4 text-sm font-medium">Course 1</h3>

          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm">Course name</label>
              <div className="w-full rounded bg-gray-200 p-3 text-sm">csc 510</div>
            </div>

            <div className="space-y-1">
              <label className="text-sm">number of units</label>
              <div className="w-full rounded bg-gray-200 p-3 text-sm">2</div>
            </div>

            <div className="space-y-1">
              <label className="text-sm">Grade obtained</label>
              <div className="w-full rounded bg-gray-200 p-3 text-sm">90</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gray-100 p-4">
          <h3 className="mb-4 text-sm font-medium">Course 2</h3>

          <div className="space-y-1">
            <label className="text-sm">Course name</label>
            <div className="w-full rounded bg-gray-200 p-3 text-sm">csc 510</div>
          </div>
        </div>
      </div>
    </div>
  )
}
