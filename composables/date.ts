export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('gb', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
  })
}
