import { fetchProfile } from "@/lib/getProfile";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<any>({
  session: null,
  loading: true,
  profile: null,
  setProfile: null,
  setSession: null,
});

export default function AuthProvider({ children }: any) {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    setInitialSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        // console.log("Auth state changed:", session);
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (session) {
      setLoading(true);
      fetchProfile(session, setProfile).finally(() => setLoading(false));
    }
  }, [session]);

  return (
    <AuthContext.Provider
      value={{ session, loading, profile, setProfile, setSession }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
