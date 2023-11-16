/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export declare namespace IAtomicSwapBase {
  export type ReleaseStruct = {
    durationInHours: BigNumberish;
    percentage: BigNumberish;
  };

  export type ReleaseStructOutput = [
    durationInHours: bigint,
    percentage: bigint
  ] & { durationInHours: bigint; percentage: bigint };
}

export interface ICliffVestingInterface extends Interface {
  getFunction(nameOrSignature: "startVesting"): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Received" | "Released"): EventFragment;

  encodeFunctionData(
    functionFragment: "startVesting",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      IAtomicSwapBase.ReleaseStruct[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "startVesting",
    data: BytesLike
  ): Result;
}

export namespace ReceivedEvent {
  export type InputTuple = [sender: AddressLike, amount: BigNumberish];
  export type OutputTuple = [sender: string, amount: bigint];
  export interface OutputObject {
    sender: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ReleasedEvent {
  export type InputTuple = [beneficiary: AddressLike, amount: BigNumberish];
  export type OutputTuple = [beneficiary: string, amount: bigint];
  export interface OutputObject {
    beneficiary: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ICliffVesting extends BaseContract {
  connect(runner?: ContractRunner | null): ICliffVesting;
  waitForDeployment(): Promise<this>;

  interface: ICliffVestingInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  startVesting: TypedContractMethod<
    [
      beneficiary: AddressLike,
      token: AddressLike,
      totalAmount: BigNumberish,
      releases: IAtomicSwapBase.ReleaseStruct[]
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "startVesting"
  ): TypedContractMethod<
    [
      beneficiary: AddressLike,
      token: AddressLike,
      totalAmount: BigNumberish,
      releases: IAtomicSwapBase.ReleaseStruct[]
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "Received"
  ): TypedContractEvent<
    ReceivedEvent.InputTuple,
    ReceivedEvent.OutputTuple,
    ReceivedEvent.OutputObject
  >;
  getEvent(
    key: "Released"
  ): TypedContractEvent<
    ReleasedEvent.InputTuple,
    ReleasedEvent.OutputTuple,
    ReleasedEvent.OutputObject
  >;

  filters: {
    "Received(address,uint256)": TypedContractEvent<
      ReceivedEvent.InputTuple,
      ReceivedEvent.OutputTuple,
      ReceivedEvent.OutputObject
    >;
    Received: TypedContractEvent<
      ReceivedEvent.InputTuple,
      ReceivedEvent.OutputTuple,
      ReceivedEvent.OutputObject
    >;

    "Released(address,uint256)": TypedContractEvent<
      ReleasedEvent.InputTuple,
      ReleasedEvent.OutputTuple,
      ReleasedEvent.OutputObject
    >;
    Released: TypedContractEvent<
      ReleasedEvent.InputTuple,
      ReleasedEvent.OutputTuple,
      ReleasedEvent.OutputObject
    >;
  };
}