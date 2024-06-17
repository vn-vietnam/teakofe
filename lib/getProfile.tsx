import { Session } from "@supabase/supabase-js";
import { supabase } from "./supabase";

export const fetchProfile = async (session: any, setProfile: any) => {
	if (session) {
		try {
			const { data } = await supabase
				.from("profiles")
				.select("*")
				.eq("id", session.user.id)
				.single();
			setProfile(data || null);
		} catch (error) {
			console.error("Error fetching profile:", error);
		}
	}
};
