export interface ProductObject  {
    id?: string,
    title?: string,
    price?: number,
    amount?: number,
    quantity?: number,
    indication_chart?: string,
    indication?: string,
    img?: string,
    detail?: string,
    link?: string
}

export interface ReviewObject {
    id?: string,
    product?: string,
    title?: string,
    rating?: number,
    detail?: string,
    client?: string,
    created_at?: string,
    updated_at?: string
}