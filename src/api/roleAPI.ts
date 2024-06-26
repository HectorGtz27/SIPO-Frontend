import Axios from "axios";
import { Role, RoleResponseArray, RoleResponse } from "../types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export const getRoles = async (
  page: number,
  limit: number,
  name: string,
  updatedStart: string,
  updatedEnd: string,
  activeDB: boolean
) => {
  try {
    const response = await Axios.get<RoleResponseArray>(
      `${API_BASE_URL}/roles`,
      {
        params: {
          page,
          limit,
          name,
          updatedStart,
          updatedEnd,
          activeDB,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching roles", error);
    throw new Error("Error fetching roles");
  }
};

export const getRoleById = async (id: string): Promise<Role> => {
  try {
    const response = await Axios.get<RoleResponse>(
      `${API_BASE_URL}/roles/${id}`
    );
    return response.data.data;
  } catch (error) {
    throw new Error("Error fetching role by id");
  }
};

export const createRole = async (roleData: { name: string }): Promise<Role> => {
  try {
    const response = await Axios.post<RoleResponse>(
      `${API_BASE_URL}/roles`,
      roleData
    );
    return response.data.data;
  } catch (error) {
    throw new Error("Error creating role");
  }
};

export const updateRole = async (roleData: {
  id: string;
  name: string;
}): Promise<Role> => {
  try {
    const response = await Axios.patch<RoleResponse>(
      `${API_BASE_URL}/roles/${roleData.id}`,
      roleData
    );
    return response.data.data;
  } catch (error) {
    throw new Error("Error updating role");
  }
};

export const deleteRole = async (id: string): Promise<void> => {
  try {
    await Axios.delete(`${API_BASE_URL}/roles/${id}`);
  } catch (error) {
    throw new Error("Error deleting role");
  }
};
