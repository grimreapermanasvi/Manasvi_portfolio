import MailchimpSubscribe from "react-mailchimp-subscribe";
import {Newsletter} from "./Newsletter";

export const MailchimpForm = ()=>{
    const postUrl =`${process.env.REACT_APP_MAILCHIMP_URL}?U=${process.env.REACT_APP_MAILCHIMP_U}&ID=${process.env.REACT_APP_MAILCHIMP_ID}`

    return (
        <>
            <MailchimpSubscribe
             url="http://eepurl.com/iStrN6"
             render={({ subscribe, status, message }) => (
                <Newsletter
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                />
             )}
             />
        </>
    )
}