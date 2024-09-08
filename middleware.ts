import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

//config to protect all routes under /users
export const config = {
  matcher: ["/users/:path*"],
};
