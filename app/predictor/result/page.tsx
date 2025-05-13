import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PredictorResultPage() {
  return (
    <div className="px-6 py-8">
      <div className="mb-6 flex items-center">
        <Link href="/predictor" className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5" />
          <span className="text-lg font-medium">Prediction result</span>
        </Link>
      </div>

      <div className="mb-2">
        <p className="text-sm">Projected CGPA</p>
      </div>

      <div className="mb-2 text-center">
        <h1 className="text-6xl font-bold">4.92</h1>
      </div>

      <div className="mb-6 flex items-center justify-center gap-2">
        <span className="text-sm">👍 You're on track</span>
      </div>

      <div className="mb-6">
        <p className="mb-2 text-sm">Breakdown of needed result</p>
        <div className="rounded-lg bg-gray-200 p-4">
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <span className="text-sm font-medium">Courses</span>
              <span className="text-sm font-medium">Course units</span>
              <span className="text-sm font-medium">Needed grades</span>
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-gray-300 pt-2">
              <span className="text-sm">CSC 502</span>
              <span className="text-sm">2</span>
              <span className="text-sm">95</span>
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-gray-300 pt-2">
              <span className="text-sm">CSC 504</span>
              <span className="text-sm">3</span>
              <span className="text-sm">96</span>
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-gray-300 pt-2">
              <span className="text-sm">CSC 506</span>
              <span className="text-sm">3</span>
              <span className="text-sm">95</span>
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-gray-300 pt-2">
              <span className="text-sm">CSC 506</span>
              <span className="text-sm">1</span>
              <span className="text-sm">98</span>
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-gray-300 pt-2">
              <span className="text-sm">CSC 506</span>
              <span className="text-sm">1</span>
              <span className="text-sm">92</span>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/dashboard"
        className="flex w-full items-center justify-center rounded-full bg-black py-3 text-center text-white"
      >
        Save
      </Link>
    </div>
  )
}
