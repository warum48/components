import React, {
  useState,
  useReducer,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
//------apollo--
import { filtersVar } from "_apollo/state";
import { useReactiveVar } from "@apollo/client";
//------mui-----
import { Stack, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Select, { SingleValue } from "react-select";
import { DebugBox } from "_components/debug/DebugBox";
import { useQuery } from "@apollo/client";
import { ALL_FILTERS } from "_apollo/queries";
import { SelectLabel } from "_componentslib";
import { ContainerPaperWithPadding } from "_componentslib";

import { getNumberOfPropsValuesThatArent } from "_sharedcode/UTILS";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
//import { StyledButton } from "_components/Buttons/StyledButton";
//import { StackHeader } from "_components/Tables/Stack/StackHeader";
//import { CollapseButton } from "_components/Buttons/CollapseButton";

import { StyledButton } from "_componentslib";
import { StackHeader } from "_componentslib";
import { CollapseButton } from "_componentslib";
import { StyledSelect } from "_componentslib";
//import SingleValue from "react-select/dist/declarations/src/components/SingleValue";

interface IFilters {
  [key: string]: number
}

interface IFiltersUI {
  /*
  * Коллапсер располагаем снаружи чтобы иметь возможность перестраивать сетку;
  */
  filtersCollapsed: boolean;
  setFiltersCollapsed: Dispatch<SetStateAction<boolean>>;

  filters?: any;
  setFilters: any;
  defFiltersState?: any;

  loading?: any;
  error?: any;
  data?: any;

  /**
   * Apollo variable
   */
  filtersVar?: any;
}

export const FiltersUI = ({
  filtersCollapsed,
  setFiltersCollapsed,
  filters,
  setFilters,
  defFiltersState,
  loading,
  error,
  data,
}: IFiltersUI) => {
  //const { debug } = useParams();
  //console.log("debug", debug);
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const filtersVar_re = useReactiveVar(filtersVar);

  //const { loading, error, data } = useQuery(ALL_FILTERS);

  function toggleCollapse() {
    setFiltersCollapsed((filtersCollapsed) => !filtersCollapsed);
  }

  //-------------reducer object----------------------
  /* interface FilterState {

    status: {
      name: string;
      value: SingleValue<{ value: number; label: string }> | null;
      queryData?: any;
      queryMapping?: IGQLitem; //any;
    };
    source: {
      name: string;
      value: SingleValue<{ value: number; label: string }> | null;
      queryData?: any;
      queryMapping?: any;
    };
    taskId: {
      name: string;
      value: SingleValue<{ value: number; label: string }> | null;
      queryData?: any;
      queryMapping?: any;
    };
    regionId: {
      name: string;
      value: SingleValue<{ value: number; label: string }> | null;
      queryData?: any;
      queryMapping?: any;
    };

    
  }

  interface IGQLitem {
    source?: string;
    description?: string;
    status?: string;
    id?: string;
    name?: string;
  }*/

  /*const defFiltersState = {

    status: {
      name: "Статус",
      value: null,
      queryData: data?.getTeStatus?.statusesList,
      queryMapping: data?.getTeStatus?.statusesList.map(
        ({ status, description }: IGQLitem) => ({
          value: status,
          label: description,
        })
      ),
    },
    source: {
      name: "Источник",
      value: null,
      queryData: data?.getTeStatus?.statusesList,
      queryMapping: data?.getTeStatus?.statusesList.map(
        ({ status, description }: IGQLitem) => ({
          value: status,
          label: description,
        })
      ),
    },
    taskId: {
      name: "Задача",
      value: null,
      queryData: data?.getTeStatus?.statusesList,
      queryMapping: data?.getTeStatus?.statusesList.map(
        ({ status, description }: IGQLitem) => ({
          value: status,
          label: description,
        })
      ),
    },
    regionId: {
      name: "Регион",
      value: null,
      queryData: data?.getTeStatus?.statusesList,
      queryMapping: data?.getTeStatus?.statusesList.map(
        ({ status, description }: IGQLitem) => ({
          value: status,
          label: description,
        })
      ),
    },
  };
  */

  /* const [filters, setFilters] = useReducer(
    (filters: FilterState, newState: Partial<FilterState>) => ({
      ...filters,
      ...newState,
    }),
    defFiltersState
  );*/

  /*useEffect(() => {
      let tempFiltersOb: any = {}; //TODO add ttype from var
      let k: keyof typeof filters;
      for (k in filters) {
        if (filters[k] && filters[k]?.value) {
          tempFiltersOb[k] = filters[k]?.value;
        }
      }
      filtersVar(tempFiltersOb);
      console.log('-tempFiltersOb', tempFiltersOb);
      console.log('-fi',Object.keys(filters).filter(f => filters[f as keyof typeof filters]   !== null).length)
    }, [filters]); */

  /*useEffect(() => {
    let tempFiltersOb: any = {}; //TODO add ttype from var
    let k: keyof typeof filters;
    for (k in filters) {
      if (filters[k] && filters[k]?.value?.value) {
        tempFiltersOb[k] = filters[k]?.value?.value;
      }
    }
    filtersVar(tempFiltersOb);
    console.log("-tempFiltersOb", tempFiltersOb);
    console.log(
      "-fi",
      Object.keys(filters).filter(
        (f) => filters[f as keyof typeof filters].value !== null
      ).length
    );
  }, [filters]);*/

  //--------------------------------------------------

  const clearAll = () => {
    setFilters(defFiltersState);
  };

  return (
    <>
      <ContainerPaperWithPadding
        sx={{ py: filtersCollapsed ? 1 : 2 }}
        // sx={{px:2, py:1, border: "1px solid", borderColor: "hsl(0, 0%, 80%)", }}

        //elevation={0}
      >
        {filtersCollapsed && (
          <Box>
            <Stack
              direction="row"
              spacing={2}
              sx={{ alignItems: "center", cursor: "pointer" }}
              onClick={toggleCollapse}
            >
              <StackHeader>Фильтры</StackHeader>
              <Typography
                variant="body2"
                sx={{
                  color:
                    getNumberOfPropsValuesThatArent(filters, null) == 0
                      ? theme.palette.success.main
                      : theme.palette.warning.main,
                  flex: 1,
                }}
              >
                Активно:&nbsp;
                {
                  getNumberOfPropsValuesThatArent(filters, null)
                  //Object.keys(filters).filter(k => filters[k as keyof typeof filters]  !== null).length
                }
              </Typography>
              <ArrowDropDownIcon />
            </Stack>
            <Stack direction="row" spacing={2}>
              {Object.keys(filters).map(
                (item, index) =>
                  filters[item as keyof typeof filters].value != null && (
                    <Typography variant="caption">
                      {filters[item as keyof typeof filters].name}
                    </Typography>
                  )
              )}
            </Stack>
          </Box>
        )}
        {/*</ContainerPaperWithPadding>  
      :
          <ContainerPaperWithPadding>*/}
        {data && !filtersCollapsed && (
          <Stack
            spacing={2}
            sx={{
              //!!!!overflow: "hidden",
              maxHeight: filtersCollapsed ? 0 : 1000,
              transition: !filtersCollapsed ? "max-height 1s" : "",
            }}
          >
            {!filtersCollapsed && (
              <CollapseButton
                isCollapsed={false}
                sx={{ position: "absolute", mt: -1, top: 0, right: 15 }}
                onClick={() => setFiltersCollapsed(true)}
              ></CollapseButton>
            )}
            {/*
          <Typography variant="subtitle2">Отфильтровать по:</Typography>
          */}

            {Object.keys(defFiltersState).map((item, i) => (
              <>
                <Box key={"fil" + item}>
                  <SelectLabel
                    text={
                      defFiltersState[item as keyof typeof defFiltersState].name
                    }
                  />
                  <StyledSelect
                    isClearable={true}
                    onChange={(e: any) =>
                      setFilters({
                        [item]: {
                          name: filters[item as keyof typeof filters].name,
                          value: e,
                        },
                      })
                    } //.value
                    //options={options}
                    options={filters[item as keyof typeof filters].queryMapping}
                    placeholder="..."
                    value={filters[item as keyof typeof filters].value || null}
                    classNamePrefix={
                      theme.palette.mode === "dark"
                        ? "react-select-dark"
                        : "react-select"
                    }
                  />
                </Box>

                {/*<li className="travelcompany-input" key={i}>
              <span className="input-label">{ defFiltersState[item].name }</span>
      </li>*/}
              </>
            ))}

            {(filters.status ||
              filters.taskId ||
              filters.source ||
              filters.regionId) && (
              <StyledButton
                variant="contained"
                //sx={{
                //  color: "#ffffff",
                //  boxShadow: 0,
                //  background: theme.palette.common.buttonGradient,
                //}}
                onClick={clearAll}
              >
                Очистить фильтры
              </StyledButton>
            )}
            <DebugBox code={JSON.stringify(filters)} />
            <DebugBox code={"apollo state: " + JSON.stringify(filtersVar_re)} />
          </Stack>
        )}
      </ContainerPaperWithPadding>
    </>
  );
};
