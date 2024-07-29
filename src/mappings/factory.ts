/* eslint-disable prefer-const */
import {BoostedFarm, Farm, FarmFactory} from '../types/schema'
import {
  FACTORY_ADDRESS, getOrCreateFarmStats,
} from './helpers'
import {Deployed} from "../types/Factory/DragonswapStakerFactory";
import { Farm as FarmTemplate, BoostedFarm as BoostedFarmTemplate } from '../../generated/templates'

import {BigInt} from "@graphprotocol/graph-ts";

export function handleNewFarm(event: Deployed): void {

  let factory = FarmFactory.load(FACTORY_ADDRESS)
  if (factory === null) {
    factory = new FarmFactory(FACTORY_ADDRESS)
    factory.boostedFarmCount = 0
    factory.classicFarmCount = 0;
  }
  let farmAddress = event.params.instance.toHexString();


  if (BigInt.fromI32(event.params.impType) == BigInt.fromI32(1)) {
    let farm = Farm.load(farmAddress)
    if (farm == null) {
      farm = new Farm(farmAddress)
      farm.createdAtTimestamp = event.block.timestamp
      farm.createdAtBlockNumber = event.block.number
      farm.createdTxHash = event.transaction.hash
      farm.save()

      FarmTemplate.create(event.params.instance)
      factory.classicFarmCount = factory.classicFarmCount + 1
    }
  } else {
    let farm = BoostedFarm.load(farmAddress)
    if (farm == null) {
      farm = new BoostedFarm(farmAddress)
      farm.createdAtTimestamp = event.block.timestamp
      farm.createdAtBlockNumber = event.block.number
      farm.createdTxHash = event.transaction.hash
      farm.save()

      BoostedFarmTemplate.create(event.params.instance)
      factory.boostedFarmCount = factory.boostedFarmCount + 1
    }
  }

  getOrCreateFarmStats(event.params.instance)

  factory.save()
}
