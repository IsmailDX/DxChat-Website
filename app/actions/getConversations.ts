import primsa from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getConversations = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser?.id) {
    return [];
  }

  try {
    const conversation = await prisma?.conversation.findMany({
      orderBy: {
        lastMessageAt: "desc",
      },
      where: {
        userIds: {
          has: currentUser.id,
        },
      },
      include: {
        users: true,
        messages: {
          include: {
            // the user who sent the messsage
            sender: true,
            //array of people who saw the message
            seen: true,
          },
        },
      },
    });

    return conversation;
  } catch (error) {
    return [];
  }
};

export default getConversations;
