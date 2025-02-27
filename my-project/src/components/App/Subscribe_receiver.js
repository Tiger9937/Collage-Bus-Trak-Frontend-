import {SubscribeToNotify} from '../../utils/notification'
 import {Privet_POST_request_Send_Subscription_Data} from '../../utils/Privet.fetch'

const subscribe = async () => {
    const subscription = await SubscribeToNotify(); // Await subscription result
    

    if (subscription) {
        const SubscribeData = {
            endpoint: subscription.endpoint,
            keys: {
                auth: btoa(String.fromCharCode.apply(null, new Uint8Array(subscription.getKey('auth')))),
                p256dh: btoa(String.fromCharCode.apply(null, new Uint8Array(subscription.getKey('p256dh'))))
            }
        };
        
        const response = await Privet_POST_request_Send_Subscription_Data("POST", '/notify/save-subscription', SubscribeData);
        if (!response) {
            notify(
                "Something Went Wrong",
                "We apologize for the inconvenience. The error is originating from our server, and we are actively working to resolve this issue promptly. Thank you for your patience."
            );
        }
    }

};

export { subscribe };
