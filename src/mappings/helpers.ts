import {UserFarmBalance, FarmStat} from "../types/schema";
import {Address, BigInt} from "@graphprotocol/graph-ts";

export const FACTORY_ADDRESS = '0x07eCe9A95FCd08D5a8f3DA5232d11373e12921c4'

/**
 * Create new farm or if it does not exists previously.
 *
 * @param farmAddress
 * @param userAddress
 */
export function getOrCreateUserFarmBalance(farmAddress: Address, userAddress: Address) : UserFarmBalance {

    const key = farmAddress.toHexString().concat("-").concat(userAddress.toHexString())

    let farmBalance = UserFarmBalance.load(key)

    if (farmBalance === null) {
        farmBalance = new UserFarmBalance(key);
        farmBalance.user = userAddress
        farmBalance.farmAddress = farmAddress
        farmBalance.totalDeposit = BigInt.fromI32(0)
        farmBalance.totalWithdraws = BigInt.fromI32(0)
        farmBalance.balance = BigInt.fromI32(0)
        farmBalance.totalNativeTokenClaim = BigInt.fromI32(0)
        farmBalance.totalBoosterTokenClaim = BigInt.fromI32(0)

        farmBalance.save()
    }

    return farmBalance;
}

/**
 *
 * @param farmAddress
 */
export function getOrCreateFarmStats(farmAddress : Address) : FarmStat {

    const id = farmAddress.toHexString()
    let farmStats = FarmStat.load(id)

    if (farmStats === null) {
        farmStats = new FarmStat(id)
        farmStats.totalDeposit = BigInt.fromI32(0)
        farmStats.totalWithdraws = BigInt.fromI32(0)
        farmStats.totalNativeTokenClaim = BigInt.fromI32(0)
        farmStats.totalBoosterTokenClaim = BigInt.fromI32(0)
        farmStats.balance = BigInt.fromI32(0)
        farmStats.save();
    }

    return farmStats
}