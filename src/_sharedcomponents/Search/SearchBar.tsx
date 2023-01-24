import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { StyledButton } from "../Buttons/StyledButton";

//import { panel_bg} from "_mui/MuiStyledComponents";
//import { searchInputVar } from "_apollo/state";
//import { StyledButton } from "../Buttons/StyledButton";

const Search = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  width: "100%",
  maxWidth: "500px",
  //...panel_bg[theme.palette.mode],
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    //padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    /*[theme.breakpoints.up('md')]: {
      width: '20ch',
    },*/
    fontSize: theme.typography.body2.fontSize,
    border: 1,
    borderColor: "hsl(0, 0%, 80%)", //"grey.300", //like in ReactSelect
    borderRadius: 1,
  },
}));

interface IProps{
  /**
   * Apollo variable, 
   * используется параметром в query,
   * также сохраняется в Apollo State и читается при новом рендере при переключении раздела если поиск был уже задан ранее
   */
  searchVar: any; //(arg?:string)=>any//{}//any;
}

export  function SearchBar({searchVar}:IProps) {
  const theme = useTheme();
  const inputRef = React.useRef<any>(null);

  const handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //it triggers by pressing the enter key
  if (e.key === 'Enter') {
    searchVar(inputRef.current?.value)
  }
};

  return (
    <Box
      sx={{
        display: "flex",
        maxHeight: "90px",
        my: 2,
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          ref={inputRef}
          fullWidth
          placeholder="…"
          inputProps={{ "aria-label": "search" }}
          defaultValue={searchVar()}
          onChange={(e) => {
            inputRef.current.value = e.target.value;
          }}
          onKeyPress={handleKeypress}
          sx={{
            fontSize: theme.typography.body2.fontSize,
            border: 1,
            borderColor: "hsl(0, 0%, 80%)", //"grey.300", //like in ReactSelect
            borderRadius: 1,
          }}
          //!!!---instant update---//onChange={e => {if(e.target.value.length > 2 || e.target.value.length==0){searchInputVar(e.target.value)}}}
        />
      </Search>
      <StyledButton
        type="submit"
        variant="contained"
        onClick={() => searchVar(inputRef.current?.value)}
      >
        Искать
      </StyledButton>
    </Box>
  );
}
