import { supabase } from "@/lib/supabase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// get all products
export const useProductList = () => {
	return useQuery({
		queryKey: ["products"],
		queryFn: async () => {
			const { data, error } = await supabase.from("products").select("*");
			if (error) {
				throw new Error(error.message);
			}
			return data;
		},
	});
};

// get filter search products
export const useSearchProduct = (search: any) => {
	return useQuery({
		queryKey: ["products", search],
		queryFn: async () => {
			const { data, error } = await supabase
				.from("products")
				.select(
					`
				name,image,price,id,
				categories (
				  id,name
				)
			  `
				)
				.like("name", `%${search}%`);
			if (error) {
				throw new Error(error.message);
			}
			return data;
		},
	});
};
// get fillter products
export const useFilterProductList = (idCate: any) => {
	return useQuery({
		queryKey: ["products", idCate],
		queryFn: async () => {
			if (idCate) {
				const { data, error } = await supabase
					.from("products")
					.select(
						`
					name,image,price,id,
					categories (
					  id,name
					)
				  `
					)
					.eq("cate_id", idCate);
				if (error) {
					throw new Error(error.message);
				}
				return data;
			} else {
				const { data, error } = await supabase.from("products").select(
					`
				name,image,price,id,
				categories (
				  id,name
				)
			  `
				);
				if (error) {
					throw new Error(error.message);
				}
				return data;
			}
		},
	});
};
// get single product
export const useProduct = (id: number) => {
	return useQuery({
		queryKey: ["products", id],
		queryFn: async () => {
			const { data, error } = await supabase
				.from("products")
				.select(
					`
				name,image,price,id,description,
				categories (
				  id,name
				)
			  `
				)
				.eq("id", id)
				.single();

			if (error) {
				throw new Error(error.message);
			}
			return data;
		},
	});
};
// create product
export const useInsertProduct = () => {
	const queryClient = useQueryClient();

	return useMutation({
		async mutationFn(data: any) {
			const { error, data: newProduct } = await supabase
				.from("products")
				.insert({
					name: data.name,
					image: data.image,
					price: data.price,
					description: data.des,
					cate_id: data.cate,
				})
				.single();

			if (error) {
				throw new Error(error.message);
			}
			return newProduct;
		},
		async onSuccess() {
			await queryClient.invalidateQueries({
				queryKey: ["products"],
			});
		},
	});
};
// update product
export const useUpdateProduct = () => {
	const queryClient = useQueryClient();

	return useMutation({
		async mutationFn(data: any) {
			const { error, data: updatedProduct } = await supabase
				.from("products")
				.update({
					name: data.name,
					image: data.image,
					price: data.price,
					description: data.des,
					cate_id: data.cate,
				})
				.eq("id", data.id)
				.select()
				.single();

			if (error) {
				throw new Error(error.message);
			}
			return updatedProduct;
		},
		async onSuccess(_, { id }) {
			await queryClient.invalidateQueries({
				queryKey: ["products"],
			});
			await queryClient.invalidateQueries({
				queryKey: ["products", id],
			});
		},
	});
};
// delete product

export const useDeleteProduct = () => {
	const queryClient = useQueryClient();

	return useMutation({
		async mutationFn(id: number) {
			const { error } = await supabase.from("products").delete().eq("id", id);
			if (error) {
				throw new Error(error.message);
			}
		},
		async onSuccess() {
			await queryClient.invalidateQueries({
				queryKey: ["products"],
			});
		},
	});
};
