import React from "react";
import { useAuth } from "@/provider/AuthProvider";
import { Redirect } from "expo-router";
import Loading from "@/components/Loading";

const Index = () => {
	return <Redirect href={"/login"} />;
};

export default Index;
