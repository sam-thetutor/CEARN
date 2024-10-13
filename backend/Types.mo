import Time "mo:base/Time";
import Principal "mo:base/Principal";
import Text "mo:base/Text";



module {

    //Record to store details about the created wallet
    public type Details = {
        portalName : Text;
        portalID : Principal;
        controller : Principal;
        date : Int;
    };


    
};
