/** @format */

import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

const authDomain = "https://munzir.kinde.com";
export default function middleware(req: any) {
    return withAuth(req, {
        isReturnToCurrentPage: true,
        authDomain, // Add this option to the withAuth config
    });
}
export const config = {
    matcher: ["/dashboard"],
};
