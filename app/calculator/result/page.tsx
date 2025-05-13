import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CalculatorResultPage() {
  return (
    <div className="px-6 py-8">
      <div className="mb-6 flex items-center">
        <Link href="/dashboard" className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5" />
          <span className="text-lg font-medium">Back to home</span>
        </Link>
      </div>

      <div className="mb-8 space-y-4 text-center">
        <p className="text-sm">Your grade point average for the semester is:</p>
        <h1 className="text-6xl font-bold">4.68</h1>
      </div>

      <div className="mb-6 rounded-lg bg-gray-200 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Overall CGPA</span>
          <span className="font-medium">4.90</span>
        </div>
      </div>

      <div className="space-y-3">
        <Link
          href="/dashboard"
          className="flex w-full items-center justify-center rounded-full bg-black py-3 text-center text-white"
        >
          Save
        </Link>

        <Link
          href="/calculator"
          className="flex w-full items-center justify-center rounded-full border border-gray-300 py-3 text-center"
        >
          Recalculate
        </Link>
      </div>
    </div>
  )
}
