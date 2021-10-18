import { FC } from "react";
import dynamic from "next/dynamic";
import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form'
const Cross = dynamic(import('@components/icons/Cross'))

interface HubspotFormProps {
    formId: string,
    portalId: string,
    target: string,
    closeHubspotForm?: (e: React.MouseEvent) => any 
}
const HubspotForm:FC<HubspotFormProps> = ({formId, portalId, target, closeHubspotForm}) => {
    const { loaded, error, formCreated } = useHubspotForm({
        portalId: portalId,
        formId: formId,
        target: target
    });
    return <div className={`fixed top-15 left-0 w-full h-screen bg-black bg-opacity-50 flex flex-col`}>
                <div className="relative pl-5 pr-2 py-7_5 bg-white mx-auto my-auto flex flex-col
                                    w-full md:w-146" style={{ height: '80vh' }}>
                    <div className="tt_common_font_bold text-4xl text-center">Hubspot Form</div>
                    <div className="flex-1 h-0 mt-3">
                        <div className="h-full overflow-y-auto pr-2">
                            <div id="my-hubspot-form"></div>
                        </div>
                    </div>
                    <div className="absolute top-2 right-2 cursor-pointer" onClick={closeHubspotForm}>
                        <Cross />
                    </div>
                </div>


            </div>
}
export default HubspotForm