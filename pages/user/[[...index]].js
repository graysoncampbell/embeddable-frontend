import { UserProfile } from "@clerk/nextjs";

export const config = {
    runtime: "experimental-edge",
};

const UserProfilePage = () => <UserProfile path="/user" routing="path" />;

export default UserProfilePage;
