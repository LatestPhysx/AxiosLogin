import api from "./api";
import type { User } from "../Types/User";

const GetProfile = async () => {
    const req: User = await api.get("/auth/me");
    return req
};

export default GetProfile;