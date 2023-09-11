function(instance, properties, context) {

    if(!window.ethereum) {
        instance.publishState("connected", false);
        console.error("Metamask is not installed")
    }else{
        instance.publishState("connected", true);
        window.ethereum.request({ method: 'wallet_getSnaps' }).then((res) => {
            instance.publishState("snaps_installed", Object.keys(res));
        })
    }

}