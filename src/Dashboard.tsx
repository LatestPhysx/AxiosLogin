import GetProfile from "./Services/GetProfile";
import { useEffect, useState } from "react";
import type { User } from "./Types/User";

export default function DashboardComponent() {

    const [userData, setUserData] = useState<User | null>(null)

    useEffect(() => {
        const fetchProfile = async () => {
            const data = await GetProfile();
            setUserData(data);
        };
        fetchProfile();
    }, []);

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-[#0A0A0A] p-4 sm:p-8 font-sans antialiased">
            <div className="w-full max-w-4xl rounded-2xl border border-zinc-800 bg-[#121212] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3">

                <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col items-center text-center justify-center bg-[#161616]/40">
                    <img
                        src={userData?.image}
                        alt="avatar"
                        className="h-24 w-24 sm:h-28 sm:w-28 rounded-xl object-cover border border-zinc-700 bg-[#1a1a1a] shadow-md"
                    />

                    <h2 className="text-lg font-bold text-zinc-100 tracking-tight mt-5 truncate max-w-full">
                        {userData?.firstName}, {userData?.lastName}
                    </h2>

                    <p className="text-xs font-mono text-emerald-400 mt-1">@{userData?.username}</p>

                    <span className="mt-4 inline-flex items-center rounded bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-400 border border-blue-500/20">
                        {userData?.gender}
                    </span>
                </div>

                <div className="md:col-span-2 p-6 sm:p-8 flex flex-col justify-between space-y-6">

                    <div className="grid grid-cols-1 gap-4">
                        <div className="rounded-xl border border-zinc-800/40 bg-[#161616]/30 p-4 space-y-1">
                            <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">Email Address</span>
                            <p className="text-sm font-medium text-zinc-200 truncate">{userData?.email}</p>
                        </div>

                        <div className="rounded-xl border border-zinc-800/40 bg-[#161616]/30 p-4 space-y-1">
                            <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">Database ID</span>
                            <p className="text-sm font-mono font-semibold text-zinc-400">#{userData?.id}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};