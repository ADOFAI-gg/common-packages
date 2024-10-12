export interface SearchQuery {
	filter: Filter | null
	sort: Sort[]
}

export interface Sort {
	objective: string
	direction: 'asc' | 'desc'
}

export type Filter =
	| AndFilter
	| OrFilter
	| InFilter
	| NotInFilter
	| EqualFilter
	| NotEqualFilter
	| StringContainsFilter
	| StringNotContainsFilter
	| StringStartsWithFilter
	| StringEndsWithFilter

export type FilterPrimitive = string | number

export interface AndFilter {
	op: 'and'
	data: Filter[]
}

export interface OrFilter {
	op: 'or'
	data: Filter[]
}

export interface InFilter {
	op: 'in'
	key: string
	values: FilterPrimitive[]
}

export interface NotInFilter {
	op: 'nin'
	key: string
	values: FilterPrimitive[]
}

export interface EqualFilter {
	op: 'eq'
	key: string
	value: FilterPrimitive
}

export interface NotEqualFilter {
	op: 'neq'
	key: string
	value: FilterPrimitive
}

export interface StringContainsFilter {
	op: 'stringContains'
	key: string
	value: string
	ignoreCase?: boolean
}

export interface StringNotContainsFilter {
	op: 'stringNotContains'
	key: string
	value: string
	ignoreCase?: boolean
}

export interface StringStartsWithFilter {
	op: 'stringStartsWith'
	key: string
	value: string
	ignoreCase?: boolean
}

export interface StringEndsWithFilter {
	op: 'stringEndsWith'
	key: string
	value: string
	ignoreCase?: boolean
}
