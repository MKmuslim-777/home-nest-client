import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const { isLoading: roleLoading, data: role = "customer" } = useQuery({
    queryKey: ["user-role", user.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/users/${user.email}/role`);

      return result.data?.role || "customer";
    },
  });
  return { roleLoading, role };
};

export default useRole;
