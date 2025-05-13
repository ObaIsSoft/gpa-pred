
import Link from "next/link"
import { Apple } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="px-6 py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Login</h1>
          <p className="text-sm">
            New here?{" "}
            <Link href="/signup" className="text-rose-500 hover:underline">
              Sign up
            </Link>{" "}
            and get started!
          </p>
        </div>

        <div className="flex justify-center py-4">
          <div className="h-24 w-24 rounded-full bg-gray-200"></div>
        </div>

        <form className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input id="email" type="email" className="w-full rounded bg-yellow-50 p-3 text-sm" required />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Link href="/forgot-password" className="text-xs text-rose-500 hover:underline">
                Forgot password
              </Link>
            </div>
            <input id="password" type="password" className="w-full rounded bg-yellow-50 p-3 text-sm" required />
          </div>

          <Link
            href="/dashboard"
            className="flex w-full items-center justify-center rounded-full bg-rose-400 py-3 text-center text-white hover:bg-rose-500"
          >
            login
          </Link>
        </form>

        <div className="text-center text-sm">or</div>

        <div className="space-y-3">
          <button className="flex w-full items-center justify-center gap-2 rounded bg-yellow-50 py-3 text-sm">
            <GoogleIcon className="h-5 w-5" />
            login with google
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded bg-yellow-50 py-3 text-sm">
            <FacebookIcon className="h-5 w-5" />
            login with Facebook
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded bg-yellow-50 py-3 text-sm">
            <Apple className="h-5 w-5" />
            login with Apple ID
          </button>
        </div>
      </div>
    </div>
  )
}

// Custom Google icon component
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

// Custom Facebook icon component
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="11" fill="#1877F2" />
      <path
        d="M15.5 12H13V9.5C13 8.67 13.17 8.17 14.29 8.17H15.57V5.69C15.3 5.65 14.53 5.57 13.64 5.57C11.78 5.57 10.57 6.7 10.57 9.2V12H8.1V14.8H10.57V22.2C11.1 22.27 11.63 22.3 12.19 22.3C12.67 22.3 13.13 22.27 13.57 22.2V14.8H15.18L15.5 12Z"
        fill="white"
      />
    </svg>
  )
}
