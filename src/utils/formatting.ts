import { format } from "date-fns";

export function formatMonth(date: Date): string {
    return format(date, "yyy-MM");
}