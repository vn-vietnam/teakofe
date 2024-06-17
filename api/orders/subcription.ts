import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export const useInsertOrderSubscription = () => {
	const queryClient = useQueryClient();

	useEffect(() => {
		const ordersSubscription = supabase
			.channel("custom-insert-channel")
			.on(
				"postgres_changes",
				{ event: "INSERT", schema: "public", table: "orders" },
				(payload) => {
					console.log("Change received!", payload);

					queryClient.invalidateQueries({
						queryKey: ["orders"],
					});
				}
			)
			.subscribe();

		return () => {
			ordersSubscription.unsubscribe();
		};
	}, []);
};

export const useUpdateOrderSubscription = (id: number) => {
	const queryClient = useQueryClient();

	useEffect(() => {
		const orders = supabase
			.channel("custom-filter-channel")
			.on(
				"postgres_changes",
				{
					event: "UPDATE",
					schema: "public",
					table: "orders",
					filter: `id=eq.${id}`,
				},
				(payload) => {
					queryClient.invalidateQueries({
						queryKey: ["orders", id],
					});
				}
			)
			.subscribe();

		return () => {
			orders.unsubscribe();
		};
	}, []);
};
export const useUpdateAllOrderSubcription = () => {
	const queryClient = useQueryClient();

	useEffect(() => {
		const orders = supabase
			.channel("'custom-update-channel")
			.on(
				"postgres_changes",
				{
					event: "UPDATE",
					schema: "public",
					table: "orders",
				},
				(payload) => {
					queryClient.invalidateQueries({
						queryKey: ["orders"],
					});
				}
			)
			.subscribe();

		return () => {
			orders.unsubscribe();
		};
	}, []);
};
export const useDeleteAllOrderSubcription = () => {
	const queryClient = useQueryClient();

	useEffect(() => {
		const orders = supabase
			.channel("custom-delete-channel")
			.on(
				"postgres_changes",
				{
					event: "DELETE",
					schema: "public",
					table: "orders",
				},
				(payload) => {
					queryClient.invalidateQueries({
						queryKey: ["orders"],
					});
				}
			)
			.subscribe();

		return () => {
			orders.unsubscribe();
		};
	}, []);
};