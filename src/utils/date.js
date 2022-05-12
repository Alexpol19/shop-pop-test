import { format } from 'date-fns';

export const formatDate = (dateStr) => {
  if ((typeof dateStr === 'string' && dateStr.length) || typeof dateStr === 'number') {
    return format(new Date(dateStr), 'MMM dd, yyyy, k:m')
  }
  return ''
}