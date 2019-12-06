import store from '../../../store/';
import * as actions from '../../actions';
import config from '../../config';
import XarClient from '@xar-network/javascript-sdk';
import { crypto } from '@xar-network/javascript-sdk';

export const getBalance = async params => {
  try {
    const client = new XarClient(config.xarApi)
    await client.initChain()

    const balances = await client.getBalance(params.address)

    return store.dispatch(actions.setBalances(balances))

  } catch (err) {
    throw err;
  }
}

export const unlockAccount = async params => {
  try {
    const client = new XarClient(config.xarApi)
    await client.initChain()

    store.dispatch(actions.startLoader())

    const acc = await client.recoverAccountFromKeystore(params.keystore, params.password)
    acc.keystore = params.keystore

    return store.dispatch(actions.unlockAccount(acc));
  } catch (err) {
    throw err;
  }
};

export const lockAccount = async params => {
  try {
    store.dispatch(actions.lockAccount());
  } catch (err) {
    throw err;
  }
};

export const createAccount = async params => {
  try {
    const client = new XarClient(config.xarApi)
    await client.initChain()

    const acc = await client.createAccountWithMneomnic()
    //add error checking

    const keystore = crypto.generateKeyStore(acc.privateKey, params.password)
    acc.keystore = keystore

    return store.dispatch(actions.createAccount(acc));

  } catch (err) {
    throw err;
  }
};
