import React from 'react';

export default function StoreDetails(props) {
    const { data } = props;
    return (
        <div
            className="m-2 md:mx-6 md:my-6">
            <div className="flex flex-row">
                <div className="flex-shrink pr-4">
                    <div className="rounded-full p-3 bg-gray-400"><i
                        className="fa fa-store fa-fw fa-inverse text-xl"/></div>
                </div>
                <div className="flex flex-1 flex-col">
                    <span className="text-lg">{data.name}</span>
                    <div>
                        <i
                            className="inline fa fa-map-marker-alt fa-fw text-brand-icons text-sm"/>
                        <span className="inline">: {data.friendlyAddress}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};
