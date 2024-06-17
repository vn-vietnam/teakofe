import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = process.env.EXPO_PUBLIC_URL as string;
const supabaseAnonKey = process.env.EXPO_PUBLIC_KEY as string;

export const supabase = createClient<any>(supabaseUrl, supabaseAnonKey, {
	auth: {
		storage: AsyncStorage,
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: false,
	},
});
