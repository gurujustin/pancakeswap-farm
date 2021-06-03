import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { Modal, Text, LinkExternal, Flex } from '@wdefifinancebsc/uikit'
import useI18n from 'hooks/useI18n'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { calculateKiwiEarnedPerThousandDollars, apyModalRoi } from 'utils/compoundApyHelpers'
import { Address } from 'config/constants/types'

interface ApyCalculatorModalProps {
  onDismiss?: () => void
  lpLabel?: string
  kiwiPrice?: BigNumber
  apy?: BigNumber
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  margin-bottom: 24px;
`

const GridItem = styled.div`
  margin-bottom: '10px';
`

const Description = styled(Text)`
  max-width: 320px;
  margin-bottom: 28px;
`

const ApyCalculatorModal: React.FC<ApyCalculatorModalProps> = ({
  onDismiss,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
  kiwiPrice,
  apy,
}) => {
  const TranslateString = useI18n()
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })
  const farmApy = apy.times(new BigNumber(100)).toNumber()
  const oneThousandDollarsWorthOfKiwi = 1000 / kiwiPrice.toNumber()

  const kiwiEarnedPerThousand1D = calculateKiwiEarnedPerThousandDollars({ numberOfDays: 1, farmApy, kiwiPrice })
  const kiwiEarnedPerThousand7D = calculateKiwiEarnedPerThousandDollars({ numberOfDays: 7, farmApy, kiwiPrice })
  const kiwiEarnedPerThousand30D = calculateKiwiEarnedPerThousandDollars({ numberOfDays: 30, farmApy, kiwiPrice })
  const kiwiEarnedPerThousand365D = calculateKiwiEarnedPerThousandDollars({ numberOfDays: 365, farmApy, kiwiPrice })

  return (
    <Modal title="ROI" onDismiss={onDismiss}>
      <Grid>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {TranslateString(999, 'Timeframe')}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {TranslateString(999, 'ROI')}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {TranslateString(999, 'KIWI per $1000')}
          </Text>
        </GridItem>
        {/* 1 day row */}
        <GridItem>
          <Text>1d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: kiwiEarnedPerThousand1D, amountInvested: oneThousandDollarsWorthOfKiwi })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{kiwiEarnedPerThousand1D}</Text>
        </GridItem>
        {/* 7 day row */}
        <GridItem>
          <Text>7d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: kiwiEarnedPerThousand7D, amountInvested: oneThousandDollarsWorthOfKiwi })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{kiwiEarnedPerThousand7D}</Text>
        </GridItem>
        {/* 30 day row */}
        <GridItem>
          <Text>30d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: kiwiEarnedPerThousand30D, amountInvested: oneThousandDollarsWorthOfKiwi })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{kiwiEarnedPerThousand30D}</Text>
        </GridItem>
        {/* 365 day / APY row */}
        <GridItem>
          <Text>365d(APY)</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: kiwiEarnedPerThousand365D, amountInvested: oneThousandDollarsWorthOfKiwi })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{kiwiEarnedPerThousand365D}</Text>
        </GridItem>
      </Grid>
      <Description fontSize="12px" color="textSubtle">
        {TranslateString(
          999,
          'Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.',
        )}
      </Description>
      <Flex justifyContent="center">
        <LinkExternal href={`https://cheeseswap.app/#/add/${liquidityUrlPathParts}`}>
          {TranslateString(999, 'Get')} {lpLabel}
        </LinkExternal>
      </Flex>
    </Modal>
  )
}

export default ApyCalculatorModal
