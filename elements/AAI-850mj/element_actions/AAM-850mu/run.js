function(instance, properties, context) {

    if(window.ethereum){
        window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((account_id) => {
            instance.publishState("account_id", account_id[0]);
            instance.triggerEvent("metamask_connected");
        })
            .catch((error) => {
            if (error.code === 4001) {
                console.log("Please connect to MetaMask.");
            } else {
                console.error(error);
            }
        });
    }
}