export interface ITableRow {
    [key: string]: string | number | boolean | undefined
}

export interface ITableCol {
    field: string
    label: string
    width?: number
    align?: string
}
