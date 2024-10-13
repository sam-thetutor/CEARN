import Types "Types";
import managementCanister "mgt.types";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Error "mo:base/Error";
import Cycles "mo:base/ExperimentalCycles";

actor class CEARN() = this {

  type Details = Types.Details;

  //initializing the management canister.
  let ic : managementCanister.IC = actor ("aaaaa-aa");

  //store the wasm for the CEARN canister from where user canisters are made.
  //it has tobe uploaded before the platform can be used
  stable var wasmContent : [Nat8] = [];

  //store the users info linking them to their CEARN canisters
  private stable var userArray : [(Principal, Details)] = [];
  private var userHashMap = HashMap.fromIter<Principal, Details>(
    Iter.fromArray(userArray),
    Iter.size(Iter.fromArray(userArray)),
    Principal.equal,
    Principal.hash,
  );


  //upload the CEARN wasm module to the canister
    public func uploadWasm(wasmBlob : [Nat8]) : async Result.Result<(), Text> {
        try {
            wasmContent := wasmBlob;
            #ok();

        } catch (error) {
            #err(Error.message(error));
        };
    };

//get cycles balance for the backend canister
    public func getCyclesbalance() : async Nat {
        return Cycles.balance();
    };



    // //create new portal for the user
    //     public shared ({ caller }) func createPortal(_portalName : Text, contID : Principal) : async Result.Result<{ canister_id : Principal}, Text> {
         
    //       let settings = {
    //         freezing_threshold = ?2_592_000;
    //         controllers = ?[contID, Principal.fromActor(this)];
    //         memory_allocation = null;
    //         compute_allocation = null;

    //     };

    //     Cycles.add(100_000_000_000); 

    //      try {

    //         //create an empty wallet canister
    //         let canister_id = await ic.create_canister({ settings = ?settings });

    //         let installSettings = {
    //             arg = [];
    //             wasm_module = wasmContent;
    //             mode = #install;
    //             canister_id = canister_id.canister_id;

    //         };


    //         //create an empty wallet canister
    //         let canister_id = await ic.create_canister({ settings = ?settings });

    //         let installSettings = {
    //             arg = [];
    //             wasm_module = wasmContent;
    //             mode = #install;
    //             canister_id = canister_id.canister_id;

    //         };
    //      }catch(error){
    //       return #err(Error.message(error))
    //      }















    //     }




};
