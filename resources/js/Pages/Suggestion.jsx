import React, { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import Swal from "sweetalert2/dist/sweetalert2.js";
import Layout from '../Shared/Layout';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Button from "../components/Button";

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
                <form id="comment-form" className="w-full m-auto lg:w-2/3">
                    <Input
                        value={data.name}
                        label="Nombre completo"
                        id="name"
                        type="text"
                        placeholder="Juan Pérez"
                        onChange={handleInput}
                        autofocus
                        error={errors.name}
                        extraProps={{
                          disabled,
                        }}
                    />
                    <Input
                        label="Correo electrónico"
                        value={data.email}
                        id="email"
                        placeholder="juan@perez.com"
                        type="text"
                        onChange={handleInput}
                        error={errors.email}
                        extraProps={{
                          disabled,
                        }}
                    />

                    <Textarea
                        label="Sugerencia"
                        value={data.suggestion}
                        id="suggestion"
                        placeholder="Sugerencia..."
                        onChange={handleInput}
                        error={errors.suggestion}
                        extraProps={{
                          disabled,
                        }}
                    />

                    <div className="w-full md:w-2/3 m-auto mt-8">
                        <Button disabled={disabled} onClick={createSuggestion}>
                            Enviar
                        </Button>
                    </div>
                </form>
            </div>
        </Layout>
  );
}

export default Suggestion;
