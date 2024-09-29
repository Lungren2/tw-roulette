import type { IRouletteTableProps } from '../components/roulette-table'

export const findChipIcon = (id: string, bets: IRouletteTableProps['bets']) =>
  bets[id]?.icon
