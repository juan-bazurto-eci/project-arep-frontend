import React from "react";
import withAuthenticationRequired from "@/hoc/withAuthenticationRequired";
import { useAuth } from "@/context/authContext";
import { arrayDestructuring } from "@/helpers/arrayDestructuring";
import { useRouter } from "next/router";
import ExaminationRegisterForm from "@/components/organisms/Forms/ExaminationRegisterForm";

const ExaminationRegisterPage = () => {
  const { user } = useAuth();
  const router = useRouter();
  const name = user ? arrayDestructuring(user?.email?.split("@"), "") : "";
  if (name !== "doctor") router.push("/dashboard");
  return <ExaminationRegisterForm />;
};

export default withAuthenticationRequired(ExaminationRegisterPage);
