import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace IAtomicSwap {
    type AcceptBidMsgStruct = {
        orderID: PromiseOrValue<BytesLike>;
        bidder: PromiseOrValue<string>;
    };
    type AcceptBidMsgStructOutput = [string, string] & {
        orderID: string;
        bidder: string;
    };
    type CancelSwapMsgStruct = {
        orderID: PromiseOrValue<BytesLike>;
    };
    type CancelSwapMsgStructOutput = [string] & {
        orderID: string;
    };
    type CoinStruct = {
        token: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
    };
    type CoinStructOutput = [string, BigNumber] & {
        token: string;
        amount: BigNumber;
    };
    type MakeSwapMsgStruct = {
        sellToken: IAtomicSwap.CoinStruct;
        buyToken: IAtomicSwap.CoinStruct;
        desiredTaker: PromiseOrValue<string>;
        minBidAmount: PromiseOrValue<BigNumberish>;
        expireAt: PromiseOrValue<BigNumberish>;
        acceptBid: PromiseOrValue<boolean>;
    };
    type MakeSwapMsgStructOutput = [
        IAtomicSwap.CoinStructOutput,
        IAtomicSwap.CoinStructOutput,
        string,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        sellToken: IAtomicSwap.CoinStructOutput;
        buyToken: IAtomicSwap.CoinStructOutput;
        desiredTaker: string;
        minBidAmount: BigNumber;
        expireAt: BigNumber;
        acceptBid: boolean;
    };
    type PlaceBidMsgStruct = {
        bidAmount: PromiseOrValue<BigNumberish>;
        orderID: PromiseOrValue<BytesLike>;
        expireTimestamp: PromiseOrValue<BigNumberish>;
    };
    type PlaceBidMsgStructOutput = [BigNumber, string, BigNumber] & {
        bidAmount: BigNumber;
        orderID: string;
        expireTimestamp: BigNumber;
    };
    type TakeSwapMsgStruct = {
        orderID: PromiseOrValue<BytesLike>;
        takerReceiver: PromiseOrValue<string>;
    };
    type TakeSwapMsgStructOutput = [string, string] & {
        orderID: string;
        takerReceiver: string;
    };
    type UpdateBidMsgStruct = {
        orderID: PromiseOrValue<BytesLike>;
        addition: PromiseOrValue<BigNumberish>;
    };
    type UpdateBidMsgStructOutput = [string, BigNumber] & {
        orderID: string;
        addition: BigNumber;
    };
}
export interface AtomicSwapInterface extends utils.Interface {
    functions: {
        "acceptBid((bytes32,address))": FunctionFragment;
        "bids(bytes32,address)": FunctionFragment;
        "buyerFeeRate()": FunctionFragment;
        "cancelBid(bytes32)": FunctionFragment;
        "cancelSwap((bytes32))": FunctionFragment;
        "initialize(address,address,uint256,uint256)": FunctionFragment;
        "makeSwap(((address,uint256),(address,uint256),address,uint256,uint256,bool))": FunctionFragment;
        "owner()": FunctionFragment;
        "placeBid((uint256,bytes32,uint256))": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "sellerFeeRate()": FunctionFragment;
        "swapOrder(bytes32)": FunctionFragment;
        "takeSwap((bytes32,address))": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateBid((bytes32,uint256))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptBid" | "bids" | "buyerFeeRate" | "cancelBid" | "cancelSwap" | "initialize" | "makeSwap" | "owner" | "placeBid" | "renounceOwnership" | "sellerFeeRate" | "swapOrder" | "takeSwap" | "transferOwnership" | "updateBid"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptBid", values: [IAtomicSwap.AcceptBidMsgStruct]): string;
    encodeFunctionData(functionFragment: "bids", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "buyerFeeRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelBid", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "cancelSwap", values: [IAtomicSwap.CancelSwapMsgStruct]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "makeSwap", values: [IAtomicSwap.MakeSwapMsgStruct]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "placeBid", values: [IAtomicSwap.PlaceBidMsgStruct]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "sellerFeeRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "swapOrder", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "takeSwap", values: [IAtomicSwap.TakeSwapMsgStruct]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateBid", values: [IAtomicSwap.UpdateBidMsgStruct]): string;
    decodeFunctionResult(functionFragment: "acceptBid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bids", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buyerFeeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelBid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makeSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "placeBid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sellerFeeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "takeSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateBid", data: BytesLike): Result;
    events: {
        "AcceptedBid(bytes32,address,uint256)": EventFragment;
        "AtomicSwapOrderCanceled(bytes32)": EventFragment;
        "AtomicSwapOrderCreated(bytes32)": EventFragment;
        "AtomicSwapOrderTook(address,address,bytes32)": EventFragment;
        "CanceledBid(bytes32,address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ReceivedNewBid(bytes32,address,uint256)": EventFragment;
        "UpdatedBid(bytes32,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AcceptedBid"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AtomicSwapOrderCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AtomicSwapOrderCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AtomicSwapOrderTook"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CanceledBid"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceivedNewBid"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdatedBid"): EventFragment;
}
export interface AcceptedBidEventObject {
    orderID: string;
    bidder: string;
    amount: BigNumber;
}
export type AcceptedBidEvent = TypedEvent<[
    string,
    string,
    BigNumber
], AcceptedBidEventObject>;
export type AcceptedBidEventFilter = TypedEventFilter<AcceptedBidEvent>;
export interface AtomicSwapOrderCanceledEventObject {
    id: string;
}
export type AtomicSwapOrderCanceledEvent = TypedEvent<[
    string
], AtomicSwapOrderCanceledEventObject>;
export type AtomicSwapOrderCanceledEventFilter = TypedEventFilter<AtomicSwapOrderCanceledEvent>;
export interface AtomicSwapOrderCreatedEventObject {
    id: string;
}
export type AtomicSwapOrderCreatedEvent = TypedEvent<[
    string
], AtomicSwapOrderCreatedEventObject>;
export type AtomicSwapOrderCreatedEventFilter = TypedEventFilter<AtomicSwapOrderCreatedEvent>;
export interface AtomicSwapOrderTookEventObject {
    maker: string;
    taker: string;
    id: string;
}
export type AtomicSwapOrderTookEvent = TypedEvent<[
    string,
    string,
    string
], AtomicSwapOrderTookEventObject>;
export type AtomicSwapOrderTookEventFilter = TypedEventFilter<AtomicSwapOrderTookEvent>;
export interface CanceledBidEventObject {
    orderID: string;
    bidder: string;
}
export type CanceledBidEvent = TypedEvent<[
    string,
    string
], CanceledBidEventObject>;
export type CanceledBidEventFilter = TypedEventFilter<CanceledBidEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ReceivedNewBidEventObject {
    orderID: string;
    bidder: string;
    amount: BigNumber;
}
export type ReceivedNewBidEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ReceivedNewBidEventObject>;
export type ReceivedNewBidEventFilter = TypedEventFilter<ReceivedNewBidEvent>;
export interface UpdatedBidEventObject {
    orderID: string;
    bidder: string;
    amount: BigNumber;
}
export type UpdatedBidEvent = TypedEvent<[
    string,
    string,
    BigNumber
], UpdatedBidEventObject>;
export type UpdatedBidEventFilter = TypedEventFilter<UpdatedBidEvent>;
export interface AtomicSwap extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AtomicSwapInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        acceptBid(acceptBidMsg: IAtomicSwap.AcceptBidMsgStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        bids(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            number,
            string,
            BigNumber,
            BigNumber
        ] & {
            amount: BigNumber;
            order: string;
            status: number;
            bidder: string;
            receiveTimestamp: BigNumber;
            expireTimestamp: BigNumber;
        }>;
        buyerFeeRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        cancelBid(_orderID: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelSwap(cancelswap: IAtomicSwap.CancelSwapMsgStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialize(_admin: PromiseOrValue<string>, _treasury: PromiseOrValue<string>, _sellerFee: PromiseOrValue<BigNumberish>, _buyerFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        makeSwap(makeswap: IAtomicSwap.MakeSwapMsgStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        placeBid(placeBidMsg: IAtomicSwap.PlaceBidMsgStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sellerFeeRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        swapOrder(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            number,
            string,
            IAtomicSwap.CoinStructOutput,
            string,
            IAtomicSwap.CoinStructOutput,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            id: string;
            status: number;
            maker: string;
            sellToken: IAtomicSwap.CoinStructOutput;
            taker: string;
            buyToken: IAtomicSwap.CoinStructOutput;
            minBidAmount: BigNumber;
            createdAt: BigNumber;
            canceledAt: BigNumber;
            completedAt: BigNumber;
            expiredAt: BigNumber;
            acceptBid: boolean;
        }>;
        takeSwap(takeswap: IAtomicSwap.TakeSwapMsgStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateBid(updateBidMsg: IAtomicSwap.UpdateBidMsgStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    acceptBid(acceptBidMsg: IAtomicSwap.AcceptBidMsgStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    bids(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        string,
        number,
        string,
        BigNumber,
        BigNumber
    ] & {
        amount: BigNumber;
        order: string;
        status: number;
        bidder: string;
        receiveTimestamp: BigNumber;
        expireTimestamp: BigNumber;
    }>;
    buyerFeeRate(overrides?: CallOverrides): Promise<BigNumber>;
    cancelBid(_orderID: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelSwap(cancelswap: IAtomicSwap.CancelSwapMsgStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize(_admin: PromiseOrValue<string>, _treasury: PromiseOrValue<string>, _sellerFee: PromiseOrValue<BigNumberish>, _buyerFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    makeSwap(makeswap: IAtomicSwap.MakeSwapMsgStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    placeBid(placeBidMsg: IAtomicSwap.PlaceBidMsgStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sellerFeeRate(overrides?: CallOverrides): Promise<BigNumber>;
    swapOrder(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        string,
        number,
        string,
        IAtomicSwap.CoinStructOutput,
        string,
        IAtomicSwap.CoinStructOutput,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        id: string;
        status: number;
        maker: string;
        sellToken: IAtomicSwap.CoinStructOutput;
        taker: string;
        buyToken: IAtomicSwap.CoinStructOutput;
        minBidAmount: BigNumber;
        createdAt: BigNumber;
        canceledAt: BigNumber;
        completedAt: BigNumber;
        expiredAt: BigNumber;
        acceptBid: boolean;
    }>;
    takeSwap(takeswap: IAtomicSwap.TakeSwapMsgStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateBid(updateBidMsg: IAtomicSwap.UpdateBidMsgStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        acceptBid(acceptBidMsg: IAtomicSwap.AcceptBidMsgStruct, overrides?: CallOverrides): Promise<void>;
        bids(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            number,
            string,
            BigNumber,
            BigNumber
        ] & {
            amount: BigNumber;
            order: string;
            status: number;
            bidder: string;
            receiveTimestamp: BigNumber;
            expireTimestamp: BigNumber;
        }>;
        buyerFeeRate(overrides?: CallOverrides): Promise<BigNumber>;
        cancelBid(_orderID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        cancelSwap(cancelswap: IAtomicSwap.CancelSwapMsgStruct, overrides?: CallOverrides): Promise<void>;
        initialize(_admin: PromiseOrValue<string>, _treasury: PromiseOrValue<string>, _sellerFee: PromiseOrValue<BigNumberish>, _buyerFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        makeSwap(makeswap: IAtomicSwap.MakeSwapMsgStruct, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        placeBid(placeBidMsg: IAtomicSwap.PlaceBidMsgStruct, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        sellerFeeRate(overrides?: CallOverrides): Promise<BigNumber>;
        swapOrder(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            number,
            string,
            IAtomicSwap.CoinStructOutput,
            string,
            IAtomicSwap.CoinStructOutput,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            id: string;
            status: number;
            maker: string;
            sellToken: IAtomicSwap.CoinStructOutput;
            taker: string;
            buyToken: IAtomicSwap.CoinStructOutput;
            minBidAmount: BigNumber;
            createdAt: BigNumber;
            canceledAt: BigNumber;
            completedAt: BigNumber;
            expiredAt: BigNumber;
            acceptBid: boolean;
        }>;
        takeSwap(takeswap: IAtomicSwap.TakeSwapMsgStruct, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateBid(updateBidMsg: IAtomicSwap.UpdateBidMsgStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AcceptedBid(bytes32,address,uint256)"(orderID?: PromiseOrValue<BytesLike> | null, bidder?: PromiseOrValue<string> | null, amount?: PromiseOrValue<BigNumberish> | null): AcceptedBidEventFilter;
        AcceptedBid(orderID?: PromiseOrValue<BytesLike> | null, bidder?: PromiseOrValue<string> | null, amount?: PromiseOrValue<BigNumberish> | null): AcceptedBidEventFilter;
        "AtomicSwapOrderCanceled(bytes32)"(id?: PromiseOrValue<BytesLike> | null): AtomicSwapOrderCanceledEventFilter;
        AtomicSwapOrderCanceled(id?: PromiseOrValue<BytesLike> | null): AtomicSwapOrderCanceledEventFilter;
        "AtomicSwapOrderCreated(bytes32)"(id?: PromiseOrValue<BytesLike> | null): AtomicSwapOrderCreatedEventFilter;
        AtomicSwapOrderCreated(id?: PromiseOrValue<BytesLike> | null): AtomicSwapOrderCreatedEventFilter;
        "AtomicSwapOrderTook(address,address,bytes32)"(maker?: PromiseOrValue<string> | null, taker?: PromiseOrValue<string> | null, id?: PromiseOrValue<BytesLike> | null): AtomicSwapOrderTookEventFilter;
        AtomicSwapOrderTook(maker?: PromiseOrValue<string> | null, taker?: PromiseOrValue<string> | null, id?: PromiseOrValue<BytesLike> | null): AtomicSwapOrderTookEventFilter;
        "CanceledBid(bytes32,address)"(orderID?: PromiseOrValue<BytesLike> | null, bidder?: PromiseOrValue<string> | null): CanceledBidEventFilter;
        CanceledBid(orderID?: PromiseOrValue<BytesLike> | null, bidder?: PromiseOrValue<string> | null): CanceledBidEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "ReceivedNewBid(bytes32,address,uint256)"(orderID?: PromiseOrValue<BytesLike> | null, bidder?: PromiseOrValue<string> | null, amount?: PromiseOrValue<BigNumberish> | null): ReceivedNewBidEventFilter;
        ReceivedNewBid(orderID?: PromiseOrValue<BytesLike> | null, bidder?: PromiseOrValue<string> | null, amount?: PromiseOrValue<BigNumberish> | null): ReceivedNewBidEventFilter;
        "UpdatedBid(bytes32,address,uint256)"(orderID?: PromiseOrValue<BytesLike> | null, bidder?: PromiseOrValue<string> | null, amount?: PromiseOrValue<BigNumberish> | null): UpdatedBidEventFilter;
        UpdatedBid(orderID?: PromiseOrValue<BytesLike> | null, bidder?: PromiseOrValue<string> | null, amount?: PromiseOrValue<BigNumberish> | null): UpdatedBidEventFilter;
    };
    estimateGas: {
        acceptBid(acceptBidMsg: IAtomicSwap.AcceptBidMsgStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        bids(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        buyerFeeRate(overrides?: CallOverrides): Promise<BigNumber>;
        cancelBid(_orderID: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelSwap(cancelswap: IAtomicSwap.CancelSwapMsgStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize(_admin: PromiseOrValue<string>, _treasury: PromiseOrValue<string>, _sellerFee: PromiseOrValue<BigNumberish>, _buyerFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        makeSwap(makeswap: IAtomicSwap.MakeSwapMsgStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        placeBid(placeBidMsg: IAtomicSwap.PlaceBidMsgStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sellerFeeRate(overrides?: CallOverrides): Promise<BigNumber>;
        swapOrder(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        takeSwap(takeswap: IAtomicSwap.TakeSwapMsgStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateBid(updateBidMsg: IAtomicSwap.UpdateBidMsgStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptBid(acceptBidMsg: IAtomicSwap.AcceptBidMsgStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        bids(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buyerFeeRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelBid(_orderID: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelSwap(cancelswap: IAtomicSwap.CancelSwapMsgStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_admin: PromiseOrValue<string>, _treasury: PromiseOrValue<string>, _sellerFee: PromiseOrValue<BigNumberish>, _buyerFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        makeSwap(makeswap: IAtomicSwap.MakeSwapMsgStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        placeBid(placeBidMsg: IAtomicSwap.PlaceBidMsgStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sellerFeeRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapOrder(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        takeSwap(takeswap: IAtomicSwap.TakeSwapMsgStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateBid(updateBidMsg: IAtomicSwap.UpdateBidMsgStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}