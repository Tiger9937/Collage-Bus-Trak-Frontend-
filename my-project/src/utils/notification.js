const notify = (title,message)=>{
    new Notification(title,{
        body:message
    })
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

async function SubscribeToNotify(){

    try {
        const Permition = await Notification.requestPermission()
        if(Permition === 'granted'){
            const registration = await navigator.serviceWorker.ready
            const subscribed = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array('BERYdJSiXa4K0PCg7RJkwcKluk7wgFwX3ArKIUMHS-TKePVSWpb5KIDycNMlOPdGchqec2knPM82_Xaxcmy40ts')
            });
            notify("Thanks for Subscribe Ass","You'll now receive updates whenever new update is available in our app.")
            return subscribed
        }else {
            alert("Notification permission denied.")
            return null;
        }
    } catch (error) {
        return error
    }

 }
 
 export {SubscribeToNotify , notify}





 