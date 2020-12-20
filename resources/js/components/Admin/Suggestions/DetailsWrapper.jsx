import React, { useEffect } from 'react';
import Details from "./Details";

export default function DetailsWrapper(props) {
  const { data, hideDetails } = props;
  return (
        <div id="dash-content"
             className="bg-gray-200 py-6 lg:py-0 w-full lg:min-h-screen lg:max-w-sm flex flex-wrap content-start">
            { data && (
                <Details data={data} hideDetails={hideDetails}/>
            )}
            { !data && (
                <div className="w-1/2 lg:w-full">
                    <div
                        className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
                        <div className="flex flex-col items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full p-3 bg-gray-400"><i
                                    className="fa fa-hand-pointer fa-fw fa-inverse text-3xl"/></div>
                            </div>
                            <div className="flex-1 mt-3">
                                No hay ninguna sugerencia seleccionada para visualizar.
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
  );
}
