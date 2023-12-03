import React from "react";
import {
  Typography,
  Box,
  Button,
  Stack,
  styled,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { useAuth } from "@/context/authContext";
import { motion } from "framer-motion";
import Link from "next/link";

const StyledButton = styled(Button)(() => ({
  padding: "13px 48px",
  fontSize: "16px",
}));

const BannerContent = () => {
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
  const { user } = useAuth();

  return (
    <Box mt={lgDown ? 8 : 0}>
      <motion.div
        initial={{ opacity: 0, translateY: 550 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 30,
        }}
      >
        <Typography
          variant="h1"
          fontWeight={900}
          sx={{
            fontSize: {
              md: "54px",
            },
            lineHeight: {
              md: "60px",
            },
          }}
        >
          Bienvenido a<br />
          <Typography component={"span"} variant="inherit" color={"primary"}>
            &nbsp; &nbsp; &nbsp; Medical Learning
          </Typography>
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 550 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 30,
          delay: 0.4,
        }}
      >
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={3}>
          {!user ? (
            <Link href="/iniciar-sesion">
              <StyledButton variant="contained" color="primary">
                Iniciar Sesión
              </StyledButton>
            </Link>
          ) : (
            <Link href="/dashboard">
              <StyledButton variant="contained" color="primary">
                Inicio
              </StyledButton>
            </Link>
          )}
        </Stack>
      </motion.div>
    </Box>
  );
};

export default BannerContent;