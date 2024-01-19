export interface Root {
  jsonrpc: string
  id: number
  result: Result
}

export interface Result {
  genesis: Genesis
}

export interface Genesis {
  genesis_time: string
  chain_id: string
  initial_height: string
  consensus_params: ConsensusParams
  app_hash: string
  app_state: AppState
}

export interface ConsensusParams {
  block: Block
  evidence: Evidence
  validator: Validator
  version: Version
}

export interface Block {
  max_bytes: string
  max_gas: string
  time_iota_ms: string
}

export interface Evidence {
  max_age_num_blocks: string
  max_age_duration: string
  max_bytes: string
}

export interface Validator {
  pub_key_types: string[]
}

export interface Version {}

export interface AppState {
  auth: Auth
  bank: Bank
  capability: Capability
  crisis: Crisis
  distribution: Distribution
  evidence: Evidence2
  genutil: Genutil
  gov: Gov
  gravity: Gravity
  ibc: Ibc
  mint: Mint
  other: any
  params: any
  slashing: Slashing
  staking: Staking
  transfer: Transfer
  upgrade: Upgrade
  vesting: Vesting
}

export interface Auth {
  params: Params
  accounts: Account[]
}

export interface Params {
  max_memo_characters: string
  tx_sig_limit: string
  tx_size_cost_per_byte: string
  sig_verify_cost_ed25519: string
  sig_verify_cost_secp256k1: string
}

export interface Account {
  "@type": string
  address: string
  pub_key: any
  account_number: string
  sequence: string
}

export interface Bank {
  params: Params2
  balances: Balance[]
  supply: Supply[]
  denom_metadata: DenomMetadaum[]
}

export interface Params2 {
  send_enabled: any[]
  default_send_enabled: boolean
}

export interface Balance {
  address: string
  coins: Coin[]
}

export interface Coin {
  denom: string
  amount: string
}

export interface Supply {
  denom: string
  amount: string
}

export interface DenomMetadaum {
  description: string
  denom_units: DenomUnit[]
  base: string
  display: string
}

export interface DenomUnit {
  denom: string
  exponent: number
  aliases: any[]
}

export interface Capability {
  index: string
  owners: any[]
}

export interface Crisis {
  constant_fee: ConstantFee
}

export interface ConstantFee {
  denom: string
  amount: string
}

export interface Distribution {
  params: Params3
  fee_pool: FeePool
  delegator_withdraw_infos: any[]
  previous_proposer: string
  outstanding_rewards: any[]
  validator_accumulated_commissions: any[]
  validator_historical_rewards: any[]
  validator_current_rewards: any[]
  delegator_starting_infos: any[]
  validator_slash_events: any[]
}

export interface Params3 {
  community_tax: string
  base_proposer_reward: string
  bonus_proposer_reward: string
  withdraw_addr_enabled: boolean
}

export interface FeePool {
  community_pool: any[]
}

export interface Evidence2 {
  evidence: any[]
}

export interface Genutil {
  gen_txs: GenTx[]
}

export interface GenTx {
  body: Body
  auth_info: AuthInfo
  signatures: string[]
}

export interface Body {
  messages: Message[]
  memo: string
  timeout_height: string
  extension_options: any[]
  non_critical_extension_options: any[]
}

export interface Message {
  "@type": string
  description: Description
  commission: Commission
  min_self_delegation: string
  delegator_address: string
  validator_address: string
  pubkey: Pubkey
  value: Value
}

export interface Description {
  moniker: string
  identity: string
  website: string
  security_contact: string
  details: string
}

export interface Commission {
  rate: string
  max_rate: string
  max_change_rate: string
}

export interface Pubkey {
  "@type": string
  key: string
}

export interface Value {
  denom: string
  amount: string
}

export interface AuthInfo {
  signer_infos: SignerInfo[]
  fee: Fee
}

export interface SignerInfo {
  public_key: PublicKey
  mode_info: ModeInfo
  sequence: string
}

export interface PublicKey {
  "@type": string
  key: string
}

export interface ModeInfo {
  single: Single
}

export interface Single {
  mode: string
}

export interface Fee {
  amount: any[]
  gas_limit: string
  payer: string
  granter: string
}

export interface Gov {
  starting_proposal_id: string
  deposits: any[]
  votes: any[]
  proposals: any[]
  deposit_params: DepositParams
  voting_params: VotingParams
  tally_params: TallyParams
}

export interface DepositParams {
  min_deposit: MinDeposit[]
  max_deposit_period: string
}

export interface MinDeposit {
  denom: string
  amount: string
}

export interface VotingParams {
  voting_period: string
}

export interface TallyParams {
  quorum: string
  threshold: string
  veto_threshold: string
}

export interface Gravity {
  params: Params4
  last_observed_nonce: string
  valsets: any[]
  valset_confirms: any[]
  batches: any[]
  batch_confirms: any[]
  attestations: any[]
  delegate_keys: any[]
  erc20_to_denoms: any[]
  unbatched_transfers: any[]
  module_coins: ModuleCoin[]
}

export interface Params4 {
  gravity_id: string
  contract_source_hash: string
  bridge_eth_address: string
  bridge_chain_id: string
  signed_valsets_window: string
  signed_batches_window: string
  signed_claims_window: string
  target_batch_timeout: string
  average_block_time: string
  average_eth_block_time: string
  slash_fraction_valset: string
  slash_fraction_batch: string
  slash_fraction_claim: string
  slash_fraction_conflicting_claim: string
  unbond_slashing_valsets_window: string
  ibc_transfer_timeout_height: string
  valset_update_power_change_percent: string
}

export interface ModuleCoin {
  denom: string
  amount: string
}

export interface Ibc {
  client_genesis: ClientGenesis
  connection_genesis: ConnectionGenesis
  channel_genesis: ChannelGenesis
}

export interface ClientGenesis {
  clients: any[]
  clients_consensus: any[]
  clients_metadata: any[]
  params: Params5
  create_localhost: boolean
  next_client_sequence: string
}

export interface Params5 {
  allowed_clients: string[]
}

export interface ConnectionGenesis {
  connections: any[]
  client_connection_paths: any[]
  next_connection_sequence: string
}

export interface ChannelGenesis {
  channels: any[]
  acknowledgements: any[]
  commitments: any[]
  receipts: any[]
  send_sequences: any[]
  recv_sequences: any[]
  ack_sequences: any[]
  next_channel_sequence: string
}

export interface Mint {
  minter: Minter
  params: Params6
}

export interface Minter {
  inflation: string
  annual_provisions: string
}

export interface Params6 {
  mint_denom: string
  inflation_rate_change: string
  inflation_max: string
  inflation_min: string
  goal_bonded: string
  blocks_per_year: string
}

export interface Slashing {
  params: Params7
  signing_infos: any[]
  missed_blocks: any[]
}

export interface Params7 {
  signed_blocks_window: string
  min_signed_per_window: string
  downtime_jail_duration: string
  slash_fraction_double_sign: string
  slash_fraction_downtime: string
}

export interface Staking {
  params: Params8
  last_total_power: string
  last_validator_powers: any[]
  validators: any[]
  delegations: any[]
  unbonding_delegations: any[]
  redelegations: any[]
  exported: boolean
}

export interface Params8 {
  unbonding_time: string
  max_validators: number
  max_entries: number
  historical_entries: number
  bond_denom: string
}

export interface Transfer {
  port_id: string
  denom_traces: any[]
  params: Params9
}

export interface Params9 {
  send_enabled: boolean
  receive_enabled: boolean
}

export interface Upgrade {}

export interface Vesting {}
