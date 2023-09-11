function(instance, properties, context) {

    if(window.ethereum){

        window.ethereum.request({
            method: "wallet_requestSnaps",
            params: {
                [properties.package_name]:{
                    version: properties.version,
                }
            }
        })
            .then((res) => {
            instance.publishState("version_snap_install", res[properties.package_name].version);
            instance.triggerEvent("snap_connected");
        })
            .catch((error) => {
            if (error.code === 4001) {
                console.log("Please connect to MetaMask.");
            } else {
                console.error(error);
            }
        });

    }else{
        console.error("Metamask is not installed")
    }

}