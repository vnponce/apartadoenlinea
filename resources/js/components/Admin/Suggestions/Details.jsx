import React from 'react';
import { useRememberedState } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Textarea from '../../Textarea';
import Button from '../../Button';
import Comment from '../../Comment';

export default function Details(props) {
  const { data } = props;
  const [textarea, setTextArea] = useRememberedState('');

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

              {/* Solucionado */}
              {/* isSolved? a lo mejor un metodo de esto */}
              {/*{data.status !== 'solved' && (*/}
              {/*    <div className="mt-8">*/}
              {/*        <Button onClick={solveSuggestion} disabled={false}>*/}
              {/*            Solucionar*/}
              {/*        </Button>*/}
              {/*    </div>*/}
              {/*)}*/}
              {data.status === 'solved' && (
                  <div className="mt-8">
                      Sugerencia solucionada por: <span className="text-brand-green">{data.activity[data.activity.length - 1].causer.name}</span>
                  </div>
              )}
          </div>
      </div>
  );
}
