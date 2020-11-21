import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import posed from 'react-pose';
import Layout from '../Shared/Layout';
import Input from '../components/Input';


const Box = posed.div({
  visible: { opacity: 1, transform: 'scale(1)' },
  hidden: { opacity: 0, transform: 'scale(0.5)' },
});

function Product(props) {
  const { product } = props;
  const [animate, setAnimate] = useState('visible');
  const [disabled, setDisabled] = useState(false);
  const [productId] = useState(product.id);
  const [comment, setComment] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState({
    comment: false,
    customizable: false,
  });

  const addToCart = (event) => {
    // event.preventDefault();
    addToCardAnimation();
    setAnimate('hidden');
    setDisabled(true);
    // made animation
    // setTimeout(() => Inertia.visit('/'), 2000);
    setTimeout(() => {
      setAnimate('visible');
      setDisabled(false);
      Inertia.post('/cart', {
        product_id: productId,
        comment,
        quantity,
        custom_message: customMessage,
      });
    }, 2000);
  };
  const addToCardAnimation = (cb) => {
    const cart = $('#charola');
    const imgtodrag = $('#main-image');
    if (imgtodrag) {
      const imgclone = imgtodrag
        .clone()
        .offset({
          top: imgtodrag.offset().top,
          left: imgtodrag.offset().left,
        })
        .css({
          opacity: '0.7',
          position: 'absolute',
          height: 'initial',
          // height: '150px',
          // width: '150px',
          width: 'initial',
          'z-index': '100',
        })
        .appendTo($('body'))
        .animate(
          {
            top: cart.offset().top + 10,
            left: cart.offset().left + 15,
            width: 75,
            height: 75,
          },
          1000,
          // 1000000,
          'easeInOutExpo',
        );

      setTimeout(() => {
        cart.effect(
          'bounce',
          {
            times: 2,
          },
          600,
        );
      }, 1500);

      imgclone.animate(
        {
          width: 0,
          height: 0,
        },
        function () {
          $(this).detach();
          /*
                    cb().then(() => {
                        Router.back();
                    });
                    */
        },
      );
    }
  };

  const validateLength = (e) => {
    const { value } = e.target;
    if (value.length < 120) {
      setComment(e.target.value);
      setError({
        ...error,
        comment: false,
      });
      setDisabled(false);
    } else {
      setDisabled(true);
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
      setDisabled(false);
    } else {
      setDisabled(true);
      setError({
        ...error,
        customizable: [
          'Máximo 25 caracteres',
        ],
      });
    }
  };
  return (
        <Layout title={product.name}>
            <div className="flex flex-col mt-12 sm:mt-16 sm:flex-row">
                {/* Back button */}
                <div className="flex flex-col">
                    <svg onClick={() => window.history.back()} className="w-8 h-8 mb-4 ml-4 text-lg sm:w-16 cursor-pointer" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </div>
                {/* Product */}
                <div className="flex flex-col pb-16 md:flex-row md:w-11/12 md:m-0 md:mb-6">
                    {/* Image */}
                    <Box pose={animate} className="bg-brand-gray sm:w-2/3 sm:m-auto md:m-0 md:4/6 md:flex-1 md:h-64 lg:h-full">
                        <img
                            className="h-56 m-auto w-full object-scale-down align-middle sm:h-full sm:object-cover md:h-64 lg:h-full"
                            src={product.image_path} alt={product.name} id="main-image"/>
                    </Box>
                    {/* Information */}
                    <div className="flex flex-col m-5 md:flex-1 lg:ml-24 lg:mt-0">
                        {/* Name | Price */}
                        <div className="flex-1 sm:text-center text-gray-700 font-medium uppercase lg:text-justify">
                            {/* Name */}
                            <div className="first-letter-bigger text-center lg:text-justify">{product.name}</div>
                            {/* Price */}
                            <div className="mt-2 text-lg">
                                <span>{product.formatPrice}</span>
                                <span className="text-xs align-top">p/p</span>
                            </div>
                        </div>
                        {/* Description */}
                        <div className="mt-4 flex-1 text-gray-600 font-light sm:text-center lg:text-justify">{product.description}</div>
                        {/* Ingredients */}
                        {product.ingredients && product.allow_ingredients
                            && <div className="flex-1 mt-4 sm:text-center lg:text-justify">
                                <p className="uppercase font-medium text-sm first-letter-bigger text-orange-600">ingredientes</p>
                                <ul className="font-light text-gray-600 font-light">
                                    {product.ingredients.split(',').map((ingredient) => <li>- {ingredient}</li>)}
                                </ul>
                            </div>
                        }
                        {/* Specifications */}
                        {product.allow_instructions
                            && <div className="flex-1 mt-5 font-light text-sm text-gray-600 sm:text-center lg:text-justify">
                                {/* <p className="hover:border-grey-900 italic">Si no deseas algún ingrediente, */}
                                {/*    especifícalo:</p> */}
                                {/* <input value={comment} type="text" placeholder="Ej. sin picante" onChange={validateLength} */}
                                {/*       className="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto"/> */}
                                {/* {error && <p className="text-sm text-red-500 error hour">{error}</p>} */}
                                <Input
                                    onChange={validateLength}
                                    value={comment}
                                    id="comment"
                                    label="Si no deseas algún ingrediente, especifícalo:"
                                    placeholder="Ej. sin picante"
                                    error={error.comment}
                                />
                            </div>
                        }
                        {/* Customizable */}
                        {product.customizable
                                && <Input
                                    onChange={handleCustomizable}
                                    value={customMessage}
                                    id="custom-message"
                                    label="Deseas personalizar tu pastel? De la forma lo envíes será escrito"
                                    placeholder="Felicidades Pedro"
                                    error={error.customizable}
                                />
                        }
                        {/* Qty. */}
                        {/*<div*/}
                        {/*    className="flex-1 mt-5 font-light text-sm text-gray-600 sm:text-center sm:w-1/3 sm:m-auto lg:text-justify lg:m-0">*/}
                        {/*    <p className="hover:border-grey-900 italic">Cantidad:</p>*/}
                        {/*    <input name="quantity" type="number" min="1" placeholder="Cantidad" value={quantity} onChange={(e) => setQuantity(e.target.value)}*/}
                        {/*           className="border border-transparent rounded mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1" />*/}
                        {/*</div>*/}
                        <Input
                            onChange={(e) => setQuantity(e.target.value)}
                            value={quantity}
                            id="quantity"
                            label="Cantidad:"
                        />

                        {/* Button (Poner en la charola). */}
                        <div
                            className="flex-1 mt-5 font-light text-sm text-gray-600 sm:text-center sm:text-base lg:text-justify">
                            <button
                                onClick={addToCart}
                                className="w-full bg-orange-500 hover:bg-brand-orange focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded sm:w-1/3 sm:m-auto lg:m-0 md:w-1/2"
                                disabled={disabled}
                            >
                                Poner en la charola
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
  );
}

export default Product;
