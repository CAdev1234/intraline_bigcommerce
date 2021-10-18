import { FC, useState } from "react";
import dynamic from "next/dynamic";
import { fetchApiWithBody } from "@utils/request";
const Button = dynamic(import('@components/mycp/Button'))
const Cross = dynamic(import('@components/icons/Cross'))



interface HubspotFormProps {
    fields: any,
    closeHubspotForm?: (e: React.MouseEvent) => any 
}
const HubspotForm:FC<HubspotFormProps> = ({fields, closeHubspotForm}) => {
    const submitHubspotHandler = async() => {
        let fields = []
        let input_li = document.querySelectorAll('#hubspot-form input')
        for (let index = 0; index < input_li.length; index++) {
            fields.push({
                "name": (input_li[index] as HTMLInputElement).name,
                "value": (input_li[index] as HTMLInputElement).value
            })
        }
        let req_body = {
            fields: fields,
            // "legalConsentOptions": {
            //     "consent": { // Include this object when GDPR options are enabled
            //         "consentToProcess": true,
            //         "text": "I agree to allow Example Company to store and process my personal data.",
            //         "communications": [
            //             {
            //                 "value": true,
            //                 "subscriptionTypeId": 999,
            //                 "text": "I agree to receive marketing communications from Example Company."
            //             }
            //         ]
            //     }
            // }
        }
        let response = await fetch('/api/hubspot/submitFormData', {
            method: 'POST',
            body: JSON.stringify(req_body)
        }).then(res => res.json())

    }
    const renderInputs = () => {
        let form_array = []
        for (let index = 0; index < fields.length; index++) {
            form_array.push(
                <div key={`hubspot_form_${index}`} className="mb-3">
                    <input className="h-11 bg-c_F7F7F7 border-none w-full pl-5 py-2 appearance-none transition duration-150 ease-in-out focus:outline-none focus:shadow-custom" 
                        type="text"
                        name={fields[index].name}
                        placeholder={fields[index].label}
                        onChange={(event) => {}}/>
                </div>
            )
        }
        return <div className="h-full overflow-y-auto pr-2">
                    {form_array}
                    <div className="w-1/3 mx-auto mt-5">
                        <Button className="w-full h-9 text-lg leading-36_48 ttcommon_font"
                                onClick={() => submitHubspotHandler()}>Submit</Button>
                    </div>
                </div>
    }
    return <div className={`fixed top-15 left-0 w-full h-screen bg-black bg-opacity-50 flex flex-col`} id="hubspot-form">
                <div className="relative pl-5 pr-2 py-7_5 bg-white mx-auto my-auto flex flex-col
                                    w-full md:w-146" style={{ height: '80vh' }}>
                    <div className="tt_common_font_bold text-4xl text-center">Hubspot Form</div>
                    <div className="flex-1 h-0 mt-3">
                        <div className="h-full overflow-y-auto pr-2">
                            {renderInputs()}
                        </div>
                    </div>
                    <div className="absolute top-2 right-2 cursor-pointer" onClick={closeHubspotForm}>
                        <Cross />
                    </div>
                </div>
            </div>
}
export default HubspotForm