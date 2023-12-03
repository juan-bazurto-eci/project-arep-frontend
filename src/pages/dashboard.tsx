import React from "react";
import withAuthenticationRequired from "@/hoc/withAuthenticationRequired";
import ExaminationPage from "@/pages/examenes/index";

const Dashboard = () => {
  return <ExaminationPage />;
};

export default withAuthenticationRequired(Dashboard);
