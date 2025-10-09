import {
  format,
  formatDistanceToNow as dateFnsformatDistanceToNow,
} from 'date-fns';
import { fr } from 'date-fns/locale';

export function formatDatetime(rawDate: string): string {
  const date = new Date(rawDate);

  return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
    locale: fr,
  });
}

export function formatDistanceToNow(rawDate: string): string {
  const date = new Date(rawDate);

  return dateFnsformatDistanceToNow(date, {
    locale: fr,
    addSuffix: true,
  });
}
