import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

export const formatDate = (date: Date): string =>
  format(date, 'dd/MM/yyyy', { locale: pt });
