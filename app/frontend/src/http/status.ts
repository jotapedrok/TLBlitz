import { api } from "../services/api";

export const getStatus = async () => {
  try {
    const response = await api.get("/status");
    return response.data;
  } catch (e) {
    return { error: e };
  }
};

export const changeStatus = async (statusId: string) => {
  try {
    const response = await api.patch("/status", { status: statusId });
    return response.data;
  } catch (e) {
    return { error: e };
  }
};
