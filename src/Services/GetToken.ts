import api from "./api";
import { type Login } from "../Types/Login";

const GetToken = async (formData: Login) => {
    const req: { accessToken: string } = await api.post("/auth/login", { ...formData });
    return req.accessToken;
};

export default GetToken;