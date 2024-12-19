import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware';

const authDomain = 'https://munzir.kinde.com'; // Update this to your Kinde Auth instance URL

export default function middleware(req: any) {
  return withAuth(req, {
    isReturnToCurrentPage: true,
    authDomain, // Add this option to the withAuth config
  });
}
