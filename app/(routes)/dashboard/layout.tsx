/** @format */

"use client";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SideNav from "./_components/SideNav";
import { FileListContext } from "@/app/_context/FileListContext";
import { ThemeProvider } from "@/components/ThemeProvider";

function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { user }: any = useKindeBrowserClient();
    const convex = useConvex();
    const router = useRouter();
    const [fileList_, setFileList_] = useState();

    useEffect(() => {
        user && checkTeam();
    }, [user]);

    const checkTeam = async () => {
        const result = await convex.query(api.teams.getTeams, {
            email: user?.email,
        });

        if (!result.length) {
            router.push("/teams/create");
        }
    };

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            // enableSystem
            disableTransitionOnChange
        >
            <div>
                <FileListContext.Provider value={{ fileList_, setFileList_ }}>
                    <div className="grid grid-cols-4">
                        <div className="h-screen w-[20rem] fixed">
                            <SideNav />
                        </div>
                        <div className="col-span-4 pl-[20rem]">{children}</div>
                    </div>
                </FileListContext.Provider>
            </div>
        </ThemeProvider>
    );
}

export default DashboardLayout;
