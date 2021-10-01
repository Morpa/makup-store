export default function formatPrice(price: number | bigint): string {
  return new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR'
  }).format(price)
}
