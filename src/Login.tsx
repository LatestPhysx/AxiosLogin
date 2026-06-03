import { useEffect } from "react";
import { useNavigate } from "react-router";
import GetToken from "./Services/GetToken";
import toast, { Toaster } from "react-hot-toast";
import type { AxiosError } from "axios";

export default function LoginComponent() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/dashboard");
        };
    }, [navigate]);

    const LoginFunction = async (FormData: FormData) => {
        try {
            const username = FormData.get("username")?.toString() ?? '';
            const password = FormData.get("password")?.toString() ?? '';
            const token = await GetToken({ username, password });
            localStorage.setItem("token", token);
            toast.success("Welcome !");
            navigate("/dashboard");
        }
        catch (err){
            const error = err as AxiosError
            if (error.response?.status === 400) toast.error("Wrong Creds !");
            else toast.error(`Unexpected Error, Error Code : ${error.response?.status}`);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-4 font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-400">
            <Toaster />
            <div className="absolute top-1/2 left-1/2 -z-10 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />

            <div className="w-full max-w-md rounded-xl border border-zinc-800 bg-[#121212] p-8 shadow-2xl backdrop-blur-md">

                <div className="mb-8 text-center">
                    <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
                        Welcome back
                    </h2>
                    <p className="mt-2 text-sm text-zinc-400">
                        Enter your credentials to access your account
                    </p>
                </div>

                <form action={LoginFunction} className="space-y-6">

                    <div>
                        <label
                            htmlFor="text"
                            className="block text-xs font-medium uppercase tracking-wider text-zinc-400"
                        >
                            username
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                placeholder="Username"
                                className="block w-full rounded-lg border border-zinc-800 bg-[#161616] px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 transition-colors duration-200 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-xs font-medium uppercase tracking-wider text-zinc-400"
                            >
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="••••••••"
                                className="block w-full rounded-lg border border-zinc-800 bg-[#161616] px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 transition-colors duration-200 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-[#121212] active:scale-[0.98]"
                    >
                        Sign in
                    </button>
                </form>

            </div>
        </div>
    );
}