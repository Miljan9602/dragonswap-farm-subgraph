// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class Added extends ethereum.Event {
  get params(): Added__Params {
    return new Added__Params(this);
  }
}

export class Added__Params {
  _event: Added;

  constructor(event: Added) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get pooledToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get allocPoint(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class EmergencyWithdraw extends ethereum.Event {
  get params(): EmergencyWithdraw__Params {
    return new EmergencyWithdraw__Params(this);
  }
}

export class EmergencyWithdraw__Params {
  _event: EmergencyWithdraw;

  constructor(event: EmergencyWithdraw) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Fund extends ethereum.Event {
  get params(): Fund__Params {
    return new Fund__Params(this);
  }
}

export class Fund__Params {
  _event: Fund;

  constructor(event: Fund) {
    this._event = event;
  }

  get funder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get rewardAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get boosterAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Payout extends ethereum.Event {
  get params(): Payout__Params {
    return new Payout__Params(this);
  }
}

export class Payout__Params {
  _event: Payout;

  constructor(event: Payout) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pendingReward(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get pendingBooster(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Set extends ethereum.Event {
  get params(): Set__Params {
    return new Set__Params(this);
  }
}

export class Set__Params {
  _event: Set;

  constructor(event: Set) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get allocPoint(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class DragonswapStakerBoosted__pendingResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getPendingRewards(): BigInt {
    return this.value0;
  }

  getPendingBooster(): BigInt {
    return this.value1;
  }
}

export class DragonswapStakerBoosted__poolInfoResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }

  getPooledToken(): Address {
    return this.value0;
  }

  getAllocPoint(): BigInt {
    return this.value1;
  }

  getLastRewardTimestamp(): BigInt {
    return this.value2;
  }

  getAccRewardsPerShare(): BigInt {
    return this.value3;
  }

  getTotalDeposits(): BigInt {
    return this.value4;
  }
}

export class DragonswapStakerBoosted__totalPendingResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getPendingRewards(): BigInt {
    return this.value0;
  }

  getPendingBooster(): BigInt {
    return this.value1;
  }
}

export class DragonswapStakerBoosted__userInfoResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getAmount(): BigInt {
    return this.value0;
  }

  getRewardDebt(): BigInt {
    return this.value1;
  }
}

export class DragonswapStakerBoosted extends ethereum.SmartContract {
  static bind(address: Address): DragonswapStakerBoosted {
    return new DragonswapStakerBoosted("DragonswapStakerBoosted", address);
  }

  P1(): BigInt {
    let result = super.call("P1", "P1():(uint256)", []);

    return result[0].toBigInt();
  }

  try_P1(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("P1", "P1():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  P2(): BigInt {
    let result = super.call("P2", "P2():(uint256)", []);

    return result[0].toBigInt();
  }

  try_P2(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("P2", "P2():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  boosterPaidOut(): BigInt {
    let result = super.call("boosterPaidOut", "boosterPaidOut():(uint256)", []);

    return result[0].toBigInt();
  }

  try_boosterPaidOut(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "boosterPaidOut",
      "boosterPaidOut():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  boosterToken(): Address {
    let result = super.call("boosterToken", "boosterToken():(address)", []);

    return result[0].toAddress();
  }

  try_boosterToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("boosterToken", "boosterToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  decimalEqBooster(): BigInt {
    let result = super.call(
      "decimalEqBooster",
      "decimalEqBooster():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_decimalEqBooster(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "decimalEqBooster",
      "decimalEqBooster():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimalEqReward(): BigInt {
    let result = super.call(
      "decimalEqReward",
      "decimalEqReward():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_decimalEqReward(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "decimalEqReward",
      "decimalEqReward():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  deposited(_pid: BigInt, _user: Address): BigInt {
    let result = super.call(
      "deposited",
      "deposited(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_pid),
        ethereum.Value.fromAddress(_user),
      ],
    );

    return result[0].toBigInt();
  }

  try_deposited(_pid: BigInt, _user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "deposited",
      "deposited(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_pid),
        ethereum.Value.fromAddress(_user),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  endTimestamp(): BigInt {
    let result = super.call("endTimestamp", "endTimestamp():(uint256)", []);

    return result[0].toBigInt();
  }

  try_endTimestamp(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("endTimestamp", "endTimestamp():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pending(
    _pid: BigInt,
    _user: Address,
  ): DragonswapStakerBoosted__pendingResult {
    let result = super.call(
      "pending",
      "pending(uint256,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_pid),
        ethereum.Value.fromAddress(_user),
      ],
    );

    return new DragonswapStakerBoosted__pendingResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
    );
  }

  try_pending(
    _pid: BigInt,
    _user: Address,
  ): ethereum.CallResult<DragonswapStakerBoosted__pendingResult> {
    let result = super.tryCall(
      "pending",
      "pending(uint256,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_pid),
        ethereum.Value.fromAddress(_user),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DragonswapStakerBoosted__pendingResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
      ),
    );
  }

  poolInfo(param0: BigInt): DragonswapStakerBoosted__poolInfoResult {
    let result = super.call(
      "poolInfo",
      "poolInfo(uint256):(address,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return new DragonswapStakerBoosted__poolInfoResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
    );
  }

  try_poolInfo(
    param0: BigInt,
  ): ethereum.CallResult<DragonswapStakerBoosted__poolInfoResult> {
    let result = super.tryCall(
      "poolInfo",
      "poolInfo(uint256):(address,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DragonswapStakerBoosted__poolInfoResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
      ),
    );
  }

  pools(): BigInt {
    let result = super.call("pools", "pools():(uint256)", []);

    return result[0].toBigInt();
  }

  try_pools(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("pools", "pools():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ratio(): BigInt {
    let result = super.call("ratio", "ratio():(uint256)", []);

    return result[0].toBigInt();
  }

  try_ratio(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("ratio", "ratio():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardPerSecond(): BigInt {
    let result = super.call(
      "rewardPerSecond",
      "rewardPerSecond():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_rewardPerSecond(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardPerSecond",
      "rewardPerSecond():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardToken(): Address {
    let result = super.call("rewardToken", "rewardToken():(address)", []);

    return result[0].toAddress();
  }

  try_rewardToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("rewardToken", "rewardToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rewardsPaidOut(): BigInt {
    let result = super.call("rewardsPaidOut", "rewardsPaidOut():(uint256)", []);

    return result[0].toBigInt();
  }

  try_rewardsPaidOut(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardsPaidOut",
      "rewardsPaidOut():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  startTimestamp(): BigInt {
    let result = super.call("startTimestamp", "startTimestamp():(uint256)", []);

    return result[0].toBigInt();
  }

  try_startTimestamp(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "startTimestamp",
      "startTimestamp():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalAllocPoint(): BigInt {
    let result = super.call(
      "totalAllocPoint",
      "totalAllocPoint():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_totalAllocPoint(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalAllocPoint",
      "totalAllocPoint():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalBooster(): BigInt {
    let result = super.call("totalBooster", "totalBooster():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalBooster(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalBooster", "totalBooster():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalPending(): DragonswapStakerBoosted__totalPendingResult {
    let result = super.call(
      "totalPending",
      "totalPending():(uint256,uint256)",
      [],
    );

    return new DragonswapStakerBoosted__totalPendingResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
    );
  }

  try_totalPending(): ethereum.CallResult<DragonswapStakerBoosted__totalPendingResult> {
    let result = super.tryCall(
      "totalPending",
      "totalPending():(uint256,uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DragonswapStakerBoosted__totalPendingResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
      ),
    );
  }

  totalRewards(): BigInt {
    let result = super.call("totalRewards", "totalRewards():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalRewards(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalRewards", "totalRewards():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userInfo(
    param0: BigInt,
    param1: Address,
  ): DragonswapStakerBoosted__userInfoResult {
    let result = super.call(
      "userInfo",
      "userInfo(uint256,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1),
      ],
    );

    return new DragonswapStakerBoosted__userInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
    );
  }

  try_userInfo(
    param0: BigInt,
    param1: Address,
  ): ethereum.CallResult<DragonswapStakerBoosted__userInfoResult> {
    let result = super.tryCall(
      "userInfo",
      "userInfo(uint256,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DragonswapStakerBoosted__userInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
      ),
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddCall extends ethereum.Call {
  get inputs(): AddCall__Inputs {
    return new AddCall__Inputs(this);
  }

  get outputs(): AddCall__Outputs {
    return new AddCall__Outputs(this);
  }
}

export class AddCall__Inputs {
  _call: AddCall;

  constructor(call: AddCall) {
    this._call = call;
  }

  get _allocPoint(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _pooledToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _withUpdate(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class AddCall__Outputs {
  _call: AddCall;

  constructor(call: AddCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class EmergencyWithdrawCall extends ethereum.Call {
  get inputs(): EmergencyWithdrawCall__Inputs {
    return new EmergencyWithdrawCall__Inputs(this);
  }

  get outputs(): EmergencyWithdrawCall__Outputs {
    return new EmergencyWithdrawCall__Outputs(this);
  }
}

export class EmergencyWithdrawCall__Inputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class EmergencyWithdrawCall__Outputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
    this._call = call;
  }
}

export class FundCall extends ethereum.Call {
  get inputs(): FundCall__Inputs {
    return new FundCall__Inputs(this);
  }

  get outputs(): FundCall__Outputs {
    return new FundCall__Outputs(this);
  }
}

export class FundCall__Inputs {
  _call: FundCall;

  constructor(call: FundCall) {
    this._call = call;
  }

  get rewardAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get boosterAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class FundCall__Outputs {
  _call: FundCall;

  constructor(call: FundCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _rewardToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _boosterToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _rewardPerSecond(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _startTimestamp(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class MassUpdatePoolsCall extends ethereum.Call {
  get inputs(): MassUpdatePoolsCall__Inputs {
    return new MassUpdatePoolsCall__Inputs(this);
  }

  get outputs(): MassUpdatePoolsCall__Outputs {
    return new MassUpdatePoolsCall__Outputs(this);
  }
}

export class MassUpdatePoolsCall__Inputs {
  _call: MassUpdatePoolsCall;

  constructor(call: MassUpdatePoolsCall) {
    this._call = call;
  }
}

export class MassUpdatePoolsCall__Outputs {
  _call: MassUpdatePoolsCall;

  constructor(call: MassUpdatePoolsCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetCall extends ethereum.Call {
  get inputs(): SetCall__Inputs {
    return new SetCall__Inputs(this);
  }

  get outputs(): SetCall__Outputs {
    return new SetCall__Outputs(this);
  }
}

export class SetCall__Inputs {
  _call: SetCall;

  constructor(call: SetCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _allocPoint(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _withUpdate(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class SetCall__Outputs {
  _call: SetCall;

  constructor(call: SetCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdatePoolCall extends ethereum.Call {
  get inputs(): UpdatePoolCall__Inputs {
    return new UpdatePoolCall__Inputs(this);
  }

  get outputs(): UpdatePoolCall__Outputs {
    return new UpdatePoolCall__Outputs(this);
  }
}

export class UpdatePoolCall__Inputs {
  _call: UpdatePoolCall;

  constructor(call: UpdatePoolCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdatePoolCall__Outputs {
  _call: UpdatePoolCall;

  constructor(call: UpdatePoolCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
