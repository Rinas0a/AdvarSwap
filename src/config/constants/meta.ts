import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'AdvarSwap',
  description:
    'The most popular AMM on BSC by user count! Earn ADVAR through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by AdvarSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('AdvarSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('AdvarSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('AdvarSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('AdvarSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('AdvarSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('AdvarSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('AdvarSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('AdvarSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('AdvarSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('AdvarSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('AdvarSwap')}`,
      }
    default:
      return null
  }
}
