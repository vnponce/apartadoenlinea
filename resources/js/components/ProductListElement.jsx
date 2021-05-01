import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Input from './Input';

export default function ProductListElement(props) {
  const { product, isEditable = true } = props;
  console.log('product =>', product);
  const [showInput, setShowInput] = useState(false);
  const [comment, setComment] = useState('');
  const [showCustomizableInput, setShowCustomizableInput] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  const [error, setError] = useState({
    comment: false,
    customizable: false,
  });

  useEffect(() => {
    setComment(product.options.comment);
    console.log('custom_message =>', product.options.custom_message);
    setCustomMessage(product.options.custom_message);
  }, [product]);
  const removeOneItem = () => {
    Inertia.post('/cart', {
      product_id: product.id,
      comment: product.options.comment,
      custom_message: product.options.custom_message,
      quantity: -1,
      redirect: 'product',
    });
  };
  const removeItem = () => {
    Inertia.delete(`/cart/product/${product.rowId}`);
  };
  const addOneItem = () => {
    Inertia.post('/cart', {
      product_id: product.id,
      comment: product.options.comment,
      custom_message: product.options.custom_message,
      quantity: 1,
      redirect: 'product',
    });
  };
  const updateComment = () => {
    setShowInput(false);
    if (comment === product.options.comment) {
      return false;
    }
    Inertia.post(`/cart/product/${product.id}/update/comment`, {
      product_id: product.id, // not used?
      comment,
      quantity: product.qty,
      remove_rowId: product.rowId,
    });
  };
  const updateCustomMessage = () => {
    console.log('updateCustomMessage =>', customMessage);
    setShowCustomizableInput(false);
    console.log('setShowCustomizableInput =>', showCustomizableInput);
    if (customMessage === product.options.custom_message) {
      return false;
    }
    Inertia.post(`/cart/product/${product.id}/update/custom-message`, {
      custom_message: customMessage,
      remove_rowId: product.rowId,
      quantity: product.qty,
    });
  };

  const validateLength = (e) => {
    const { value } = e.target;
    if (value.length < 120) {
      setComment(e.target.value);
      setError({
        ...error,
        comment: false,
      });
      // setDisabled(false);
    } else {
      // setDisabled(true);
      setError({
        ...error,
        comment: [
          'Máximo 120 caracteres',
        ],
      });
    }
  };

  const handleCustomizable = (e) => {
    const { value } = e.target;
    if (value.length < 25) {
      setCustomMessage(e.target.value);
      setError({
        ...error,
        customizable: false,
      });
      // setDisabled(false);
    } else {
      // setDisabled(true);
      setError({
        ...error,
        customizable: [
          'Máximo 25 caracteres',
        ],
      });
    }
  };

  return (
        <div data-testid={`list-item-${product.id}`} className="mb-8 w-full">
            <div className="flex">
                <div className="flex items-center flex-1 inline-block">
                    {isEditable
                    && <svg onClick={removeItem}
                         // className="w-1/12 cursor-pointer -ml-5 mr-2 stroke-current fill-current  text-gray-500"
                         className="remove-all-item w-5 md:w-4 cursor-pointer mr-2 stroke-current fill-current  text-gray-500"
                         viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polygon
                            points="10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644"/>
                    </svg>
                    }
                    <span className="name w-11/12 ml-0 text-lg">{ product.name }</span>
                </div>
                <div className="flex flex-1 text-center items-center">
                    {isEditable

                    && <svg onClick={removeOneItem} className="remove-item w-5 cursor-pointer fill-current text-brand-orange"
                         xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 20 20"
                         enable-background="new 0 0 20 20">
                        <path
                            d="M16,10c0,0.553-0.048,1-0.601,1H4.601C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H15.4  C15.952,9,16,9.447,16,10z"/>
                    </svg>
                    }
                    <span className="quantity flex-1 cursor-pointer ">{ product.qty }</span>
                    {isEditable
                    && <svg onClick={addOneItem} className="add-item w-5 cursor-pointer fill-current text-brand-orange"
                         xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 20 20"
                         enable-background="new 0 0 20 20">
                        <path
                            d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601  C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399  C15.952,9,16,9.447,16,10z"/>
                    </svg>
                    }
                </div>
                <div className="price flex flex-1 items-center flex-row-reverse">${ product.price.toFixed(2) }</div>
            </div>
            {product.options.allow_instructions && (
                <div onClick={() => setShowInput(true)} className="text-sm italic text-brand-orange">
                    {showInput && isEditable
                    /* <Input id="comment" value={product.options.comment} placeholder="Ej. sin chile" type="text" onChange={() => console.log('hola')} /> */
                      ? <>
                        <input name="comment" type="text" placeholder="Ej. sin chile"
                               autoFocus
                               value={comment}
                               onBlur={updateComment}
                               onChange={validateLength}
                               className="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto lg:w-full" />
                            {error.comment && <p className={'text-sm m-auto text-red-500 error'}>{error.comment}</p>}
                        </>
                      : <span>
                            <i className="far fa-comment-dots mr-1" aria-hidden="true"></i>
                            {comment || (isEditable ? 'Agregar breve comentario' : '')}
                      </span>
                    }
                </div>
            )}
            {/* custtomizable */}
            {product.options.customizable && (
                <div onClick={() => setShowCustomizableInput(true)} className="text-sm italic text-brand-green">
                    {showCustomizableInput && isEditable
                    /* <Input id="comment" value={product.options.comment} placeholder="Ej. sin chile" type="text" onChange={() => console.log('hola')} /> */
                      // ? <Input
                      //       onChange={handleCustomizable}
                      //       value={customMessage}
                      //       id="custom-message"
                      //       label="Deseas personalizar tu pastel? De la forma lo envíes será escrito"
                      //       placeholder="Felicidades Pedro"
                      //       error={error.customizable}
                      //       />
                      ? (
                        <>
                          <input name="custom-message" type="text" placeholder="Felicidades Pedro"
                               autoFocus
                               value={customMessage}
                               onBlur={updateCustomMessage}
                               // onChange={(e) => setCustomMessage(e.target.value)}
                               onChange={handleCustomizable}
                               className="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto lg:w-full" />
                                {error.customizable && <p className={'text-sm m-auto text-red-500 error'}>{error.customizable}</p>}
                        </>
                      )
                      : <span>
                            <i className="fa fa-pencil-alt mr-1" aria-hidden="true"></i>
                            {customMessage || (isEditable ? 'Personalizar pastel (de la forma lo envíes será escrito)' : '')}
                        </span>
                    }
                </div>
            )}
        </div>
  );
}
