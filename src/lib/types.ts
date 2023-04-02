export type PaginationTake = number;
export type PaginationCursor = string | undefined;

export interface CursorPagination {
	take?: PaginationTake;
	cursorId?: PaginationCursor;
}
