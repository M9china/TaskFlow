import { policyData } from "."
 
export const PolicyComponent: React.FC = () => {
 
    return (
        <>
            <div className="mt-[5rem] bg-white pt-4 pb-4 ">
                <div className="ml-16">
                <div>
                    <h1 className="text-4xl font-semibold text-gray-900"> Policy</h1>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mt-6">Introduction</h2>
                </div>
                <div>
                    <p className="text-md text-gray-600 mt-6">Welcome to OpherLabs. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
                </div>
 
                {policyData.map((policy, index) => (
                    <div key={index} className="mt-8">
                        <div className=" mt-6 font-semibold text-lg">{policy.title}</div>
                        <ul className="list-disc list-inside mt-6">
                            {policy.subtitle == null ? (null) : (<li className={`"text-gray-500 mt-2 ml-6 text-md w-full" ${policy.subtitle === 'Personal Information' ? 'font-semibold' : 'text-gray-600'} `}>{policy.subtitle}</li>
                            )}
                            <li className="text-gray-600 text-md ml-6 mt-1">{policy.description}</li>
                        </ul>
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}