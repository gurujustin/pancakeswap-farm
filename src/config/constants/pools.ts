import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
//   {
//     sousId: 0,
//     tokenName: 'KIWI',
//     earnToken: 'wDEFI',
//     stakingTokenName: QuoteToken.KIWI,
//     stakingTokenAddress: '0xCfDf8A80fECAeeCC144fa74c0Df8691BFd0e26e3',
//     contractAddress: {
//       97: '',
//       56: '0x2fE9263BF105095e16167C093C4d28140e936E1b',
//     },
//     poolCategory: PoolCategory.CORE,
//     projectLink: 'http://kiwiswap.finance/',
//     harvest: true,
//     tokenPerBlock: '10.0',
//     sortOrder: 1,
//     isFinished: false,
//     tokenDecimals: 18,
//   },
//   {
//  sousId: 10,
//  tokenName: 'BUTT',
//  earnToken: 'KIWI',
//  stakingTokenName: QuoteToken.BUTT,
//  stakingTokenAddress: '0x0bC907e26377f7E072D27d7c57e72e13fc343AbC',    //
//  contractAddress: {
//    97: '',
//    56: '0x68e4AD5C668A2aC2AA6BC5A1AFd3d18a064c34d8',
//  },
//  poolCategory: PoolCategory.CORE,
//  projectLink: 'https://cheeseswap.app/',
//  harvest: true,
//  tokenPerBlock: '1.7',
//  sortOrder: 2,
//  isFinished: false,
//  tokenDecimals: 18,
// },
{
  sousId: 1,
  tokenName: 'WOOP',
  earnToken: 'wDEFI',
  stakingTokenName: QuoteToken.WOOP,
  stakingTokenAddress: '0x8b303d5bbfbbf46f1a4d9741e491e06986894e18',    //
  contractAddress: {
    97: '',
    56: '0x77d5FaB1Eab97056481bBf06640D78E648eF5fB0',
  },
  poolCategory: PoolCategory.CORE,
  projectLink: 'https://cheeseswap.app/',
  harvest: true,
  tokenPerBlock: '1.7',
  sortOrder: 2,
  isFinished: false,
  tokenDecimals: 18,
 },
 
// {
//   sousId: 4,
//   tokenName: 'BUTT',
//   earnToken: 'KIWI',
//   stakingTokenName: QuoteToken.BUTT,
//   stakingTokenAddress: '0x0bC907e26377f7E072D27d7c57e72e13fc343AbC',    //
//   contractAddress: {
//     97: '',
//     56: '0xBfDF809c0b5f86d3D74a2E9cFE9512E52D4B9BA5',
//   },
//   poolCategory: PoolCategory.CORE,
//   projectLink: 'https://cheeseswap.app/',
//   harvest: true,
//   tokenPerBlock: '1.7',
//   sortOrder: 2,
//   isFinished: false,
//   tokenDecimals: 18,
//  },
// {
// sousId: 5,
// tokenName: 'CHSBNB',
// earnToken: 'wDEFI',
// stakingTokenName: QuoteToken.CHSBNB,
// stakingTokenAddress: '0x51A162dd678d75C269Ef6680193C019e0B4Bda7E',    //
// contractAddress: {
//  97: '',
//  56: '0x0E493C858b9075325b85971F6c1240949cFff300',
// },
// poolCategory: PoolCategory.CORE,
// projectLink: 'https://cheeseswap.app/',
// harvest: true,
// tokenPerBlock: '1.0',
// sortOrder: 2,
// isFinished: false,
// tokenDecimals: 18,
// },
// {
//   sousId: 3,
//   tokenName: 'WOOP',
//   earnToken: 'wDEFI',
//   stakingTokenName: QuoteToken.WOOP,
//   stakingTokenAddress: '0x8b303d5bbfbbf46f1a4d9741e491e06986894e18',    //
//   contractAddress: {
//    97: '',
//    56: '0x77d5FaB1Eab97056481bBf06640D78E648eF5fB0',
//   },
//   poolCategory: PoolCategory.CORE,
//   projectLink: 'https://cheeseswap.app/',
//   harvest: true,
//   tokenPerBlock: '1.0',
//   sortOrder: 2,
//   isFinished: false,
//   tokenDecimals: 18,
//   },
]

export default pools
