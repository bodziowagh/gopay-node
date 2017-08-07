export interface WithActive {
    active?: boolean
}

export interface WithUpdatedOn {
    updatedOn?: string
}

export interface WithCreatedOn {
    createdOn?: string
}

export interface WithConfig<T> {
    configuration: T
}

export interface AmountWithCurrency {
    amount: number
    currency: string
}
