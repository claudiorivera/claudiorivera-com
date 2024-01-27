export function paginate<T>({
	array,
	itemsPerPage,
	page = 1,
}: {
	array: T[];
	itemsPerPage?: number;
	page?: number;
}) {
	return itemsPerPage
		? array.slice((page - 1) * itemsPerPage, page * itemsPerPage)
		: array;
}
