import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import { DesktopDatePicker } from "@mui/x-date-pickers/"; //DesktopDatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField, useTheme } from "@mui/material";
import { useState,  Dispatch, SetStateAction} from 'react';

interface IProps  {
    /*valueTo: Dayjs | null | string;
    setValueTo: Dispatch<SetStateAction<Dayjs | null | string>>
    valueFrom: Dayjs | null | string;
    setValueFrom:Dispatch<SetStateAction<Dayjs | null | string>>*/

    valueTo: Dayjs | null ;
    setValueTo: Dispatch<SetStateAction<Dayjs | null >>
    valueFrom: Dayjs | null ;
    setValueFrom:Dispatch<SetStateAction<Dayjs | null >>
}

/**
 * Выбор дат, все выравнивания в родителе
 */
export const FromAndTo = ({valueTo, setValueTo, valueFrom, setValueFrom}:IProps) => {
    const theme = useTheme();

      return(
        <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={"ru"}
              >
                <DesktopDatePicker
                  label="С даты"
                  inputFormat="DD.MM.YYYY"
                  value={valueFrom}
                  onChange={setValueFrom}
                  //onChange={handleChangeFrom}
                  renderInput={(params) => <TextField {...params} sx={{fontSize: theme.typography.body2.fontSize}}/>}
                />

                <DesktopDatePicker
                  label="по дату"
                  inputFormat="DD.MM.YYYY"
                  value={valueTo}
                  onChange={setValueTo}
                  //onChange={handleChangeTo}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
      )
}