import { useRouter } from "expo-router";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { randomUUID } from "expo-crypto";
import { useInsertOrder } from "@/api/orders";
import { useInsertOrderItems } from "@/api/order-items";

type CartType = {
	items: any;
	addItem: (product: any, size: any) => void;
	updateQuantity: (itemId: string, amount: -1 | 1) => void;
	total: number;
	checkout: () => void;
};

const CartContext = createContext<CartType>({
	items: [],
	addItem: () => {},
	updateQuantity: () => {},
	total: 0,
	checkout: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
	const [items, setItems] = useState<any>([]);
	const { mutate: insertOrder } = useInsertOrder();
	const { mutate: insertOrderItems } = useInsertOrderItems();

	const router = useRouter();

	// add
	const addItem = (product: any, size: any["size"]) => {
		// if already in cart, increment quantity
		const existingItem = items.find(
			(item: any) => item.product === product && item.size === size
		);

		if (existingItem) {
			updateQuantity(existingItem.id, 1);
			return;
		}

		const newCartItem: any = {
			id: randomUUID(), // generate
			product,
			product_id: product.id,
			size,
			quantity: 1,
		};

		setItems([newCartItem, ...items]);
	};

	// update
	const updateQuantity = (itemId: string, amount: -1 | 1) => {
		setItems(
			items
				.map((item: any) =>
					item.id !== itemId
						? item
						: { ...item, quantity: item.quantity + amount }
				)
				.filter((item: any) => item.quantity > 0)
		);
	};

	let total = items.reduce(
		(sum: any, item: any) => (sum += item.product.price * item.quantity),
		0
	);
	const clearCart = () => {
		setItems([]);
	};
	const checkout = async () => {
		insertOrder(
			{ total },
			{
				onSuccess: saveOrderItems,
			}
		);
	};
	const saveOrderItems = (order: any) => {
		const orderItems = items.map((cartItem: any) => ({
			order_id: order.id,
			product_id: cartItem.product_id,
			quantity: cartItem.quantity,
			size: cartItem.size,
		}));
		insertOrderItems(orderItems, {
			onSuccess() {
				clearCart();
				router.push(`/home`);
			},
			onError(error){
				console.log(error)
			}
		});
	};
	return (
		<CartContext.Provider
			value={{ items, addItem, updateQuantity, total, checkout }}
		>
			{children}
		</CartContext.Provider>
	);
};
export default CartProvider;

export const useCart = () => useContext(CartContext);
