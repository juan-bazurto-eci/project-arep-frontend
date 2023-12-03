import React from "react";
import {
  Grid,
  Box,
  Container,
  useMediaQuery,
  Stack,
  Theme,
} from "@mui/material";
import Image from "next/image";
import BannerContent from "@/components/molecules/banners/BannerContent";

const Banner = () => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  return (
    <Box mb={10} sx={{ overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6} sm={8}>
            <BannerContent />
          </Grid>
          {lgUp ? (
            <Grid item xs={12} lg={6}>
              <Box
                p={20}
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.light,
                  minWidth: "2000px",
                  height: "calc(100vh - 100px)",
                  maxHeight: "790px",
                }}
              >
                <Stack direction={"row"}>
                  <Box>
                    <Image
                      src={"/images/logos/ml4.png"}
                      width={400}
                      height={300}
                      alt="banner"
                      priority
                    />
                  </Box>
                </Stack>
              </Box>
            </Grid>
          ) : null}
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
