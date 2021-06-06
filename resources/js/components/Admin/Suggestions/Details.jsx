import React from 'react';
import { useRememberedState } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Textarea from '../../Textarea';
import Button from '../../Button';
import Comment from '../../Comment';

export default function Details(props) {
  const { data, hideDetails } = props;
  const [textarea, setTextArea] = useRememberedState('');

  const handleOnCancel = () => {
    const { hostname } = window.location;
    const url = window.location.href;
    const [port, path] = url.split(hostname);
    Inertia.visit(path);
  };

  const handleOnChange = (e) => {
    setTextArea(e.target.value);
  };

  const createComment = () => {
    console.log('data =>', data);
    Inertia.put(`/admin/suggestions/${data.id}/update`, {
      comment: textarea,
      status: 'solved',
    });
  };

  // const solveSuggestion = () => {
  //   Inertia.put(`/admin/suggestions/${data.id}/updateStatus`, {
  //     status: 'solved',
  //   });
  // };

  return (
      <div className="w-full">
          <div
              className="m-2 md:mx-6 md:my-6">
              <span className="text-sm">{data.name}</span>
              <div>
                  <i
                      className="inline fa fa-at fa-fw text-brand-icons text-sm"/>
                  <span className="inline text-sm">: {data.email}</span>
              </div>
              <div className="mt-8">
                  <i className="inline fas fa-comment-alt text-base text-green-600 mr-2"></i>
                  <span className="inline">{data.suggestion}</span>
              </div>
              {data.comments.length === 0 && (
                  <>
                      <Textarea
                          label="Comentario de seguimiento"
                          value={textarea}
                          id="comment"
                          placeholder="Se solucionó de la siguiente manera..."
                          onChange={handleOnChange}
                          // error={errors.suggestion}
                          extraProps={{
                            disabled: false,
                          }}
                      />
                      <div className="mt-2 flex justify-end">
                          <div className="mr-2">
                              <Button onClick={createComment} disabled={false}>
                                  Solucionado
                              </Button>
                          </div>
                          <div>
                              <Button onClick={handleOnCancel} disabled={false}>
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

              {/* Solucionado */}
              {/* isSolved? a lo mejor un metodo de esto */}
              {/* {data.status !== 'solved' && ( */}
              {/*    <div className="mt-8"> */}
              {/*        <Button onClick={solveSuggestion} disabled={false}> */}
              {/*            Solucionar */}
              {/*        </Button> */}
              {/*    </div> */}
              {/* )} */}
              {data.status_info.is_solved && (
                  <>
                      <div className="mt-8">
                          Sugerencia solucionada por: <span className="text-brand-green">{data.activity[data.activity.length - 1].causer.name}</span>
                      </div>
                      <button
                          className="inline-block text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0"
                          onClick={handleOnCancel}>
                          Cerrar
                      </button>
                  </>
              )}
          </div>
      </div>
  );
}
