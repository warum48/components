### IHeader

Ƭ **IHeader**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `field` | `string` | Обращение к полю в JSON, может быть вложенным ^ например, field: "good.name" |
| `func?` | (`st`: `string` \| `boolean`) => `string` | Функция преобразования полученного значения в видимую строку, например: func: (st) => (st === true ? "Есть в отчете" : "Товара нет в отчете"), |
| `headerName` | `string` | Видимое название поля |
| `type?` | ``"string"`` \| ``"image"`` | - |

#### Defined in

src/_sharedcomponents/Tables/Basic/IHeader.ts:1