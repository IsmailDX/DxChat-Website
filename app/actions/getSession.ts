import { getServerSession } from "next-auth";

import { authOptions } from "../api/auth/[...nextauth]/route";

//Purpose: This hook is used to retrieve the session data on the server.
//The getSession function calls getServerSession with the authOptions and returns the session object,
//which contains the currently logged-in user's data if they are authenticated

export default async function getSession() {
  return await getServerSession(authOptions);
}
