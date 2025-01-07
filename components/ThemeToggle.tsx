/** @format */

"use client";

import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();

    return (
        <Switch
            checked={resolvedTheme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        />
    );
}
