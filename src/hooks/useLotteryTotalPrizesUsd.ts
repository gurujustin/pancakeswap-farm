import { usePriceKiwiBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalKiwi = getBalanceNumber(totalRewards)
  const kiwiPriceBusd = usePriceKiwiBusd()

  return totalKiwi * kiwiPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
