import * as React from "react";
import { Box, Stack } from "@mui/material";
import { LogOut } from "_components/User/LogOut";
import { errorTransformator } from "../../_sharedcode/ApolloErrorTransformator";
import { CodeError } from "./CodeError";
import { LoadingBox } from "./LoadingBox";
import { NotFound } from "./NotFound";
import { NotFoundDetails } from "./NotFoundDetails";

interface IProps {
  data: any;
  error: any;
  loading: any;
  tableArray: any[];
  emptyArrayText?: string;
}

export const TableAPIStatus = ({
  loading,
  error,
  data,
  tableArray,
  emptyArrayText = "",
}: IProps) => {
  return (
    <>
      {data && tableArray.length == 0 && (
        <>
          {/*<NotFoundDetails text={emptyArrayText ? emptyArrayText : "В этом разделе нет информации"} />
    Не найдено задач, удовлетворяющих условиям поиска или фильтров
    */}
          <NotFound
            text={
              emptyArrayText ? emptyArrayText : "В этом разделе нет информации"
            }
          />
        </>
      )}
      {error && <CodeError text={errorTransformator(error)} />}
      {error?.message=="User is not authenticated" && <Box sx={{ textAlign: "center", pb: 3 }}><LogOut appearance='logerror'/></Box>}
      {loading && <LoadingBox />}
    </>
  );
};
