import { supabase } from "@/lib/supabase";
import { useAuth } from "@/provider/AuthProvider";

import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

export const useAdminOrderList = ({ archived = false }) => {
	const statuses = archived ? ["Delivered"] : ["New", "Cooking", "Delivering"];
	const { session } = useAuth();
	const id = session?.user.id;
	return useQuery({
		queryKey: ["orders", { archived }, { userId: id }],
		queryFn: async () => {
			const { data, error } = await supabase
				.from("orders")
				.select("*")
				.eq("user_id", id)
				.in("status", statuses)
				.order("created_at", { ascending: false });
			if (error) {
				throw new Error(error.message);
			}
			return data;
		},
	});
};

export const useMyOrderList = () => {
	const { session } = useAuth();
	const id = session?.user.id;

	return useQuery({
		queryKey: ["orders", { userId: id }],
		queryFn: async () => {
			if (!id) return null;
			const { data, error } = await supabase
				.from("orders")
				.select("*")
				.eq("user_id", id)
				.order("created_at", { ascending: false });
			if (error) {
				throw new Error(error.message);
			}
			return data;
		},
	});
};

export const useOrderDetails = (id: number) => {
	return useQuery({
		queryKey: ["orders", id],
		queryFn: async () => {
			const { data, error } = await supabase
				.from("orders")
				.select(`*,order_items (*,products (*))`)
				.eq("id", id)
				.single();

			if (error) {
				throw new Error(error.message);
			}
			return data;
		},
	});
};

// add order
export const useInsertOrder = () => {
	const queryClient = useQueryClient();
	const { session } = useAuth();
	const userId = session?.user.id;

	return useMutation({
		async mutationFn(data: any) {
			const { error, data: newProduct } = await supabase
				.from("orders")
				.insert({ ...data, user_id: userId })
				.select()
				.single();
			if (error) {
				throw new Error(error.message);
			}
			return newProduct;
		},
		async onSuccess() {
			await queryClient.invalidateQueries({
				queryKey: ["orders"],
			});
		},
	});
};
// update order
export const useUpdateOrder = () => {
	const queryClient = useQueryClient();

	return useMutation({
		async mutationFn({
			id,
			updatedFields,
		}: {
			id: number;
			updatedFields: any;
		}) {
			const { error, data: updatedOrder } = await supabase
				.from("orders")
				.update(updatedFields)
				.eq("id", id)
				.select()
				.single();

			if (error) {
				throw new Error(error.message);
			}
			return updatedOrder;
		},
		async onSuccess(_, { id }) {
			await queryClient.invalidateQueries({
				queryKey: ["orders"],
			});
			await queryClient.invalidateQueries({
				queryKey: ["orders", id],
			});
		},
	});
};
// delete

export const useDeleteOrder = async (id: number) => {
	const { data, error } = await supabase.from("orders").delete().eq("id", id);
	if (error) {
		throw new Error(error.message);
	}
	return "Delete";
};
