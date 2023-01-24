import { Box, Paper } from "@mui/material";
import { styled, SxProps, useTheme } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
//import { opaque_bg, panel_bg } from "_mui/MuiStyledComponents";

/*export const CollapseButton = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
  }));
  */
export interface IProps  {
  isCollapsed: boolean;
  /**
   * Дополнительные стили, удобно использовать для позиционирования
   */
  sx?: SxProps;
  /*
  * Переключающая состояние ф-ция в родительском компоненте
  */
  onClick: () => void; //React.MouseEventHandler;
  // All other props
  //[x: string]: any;
};
export const CollapseButton = ({
  sx = null,
  onClick,
  isCollapsed = false,
}: IProps) => {
  const theme = useTheme();
  return (
    <Box
      onClick={onClick}
      sx={{
        border: "1px solid",
        borderRadius: "5px",
        borderColor: "hsl(0, 0%, 80%)",
        px: 1,
        cursor: "pointer",
       // ...opaque_bg[theme.palette.mode],
        ...sx,
      }}
    >
      {isCollapsed ? (
        <ArrowDropDownIcon sx={{ display: "block" }} />
      ) : (
        <ArrowDropUpIcon sx={{ display: "block" }} />
      )}
    </Box>
  );
};
