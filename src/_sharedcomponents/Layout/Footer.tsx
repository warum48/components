import * as React from "react";
import { Box, Typography } from "@mui/material"
import { GoToTop } from "../Buttons/GoToTop"
import { DebugSwitcher } from "_components/debug/DebugSwitcher"

export const Footer = () => {

    return(
<Box
            component="footer"
            sx={{ p: 2, mx: { sx: 1, lg: 4 }, bottom: 0 }}
          >
            {/*<Divider sx={{ mr:'25px'}} />*/}
            <GoToTop />
            <Box sx={{ maxWidth: "80%" }}>
              <Typography variant="caption">
                © ООО "УК "Бизнес Решения", 2022. Все права защищены.
              </Typography>
            </Box>

            {/*<Copyright />*/}
            <Box>
              <DebugSwitcher />
            </Box>
          </Box>
    )
}

