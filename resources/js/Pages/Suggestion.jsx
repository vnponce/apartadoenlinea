import React, { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Layout from '../Shared/Layout';
import Input from '../components/Input';
import Textarea from '../components/Textarea';

function Suggestion() {
  const [data, setData] = useState({});
  const [disabled, setDisabled] = useState(false);
  const { errors, flash: { success_message } } = usePage();

  useEffect(() => {
    if (success_message) {
      setDisabled('disabled');
      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: success_message,
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        // location.reload();
      });
    }
  }, [success_message]);

  const createSuggestion = (e) => {
    e.preventDefault();
    console.log('data =>', data);
    Inertia.post('/suggestions', data);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
        <Layout title="Comentario">
            <div className="flex items-center w-full flex-col mt-12 sm:mt-16 px-8">
                <form id="comment-form" className="w-full md:w-1/2 m-auto">
                    <Input
                        value={data.name}
                        label="Nombre completo"
                        id="name"
                        type="text"
                        placeholder="Juan Pérez"
                        // className="mb-4"
                        // errors="$page.errors.email"
                        onChange={handleInput}
                        autofocus
                        error={errors.name}
                        extraProps={{
                          disabled,
                        }}
                        // onKeyDown={LOGIN_MOCK_DEV_ONLY}
                    />
                    <Input
                        label="Correo electrónico"
                        value={data.email}
                        id="email"
                        placeholder="juan@perez.com"
                        type="text"
                        // errors="$page.errors.email"
                        // className="mb-6"
                        onChange={handleInput}
                        error={errors.email}
                        extraProps={{
                          disabled,
                        }}
                        // onKeyDown={LOGIN_MOCK_DEV_ONLY}
                    />

                    <Textarea
                        label="Sugerencia"
                        value={data.suggestion}
                        id="suggestion"
                        placeholder="Sugerencia..."
                    // errors="$page.errors.email"
                    // className="mb-6"
                        onChange={handleInput}
                        error={errors.comment}
                        extraProps={{
                          disabled,
                        }}
                        // rows="4"
                    />

                    <div className="flex justify-end pt-4">
                        <button type="submit" className="button" onClick={createSuggestion} disabled={disabled}>
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
  );
}

export default Suggestion;
