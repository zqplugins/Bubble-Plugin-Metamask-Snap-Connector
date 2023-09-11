function(instance, properties, context) {

    if(window.ethereum){
        let params = {};
        (properties.params_name_1) && (params[properties.params_name_1] = properties.params_value_1);
        (properties.params_name_2) && (params[properties.params_name_2] = properties.params_value_2);
        (properties.params_name_3) && (params[properties.params_name_3] = properties.params_value_3);
        window.ethereum.request({
            method: "wallet_invokeSnap",
            params: {
                snapId: properties.package_name,
                request: {
                    method: properties.method,
                    params: params
                },
            },
        }).then((res) => {
            instance.triggerEvent("wallet_invokesnap_success");
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