import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useReactiveVar } from "@apollo/client";
import {
  ascSortByVar,
  descSortByVar,
  curSortFieldVar,
  curSortFieldInitValue,
} from "_apollo/state";
import { DebugBox } from "_components/debug/DebugBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Link } from "@mui/material";

type IHeaderSort = {
  /**
   * имя поля в GQL 
   */
  field: string;
  /**
   * видимое имя поля
   */
  headerName: string;
  /**
   * имя переменной в параметрах сортировки
   */
  sortFieldName?: string;
};

/**
 * Компонент используется в главной таблице (ReportMainTable)
 */
export function TabHeaderSorter({
  field,
  headerName,
  sortFieldName,
}: IHeaderSort) {
  //const
  const theme = useTheme();
  const curSortFieldVar_re = useReactiveVar(curSortFieldVar);

  const ascSortBy_re = useReactiveVar(ascSortByVar);
  const descSortBy_re = useReactiveVar(descSortByVar);

  const field_apiname = sortFieldName ? sortFieldName : field;
  //const inputRef = React.useRef<any>(null);
  /* const setSort = function(){
    if(curSortFieldVar().field !== field){
     if(curSortFieldVar().sortType === "desc"){
      curSortFieldVar({field:field, sortType:"asc"})
     }else{
      curSortFieldVar({field:field, sortType:"desc"})
     }
    }else{
      curSortFieldVar({field:field, sortType:"desc"})
    }
  }*/
  React.useEffect(() => {}, [curSortFieldVar_re]);

  const setSort = function () {
    console.log("curSortFieldVar().field", curSortFieldVar().field);
    if (
      curSortFieldVar().field !== field_apiname ||
      curSortFieldVar().sortType === "asc"
    ) {
      curSortFieldVar({ field: field_apiname, sortType: "desc" });
      descSortByVar(field_apiname);
      ascSortByVar("");
      console.log("--field", field_apiname);
    } else {
      curSortFieldVar({ field: field_apiname, sortType: "asc" });
      ascSortByVar(field_apiname);
      descSortByVar("");
    }
  };

  const resetSort = function () {
    curSortFieldVar(curSortFieldInitValue);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          //justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box onClick={setSort} sx={{ cursor: "pointer" }}>
          <Link sx={{ color: theme.palette.text.primary }}>{headerName}</Link>
        </Box>

        {curSortFieldVar_re.field == field_apiname && (
          <>
            {curSortFieldVar().sortType === "desc" ? (
              <ArrowDropDownIcon onClick={setSort} sx={{ cursor: "pointer" }} />
            ) : (
              <ArrowDropUpIcon onClick={setSort} sx={{ cursor: "pointer" }} />
            )}

            {field_apiname != "id" && field_apiname != "teId" && (
              <HighlightOffIcon
                sx={{ mt: "2px", fontSize: "medium", cursor: "pointer" }}
                onClick={resetSort}
              />
            )}
          </>
        )}
      </Box>
      <DebugBox>
        {ascSortBy_re}/{descSortBy_re}
      </DebugBox>
    </>
  );
}
