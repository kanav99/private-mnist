export const retrieveSecretCommand = (
  user_key: any,
  store_id: any,
  secret_name: any,
) => `nillion --user-key ${user_key} \
--node-key ${process.env.REACT_APP_NILLION_NODEKEY_TEXT_PARTY_1} \
-b ${process.env.REACT_APP_NILLION_BOOTNODE_MULTIADDRESS} \
--payments-private-key ${process.env.REACT_APP_NILLION_WALLET_PRIVATE_KEY} \
--payments-chain-id ${process.env.REACT_APP_NILLION_CHAIN_ID} \
--payments-rpc-endpoint ${process.env.REACT_APP_NILLION_BLOCKCHAIN_RPC_ENDPOINT} \
--payments-sc-address ${process.env.REACT_APP_NILLION_PAYMENTS_SC_ADDRESS} \
--blinding-factors-manager-sc-address ${process.env.REACT_APP_NILLION_BLINDING_FACTORS_MANAGER_SC_ADDRESS} \
retrieve-secret \
--cluster-id ${process.env.REACT_APP_NILLION_CLUSTER_ID} \
--store-id ${store_id} \
--secret-id ${secret_name}`;
