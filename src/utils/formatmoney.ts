export function formatmoney(value: number) {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
}
