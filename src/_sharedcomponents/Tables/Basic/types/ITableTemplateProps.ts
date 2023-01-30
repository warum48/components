export interface ITableTemplateProps<Item, IHeader> {
    /**
     * Массив данных из GQL
     */
    rows: Item[];
    /**
     * Названиее и правила форматирования столбцов
     */
    columns: IHeader[];
    /**
     *Функцияция для стайлинга ячейки
     */
    getStyle?: (row: Item, colfield: string) => { color: string } | undefined; //| void;
  }