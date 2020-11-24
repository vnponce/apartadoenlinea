import React from 'react';

export default function UserDetails(props) {
    const { data } = props;
    return (
        <div
            className="m-2 md:mx-6 md:my-6">
            <div className="flex flex-row">
                <div className="flex-shrink pr-4">
                    <div className="rounded-full p-3 bg-gray-400"><i
                        className="fa fa-user fa-fw fa-inverse text-xl"/></div>
                </div>
                <div className="flex flex-1 flex-col">
                    <span className="text-lg">{data.name}</span>
                    <div>
                        <i
                            className="inline fa fa-mobile-alt fa-fw text-brand-icons text-sm"/>
                        <span className="inline">: {data.phone}</span>
                    </div>
                    <div>
                        <i
                            className="inline fa fa-at fa-fw text-brand-icons text-sm"/>
                        <span className="inline">: {data.email}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};
