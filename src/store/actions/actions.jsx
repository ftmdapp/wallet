import {
  UNLOCK_ACCOUNT,
  LOCK_ACCOUNT,
  CREATE_ACCOUNT,
  SET_BALANCES,
  SET_CSDT_PARAMETERS,
  SET_CSDT,
  SET_PENDING_CSDT,
  SET_PRICES,
  SET_INTEREST,
  SET_STAKING,
  SET_SUPPLY,
  START_LOADER,
  STOP_LOADER,
  SET_NODE_INFO,
  SET_VALIDATORS,
  SET_DELEGATIONS,
  SET_UNBONDED_DELEGATIONS,
  SET_BONDED_VALIDATORS,
  SET_LIQUIDATIONS,
  SET_DELEGATION_REWARDS,
  SET_SYNTHETICS,
  TOGGLE_ACCOUNT,
  COLLAPSE_ACCOUNT,
  EXPAND_ACCOUNT,
  SET_PROPOSALS,
  SET_PROPOSAL
} from '../../constants'


/* ACCOUNTS */
export const unlockAccount = account => ({
  type: UNLOCK_ACCOUNT,
  account
})

export const lockAccount = account => ({
  type: LOCK_ACCOUNT,
  account
})

export const createAccount = account => ({
  type: CREATE_ACCOUNT,
  account
})

export const setBalances = balances => ({
  type: SET_BALANCES,
  balances
})



/* CDCS */
export const setCSDTParameters = parameters => ({
  type: SET_CSDT_PARAMETERS,
  parameters
})

export const setCsdt = csdt => ({
  type: SET_CSDT,
  csdt
})

export const setPendingCSDT = csdt => ({
  type: SET_PENDING_CSDT,
  csdt
})


/* PRICES */
export const setPrices = prices => ({
  type: SET_PRICES,
  prices
})



/* INTEREST */
export const setInterest = interest => ({
  type: SET_INTEREST,
  interest
})



/* STAKING */
export const setStaking = staking => ({
  type: SET_STAKING,
  staking
})




/* SUPPLY */
export const setSupply = supply => ({
  type: SET_SUPPLY,
  supply
})



/* LOADER */
export const startLoader = () => ({
  type: START_LOADER
})

export const stopLoader = () => ({
  type: STOP_LOADER
})


export const setNodeInfo = nodeInfo => ({
  type: SET_NODE_INFO,
  nodeInfo
})


export const setValidators = validators => ({
  type: SET_VALIDATORS,
  validators
})

export const setBondedValidators = validators => ({
  type: SET_BONDED_VALIDATORS,
  validators
})

export const setDelegations = delegations => ({
  type: SET_DELEGATIONS,
  delegations
})

export const setUnbondedDelegations = delegations => ({
  type: SET_UNBONDED_DELEGATIONS,
  delegations
})

export const setLiquidations = liquidations => ({
  type: SET_LIQUIDATIONS,
  liquidations
})

export const setDelegationRewards = rewards => ({
  type: SET_DELEGATION_REWARDS,
  rewards
})


export const setSynthetics = synthetics => ({
  type: SET_SYNTHETICS,
  synthetics
})


export const toggleAccount = () => ({
  type: TOGGLE_ACCOUNT,
})

export const collapseAccount = () => ({
  type: COLLAPSE_ACCOUNT,
})

export const expandAccount = () => ({
  type: EXPAND_ACCOUNT,
})


export const setProposals = proposals => ({
  type: SET_PROPOSALS,
  proposals
})

export const setProposal = proposal => ({
  type: SET_PROPOSAL,
  proposal
})
