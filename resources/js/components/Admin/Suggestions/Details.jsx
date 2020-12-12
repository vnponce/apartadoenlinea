import React, { useEffect } from 'react';
import Textarea from "../../Textarea";
import Button from "../../Button";
import Comment from "../../Comment";

export default function InfoBoxes(props) {
  const { data } = props;
  console.log('data =>', data);
  return (
        <div id="dash-content"
             className="bg-gray-200 py-6 lg:py-0 w-full lg:min-h-screen lg:max-w-sm flex flex-wrap content-start">
            { data && (
                <div className="w-1/2 lg:w-full">
                    <div
                        className="m-2 md:mx-6 md:my-6">
                        <span className="text-lg">{data.name}</span>
                        <div>
                            <i
                                className="inline fa fa-at fa-fw text-brand-icons text-sm"/>
                            <span className="inline">: {data.email}</span>
                        </div>
                        <div className="mt-8">
                            <i className="inline fas fa-comment-alt text-brand-icons text-sm"></i>
                            <span className="inline">: {data.suggestion}</span>
                        </div>
                        {data.comments.length === 0 && (
                            <>
                                <Textarea
                                    label="Comentario de seguimiento"
                                    value={(data.comments && data.comments.comment) || ''}
                                    id="comment"
                                    placeholder="Se solucionó de la siguiente manera..."
                                    // onChange={handleInput}
                                    // error={errors.suggestion}
                                    extraProps={{
                                        disabled: false,
                                    }}
                                />
                                <div className="mt-2 flex justify-end">
                                    <div className="mr-2">
                                        <Button onClick={() => {}} disabled={false}>
                                            Agregar
                                        </Button>
                                    </div>
                                    <div>
                                        <Button onClick={() => {}} disabled={false}>
                                            Cancelar
                                        </Button>
                                    </div>
                                </div>
                            </>
                        )}
                        {data.comments.length > 0 && (
                            <>
                                <Comment comment={data.comments[0]}/>
                            </>
                        )}

                        {/*Solucionado*/}
                        {/*isSolved? a lo mejor un metodo de esto*/}
                        {data.status !== 'solved' && (
                            <div className="mt-8">
                                <Button onClick={() => {}} disabled={false}>
                                    Solucionar
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
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
