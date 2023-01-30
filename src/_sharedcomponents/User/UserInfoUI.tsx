import React from 'react';
import { Box, Button } from "@mui/material"
import { useTheme} from "@mui/material/styles";
import Person2Icon from "@mui/icons-material/Person2";
import { GlobalContext } from "_context/ContextGlobal";
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { RoutesTypes } from '_types/TYPES';
import { StyledButton } from '../Buttons/StyledButton';

interface IProps {
    email: string;
    logOut: ()=>void;
    changePasswordRoute: string;
}

export const UserInfoUI = ({email,
    logOut,
    changePasswordRoute} : IProps) => {
    const theme = useTheme();
   /* const { setToken } = React.useContext(GlobalContext);
    const [cookieEmail, setCookieEmail, removeCookieEmail] = useCookies(["liame"]);
    const [cookieToken, setCookieToken, removeCookieToken] = useCookies(["nekot"]);

    function logOut(){
        removeCookieEmail('liame',{path:'/'});
        removeCookieToken('nekot',{path:'/'});
    }*/
    return(
        <Box
          sx={{
            //p:2,
            m: 3,
            position: "relative",
            bottom: 0,
          }}
        >
          <Box
            sx={{
              top: 0,
              m: 0,
              my: 1,
              zIndex: 10,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              //justifyContent: 'flex-start',//"center",
              alignItems: "center",
              fontSize: theme.typography.body2.fontSize,
            }}
          >
            <Box
              sx={{
                //mr: 1,
                display: "flex",
                mb: 1,
                color: "white",
                textAlign: "center",
                fontSize: theme.typography.body2.fontSize,
              }}
            >
              <Person2Icon fontSize="small" sx={{ mr: 1 }} /> {email}
            </Box>

            <Box>
              {/*<LogoutIcon fontSize="small" sx={{mr:1}}/>*/}
              <StyledButton appearance='smallwhite' onClick={logOut}>Выйти</StyledButton>
              <StyledButton appearance='smallwhite' component={Link} to={changePasswordRoute}>Сменить пароль</StyledButton>
              
            </Box>
          </Box>
        </Box>
    )
}