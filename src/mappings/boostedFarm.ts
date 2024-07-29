
import {Deposit, Fund, EmergencyWithdraw, Payout, Withdraw} from "../types/Factory/DragonswapStakerBoosted";
import {BoostedFarm, Deposit as UserDeposit, Payout as UserPayout, Withdraw as UserWithdraw} from "../types/schema";
import {getOrCreateUserFarmBalance, getOrCreateFarmStats} from "./helpers";

export function handleDeposit(event: Deposit): void {

    const farmStats = getOrCreateFarmStats(event.address)
    farmStats.balance = farmStats.balance.plus(event.params.amount)
    farmStats.totalDeposit = farmStats.totalDeposit.plus(event.params.amount)
    farmStats.save();

    const userFarmBalance = getOrCreateUserFarmBalance(event.address, event.params.user);
    userFarmBalance.balance = userFarmBalance.balance.plus(event.params.amount)
    userFarmBalance.totalDeposit = userFarmBalance.totalDeposit.plus(event.params.amount)
    userFarmBalance.save()

    const id = event.params.amount.toString().concat(event.transaction.hash.toHexString().concat(event.address.toHexString()).concat(event.logIndex.toString()));
    const deposit = new UserDeposit(id)
    deposit.user = event.params.user
    deposit.farmAddress = event.address
    deposit.blockNumber = event.block.number
    deposit.timestamp = event.block.timestamp
    deposit.txHash = event.transaction.hash
    deposit.amount = event.params.amount
    deposit.save()
}

export function handleFund(event: Fund): void {
    // const boostedFarm = BoostedFarm.load(event.address.toHexString());
    // boostedFarm.save()
}

export function handlePayout(event: Payout): void {
    const farmStats = getOrCreateFarmStats(event.address)
    farmStats.totalNativeTokenClaim = farmStats.totalNativeTokenClaim.plus(event.params.pendingReward)
    farmStats.totalBoosterTokenClaim = farmStats.totalBoosterTokenClaim.plus(event.params.pendingBooster)
    farmStats.save();

    const userFarmBalance = getOrCreateUserFarmBalance(event.address, event.params.user);
    userFarmBalance.totalNativeTokenClaim = userFarmBalance.totalNativeTokenClaim.plus(event.params.pendingReward)
    userFarmBalance.totalBoosterTokenClaim = userFarmBalance.totalBoosterTokenClaim.plus(event.params.pendingBooster)
    userFarmBalance.save()

    const id = event.params.pendingBooster.toString().concat(event.params.pendingReward.toString().concat(event.transaction.hash.toHexString().concat(event.address.toHexString()).concat(event.logIndex.toString())));
    const payout = new UserPayout(id)
    payout.user = event.params.user
    payout.farmAddress = event.address
    payout.blockNumber = event.block.number
    payout.timestamp = event.block.timestamp
    payout.txHash = event.transaction.hash
    payout.nativeTokenClaim = event.params.pendingReward
    payout.boosterTokenClaim = event.params.pendingBooster
    payout.save()
}

export function handleWithdraw(event: Withdraw): void {
    const farmStats = getOrCreateFarmStats(event.address)
    farmStats.totalWithdraws = farmStats.totalWithdraws.plus(event.params.amount)
    farmStats.balance = farmStats.balance.minus(event.params.amount)
    farmStats.save();

    const userFarmBalance = getOrCreateUserFarmBalance(event.address, event.params.user);
    userFarmBalance.totalWithdraws = userFarmBalance.totalWithdraws.plus(event.params.amount)
    userFarmBalance.balance = userFarmBalance.balance.minus(event.params.amount)
    userFarmBalance.save()

    const id = event.params.amount.toString().concat(event.transaction.hash.toHexString().concat(event.address.toHexString()).concat(event.logIndex.toString()));

    const withdraw = new UserWithdraw(id)
    withdraw.user = event.params.user
    withdraw.farmAddress = event.address
    withdraw.blockNumber = event.block.number
    withdraw.timestamp = event.block.timestamp
    withdraw.txHash = event.transaction.hash
    withdraw.amount = event.params.amount
    withdraw.save()
}

export function handleEmergencyWithdraw(event: EmergencyWithdraw): void {
    const farmStats = getOrCreateFarmStats(event.address)
    farmStats.totalWithdraws = farmStats.totalWithdraws.plus(event.params.amount)
    farmStats.balance = farmStats.balance.minus(event.params.amount)
    farmStats.save();

    const userFarmBalance = getOrCreateUserFarmBalance(event.address, event.params.user);
    userFarmBalance.totalWithdraws = userFarmBalance.totalWithdraws.plus(event.params.amount)
    userFarmBalance.balance = userFarmBalance.balance.minus(event.params.amount)
    userFarmBalance.save()

    const id = event.params.amount.toString().concat(event.transaction.hash.toHexString().concat(event.address.toHexString()).concat(event.logIndex.toString()));

    const withdraw = new UserWithdraw(id)
    withdraw.user = event.params.user
    withdraw.farmAddress = event.address
    withdraw.blockNumber = event.block.number
    withdraw.timestamp = event.block.timestamp
    withdraw.txHash = event.transaction.hash
    withdraw.amount = event.params.amount
    withdraw.save()
}