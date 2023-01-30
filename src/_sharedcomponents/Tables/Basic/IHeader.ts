export type IHeader = {
    /** 
    *Обращение к полю в JSON, может быть вложенным ^
    например, field: "good.name"
    */
    field: string;
    /** 
    *Видимое название поля
    */
    headerName: string;
    //func?: ({}: any | string) => string;
    /** 
    *Функция преобразования полученного значения в видимую строку, 
    например: func: (st) => (st === true ? "Есть в отчете" : "Товара нет в отчете"),
    */
    func?: (st: string | boolean) => string;
    /**
     * Функция стилизации (раскраски) ячейки в зависимости от значения
     */
    funcStyle?: ({}: any | string) => {[key:string]:any};//any; //, theme: any
    /** 
     * В ячейка может быть картинка, надо для этого указать type=image, по дефолту string
     */
    type?: "string" | "image" ;//string; //| undefined
  } ;