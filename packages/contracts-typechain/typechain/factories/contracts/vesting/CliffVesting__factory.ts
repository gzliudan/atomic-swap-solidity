/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  CliffVesting,
  CliffVestingInterface,
} from "../../../contracts/vesting/CliffVesting";

const _abi = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTotalPercentage",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidVesting",
    type: "error",
  },
  {
    inputs: [],
    name: "NoVestedTokensAvailable",
    type: "error",
  },
  {
    inputs: [],
    name: "NoVestedTokensForRelease",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [],
    name: "OverMaximumReleaseStep",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "VestingAlreadyStarted",
    type: "error",
  },
  {
    inputs: [],
    name: "VestingNotStarted",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Released",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_sellerFee",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "releaseInfos",
    outputs: [
      {
        internalType: "uint256",
        name: "durationInHours",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "percentage",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "durationInHours",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "percentage",
            type: "uint256",
          },
        ],
        internalType: "struct IAtomicSwapBase.Release[]",
        name: "releases",
        type: "tuple[]",
      },
    ],
    name: "startVesting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "vestingSchedules",
    outputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountReleased",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastReleasedStep",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506115a5806100206000396000f3fe60806040526004361061007f5760003560e01c80638da5cb5b1161004e5780638da5cb5b14610176578063d20252a1146101a1578063f2fde38b146101ca578063fdb20ccb146101f3576100ca565b80631794bb3c146100cf57806319165587146100f8578063655d41bd14610121578063715018a61461015f576100ca565b366100ca57343373ffffffffffffffffffffffffffffffffffffffff167f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f8852587460405160405180910390a3005b600080fd5b3480156100db57600080fd5b506100f660048036038101906100f19190610f11565b610235565b005b34801561010457600080fd5b5061011f600480360381019061011a9190610f64565b61040e565b005b34801561012d57600080fd5b5061014860048036038101906101439190610f91565b610789565b604051610156929190610fe0565b60405180910390f35b34801561016b57600080fd5b506101746107ca565b005b34801561018257600080fd5b5061018b6107de565b6040516101989190611018565b60405180910390f35b3480156101ad57600080fd5b506101c860048036038101906101c391906111e1565b610816565b005b3480156101d657600080fd5b506101f160048036038101906101ec9190610f64565b610a33565b005b3480156101ff57600080fd5b5061021a60048036038101906102159190610f64565b610ab9565b60405161022c96959493929190611264565b60405180910390f35b600061023f610b35565b905060008160000160089054906101000a900460ff1615905060008260000160009054906101000a900467ffffffffffffffff1690506000808267ffffffffffffffff1614801561028d5750825b9050600060018367ffffffffffffffff161480156102c2575060003073ffffffffffffffffffffffffffffffffffffffff163b145b9050811580156102d0575080155b15610307576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018560000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555083156103575760018560000160086101000a81548160ff0219169083151502179055505b61036088610b5d565b86600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508560038190555083156104045760008560000160086101000a81548160ff0219169083151502179055507fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d260016040516103fb919061131e565b60405180910390a15b5050505050505050565b610416610be3565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905081600101544210156104d9576040517f35549be800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000818054905014806104f457508080549050826005015410155b1561052b576040517f8bdb538100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080836001015490506000846005015490505b838054905081101561060d57610e1084828154811061056157610560611339565b5b90600052602060002090600202016000015461057d9190611397565b8261058891906113d9565b915081421061060d5760006127108583815481106105a9576105a8611339565b5b90600052602060002090600202016001015487600301546105ca9190611397565b6105d4919061143c565b905080846105e291906113d9565b93506001826105f191906113d9565b86600501819055505080806106059061146d565b91505061053f565b5060008211610648576040517f3507415000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8184600401600082825461065c91906113d9565b925050819055508360020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673__$b9ebb88af43d68d18cc83c52d00a91a1a0$__6306cf2280909187856003546103e8600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518763ffffffff1660e01b81526004016107069695949392919061150e565b60006040518083038186803b15801561071e57600080fd5b505af4158015610732573d6000803e3d6000fd5b50505050818573ffffffffffffffffffffffffffffffffffffffff167fb21fb52d5749b80f3182f8c6992236b5e5576681880914484d7f4c9b062e619e60405160405180910390a350505050610786610c3a565b50565b600160205281600052604060002081815481106107a557600080fd5b9060005260206000209060020201600091509150508060000154908060010154905082565b6107d2610c53565b6107dc6000610cda565b565b6000806107e9610db1565b90508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505090565b60004290506040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020016000815260200160008152506000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a082015181600501559050506000600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060005b8351811015610a2a57818482815181106109d0576109cf611339565b5b60200260200101519080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508080610a229061146d565b9150506109b3565b50505050505050565b610a3b610c53565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610aad5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610aa49190611018565b60405180910390fd5b610ab681610cda565b50565b60006020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040154908060050154905086565b60007ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00905090565b610b65610dd9565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610bd75760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610bce9190611018565b60405180910390fd5b610be081610cda565b50565b6000610bed610e19565b90506002816000015403610c2d576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002816000018190555050565b6000610c44610e19565b90506001816000018190555050565b610c5b610e41565b73ffffffffffffffffffffffffffffffffffffffff16610c796107de565b73ffffffffffffffffffffffffffffffffffffffff1614610cd857610c9c610e41565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610ccf9190611018565b60405180910390fd5b565b6000610ce4610db1565b905060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b60007f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300905090565b610de1610e49565b610e17576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60007f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00905090565b600033905090565b6000610e53610b35565b60000160089054906101000a900460ff16905090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ea882610e7d565b9050919050565b610eb881610e9d565b8114610ec357600080fd5b50565b600081359050610ed581610eaf565b92915050565b6000819050919050565b610eee81610edb565b8114610ef957600080fd5b50565b600081359050610f0b81610ee5565b92915050565b600080600060608486031215610f2a57610f29610e73565b5b6000610f3886828701610ec6565b9350506020610f4986828701610ec6565b9250506040610f5a86828701610efc565b9150509250925092565b600060208284031215610f7a57610f79610e73565b5b6000610f8884828501610ec6565b91505092915050565b60008060408385031215610fa857610fa7610e73565b5b6000610fb685828601610ec6565b9250506020610fc785828601610efc565b9150509250929050565b610fda81610edb565b82525050565b6000604082019050610ff56000830185610fd1565b6110026020830184610fd1565b9392505050565b61101281610e9d565b82525050565b600060208201905061102d6000830184611009565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61108182611038565b810181811067ffffffffffffffff821117156110a05761109f611049565b5b80604052505050565b60006110b3610e69565b90506110bf8282611078565b919050565b600067ffffffffffffffff8211156110df576110de611049565b5b602082029050602081019050919050565b600080fd5b600080fd5b6000604082840312156111105761110f6110f5565b5b61111a60406110a9565b9050600061112a84828501610efc565b600083015250602061113e84828501610efc565b60208301525092915050565b600061115d611158846110c4565b6110a9565b905080838252602082019050604084028301858111156111805761117f6110f0565b5b835b818110156111a9578061119588826110fa565b845260208401935050604081019050611182565b5050509392505050565b600082601f8301126111c8576111c7611033565b5b81356111d884826020860161114a565b91505092915050565b600080600080608085870312156111fb576111fa610e73565b5b600061120987828801610ec6565b945050602061121a87828801610ec6565b935050604061122b87828801610efc565b925050606085013567ffffffffffffffff81111561124c5761124b610e78565b5b611258878288016111b3565b91505092959194509250565b600060c0820190506112796000830189611009565b6112866020830188610fd1565b6112936040830187611009565b6112a06060830186610fd1565b6112ad6080830185610fd1565b6112ba60a0830184610fd1565b979650505050505050565b6000819050919050565b600067ffffffffffffffff82169050919050565b6000819050919050565b60006113086113036112fe846112c5565b6112e3565b6112cf565b9050919050565b611318816112ed565b82525050565b6000602082019050611333600083018461130f565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006113a282610edb565b91506113ad83610edb565b92508282026113bb81610edb565b915082820484148315176113d2576113d1611368565b5b5092915050565b60006113e482610edb565b91506113ef83610edb565b925082820190508082111561140757611406611368565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061144782610edb565b915061145283610edb565b9250826114625761146161140d565b5b828204905092915050565b600061147882610edb565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036114aa576114a9611368565b5b600182019050919050565b6114be81610e9d565b82525050565b6114cd81610edb565b82525050565b6000819050919050565b60006114f86114f36114ee846114d3565b6112e3565b610edb565b9050919050565b611508816114dd565b82525050565b600060c08201905061152360008301896114b5565b61153060208301886114b5565b61153d60408301876114c4565b61154a60608301866114c4565b61155760808301856114ff565b61156460a08301846114b5565b97965050505050505056fea26469706673582212202c1092ef031ae9493a1bd4279f62a8566a9b1c59345720de174bbc8d26f6d6b464736f6c63430008140033";

type CliffVestingConstructorParams =
  | [linkLibraryAddresses: CliffVestingLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CliffVestingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class CliffVesting__factory extends ContractFactory {
  constructor(...args: CliffVestingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        CliffVesting__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: CliffVestingLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$b9ebb88af43d68d18cc83c52d00a91a1a0\\$__", "g"),
      linkLibraryAddresses[
        "contracts/abstracts/libs/utils/TokenTransferHelper.sol:TokenTransferHelper"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      CliffVesting & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CliffVesting__factory {
    return super.connect(runner) as CliffVesting__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CliffVestingInterface {
    return new Interface(_abi) as CliffVestingInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CliffVesting {
    return new Contract(address, _abi, runner) as unknown as CliffVesting;
  }
}

export interface CliffVestingLibraryAddresses {
  ["contracts/abstracts/libs/utils/TokenTransferHelper.sol:TokenTransferHelper"]: string;
}