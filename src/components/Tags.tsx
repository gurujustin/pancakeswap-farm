import React from 'react'
import { Tag, VerifiedIcon, CommunityIcon, BinanceIcon } from '@wdefifinancebsc/uikit'
import useI18n from 'hooks/useI18n'

const CoreTag = () => (
  <Tag variant="success" outline startIcon={<VerifiedIcon />}>
    Core
  </Tag>
)

const CommunityTag = () => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon />}>
    Community
  </Tag>
)

const BinanceTag = () => (
  <Tag variant="binance" outline startIcon={<BinanceIcon />}>
    Binance
  </Tag>
)

const NoFeeTag = () => {
  const TranslateString = useI18n()
  return (
    <Tag variant="success" outline startIcon={<VerifiedIcon />}>
      {TranslateString(11002, 'No Fees')}
    </Tag>
  )
}

const RiskTag = ({ risk }) => (
  <Tag variant={risk >= 3 ? 'failure' : 'success'} outline startIcon={<VerifiedIcon />}>
    Risk {risk}
  </Tag>
)

export { CoreTag, CommunityTag, BinanceTag, NoFeeTag, RiskTag }
