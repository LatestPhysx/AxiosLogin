import { useNavigate } from "react-router"

const App = () => {

  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0A0A0A] px-4 font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-400">
      <div className="absolute top-1/2 left-1/2 -z-10 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">
          This is an Axios test
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          Select an entry point to verify API routing and responses.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <button onClick={() => navigate("/login")} className="flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] active:scale-[0.98]">
            Login
          </button>

          <button onClick={() => navigate("/login")} className="flex w-full items-center justify-center rounded-lg border border-zinc-800 bg-[#121212] px-4 py-3 text-sm font-medium text-zinc-300 transition-all duration-200 hover:bg-zinc-800 hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-700/50 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] active:scale-[0.98]">
            Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}

export default App