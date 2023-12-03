import React from "react";
import withAuthenticationRequired from "@/hoc/withAuthenticationRequired";
import ConsultExamination from "@/components/organisms/Tables/ConsultExamination";
import ConsultExaminationDoctor from "@/components/organisms/Tables/ConsultExaminationDoctor";
import { useAuth } from "@/context/authContext";
import { arrayDestructuring } from "@/helpers/arrayDestructuring";

const ConsultExaminationPage = () => {
  const { user } = useAuth();
  const name = user ? arrayDestructuring(user?.email?.split("@"), "") : "";
  return (
    <>
      {name === "doctor" ? (
        <ConsultExaminationDoctor />
      ) : (
        <ConsultExamination />
      )}
    </>
  );
};

export default withAuthenticationRequired(ConsultExaminationPage);
