import React from 'react';
// import ReactDOM from 'react-dom';
import Layout from "../Shared/Layout";
// import styled from "styled-components";

// const TwoColumns = styled.div `
//     column-count: 2;
// `


function TermsConditions(props) {
    return (
        <Layout title="Terminos y Condiciones">
            <div className="flex items-center flex-col mt-12 sm:mt-16 px-8">
                <img className="h-64 mb-10" src="/images/ConchaJuez.png" alt=""/>
                <div className="text-center m-8">
                    <h2>Aviso de Privacidad</h2>
                    <h3>Pagina web panadería la especial</h3>
                </div>
                <div className="text-justify pb-16">
                    Ultima actualización 1 de septiembre de 2020.<br/><br/>

                    Los datos personales que usted nos ha proporcionado directamente o a través de medios electrónicos han sido recabados y serán tratados, bajo los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad, de conformidad con lo dispuesto por la Ley.<br/><br/>

                    ¿Para qué fines recabamos y utilizamos sus datos personales?<br/>
                    Proveer los servicios y productos requeridos por usted; Dar cumplimiento a obligaciones contraídas con nuestros clientes; Evaluar la calidad de nuestros productos y servicios; Elaborar facturas y/o documentos legales que aparan los productos o servicios contratados; Envío de correo electrónico con información y publicidad propia y de terceros; Notificarle nuestras promociones y otra información relacionada con nuestros productos y servicios. También utilizamos esta información personal para darle a usted información relacionada con productos y servicios que usted haya adquirido, para entender mejor sus necesidades e intereses, para mejorar nuestro servicio y para personalizar comunicaciones y su experiencia en la red.<br/><br/>

                    Adicionalmente, sus datos personales pueden ser utilizados para las siguientes finalidades:<br/>
                    •	Dar seguimiento a solicitudes de información sobre los servicios y/o productos que nuestra empresa oferta.<br/>
                    •	Realizar cotizaciones y enviarle propuestas de trabajo en base a la información que nos proporciona mediante los formularios del sitio web.<br/>
                    •	Dar avisos urgentes o importantes sobre algún tema relacionado con nuestro sitio web, servicios y/o productos contratados con nuestra empresa.<br/>
                    •	Proveer información varia.<br/>
                    •	Realizar los servicios y/o entregar los productos que usted contrató con nuestra empresa.<br/>
                    •	Informar sobre cambios y nuevos productos y/o servicios que estén relacionados con el/los contratado(s) o adquirido(s) por el cliente.<br/>
                    •	Dar cumplimiento a obligaciones contraídas con nuestros clientes.<br/>
                    •	Evaluar la calidad del servicio y, realizar estudios internos sobre hábitos de consumo.<br/>
                    •	Envío de promociones por correo electrónico en diferentes periodos.<br/><br/>

                    Sus datos personales se mantendrán en nuestros registros durante 5 años a partir de la fecha en que nos proporcionó, después procederemos a eliminar su información si no se llega a ninguna transacción comercial o vínculo laboral.<br/><br/>

                    ¿Qué datos personales obtenemos y de dónde?<br/>
                    Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos personales de distintas formas: cuando usted nos los proporciona directamente, cuando visita nuestro sitio de Internet o utiliza nuestros servicios en línea, y cuando obtenemos información a través de otras fuentes que están permitidas por la ley.<br/><br/>

                    Datos que recabamos de forma directa<br/>
                    Recabamos sus datos personales de forma directa cuando usted mismo nos los proporciona por diversos medios, como cuando participa en nuestras promociones o nos da información con objeto de que le prestemos un producto y/o servicio. Los datos y/o información que obtenemos por este medio pueden ser, entre otros:<br/>
                    •	Nombre completo, dirección completa, teléfono fijo (Casa u Oficina), teléfono celular, correo electrónico, datos destinados para realizar facturas, entre otros.<br/>
                    Sus datos personales serán recopilaos en nuestra página web, en nuestras sucursales físicas, matriz, oficina, por correo electrónico y/o vía telefónica.<br/><br/>

                    {/*    compartir datos a terceros */}
                    Compartir Datos con Terceros.<br/>
                    Si usted es nuestro cliente, puede dejar de recibir mensajes promocionales, comunicárnoslo ya sea por teléfono fijo o celular, correo directo y/o electrónico a panaderialaespecial.veracruz@gmail.com o directamente en cualquiera de nuestras sucursales por medio de una solicitud por escrito, o al teléfono 2299 34 1880.<br/><br/>
                    ¿Panadería La Especial comparte su Información? Nos comprometemos a no transferir su información personal a terceros sin su consentimiento, salvo solicitud expresa de alguna autoridad competente o las excepciones previstas en el artículo 37 de la LFPDPPP, así como realizar esta transferencia en los términos que fija esa Ley.<br/><br/>
                    Transferencia de datos personales.- En caso de que Panadería La Especial llegare a transferir tus datos personales a alguno de sus proveedores con el fin de llevar a cabo las finalidades del tratamiento establecidas en el presente aviso de privacidad, lo hará previa celebración de convenios de confidencialidad y, siempre y cuando,<br/>
                    (1)	El proveedor o persona a quien se le transmitan acepte someter el tratamiento de los datos personales al presente aviso de privacidad, y,<br/>
                    (2)	No se trate de alguno de los supuestos establecidos en el artículo 37 de la Ley.<br/><br/>

                    {/*Modificaciones al aviso de privacidad*/}
                    Modificaciones al aviso de privacidad<br/>
                    Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, para la atención de novedades legislativas, políticas internas o nuevos requerimientos para la presentación u ofrecimiento de nuestros servicios o productos. Las modificaciones estarán disponibles al público mediante:<br/>
                    (i)	Anuncios visibles en nuestras sucursales,<br/>
                    (ii)	Trípticos o folletos disponibles en nuestras sucursales,<br/>
                    (iii)	En nuestra página de internet  en la sección de aviso de privacidad; o<br/>
                    (iv)	Se las haremos llegar al último correo electrónico que nos haya proporcionado.<br/><br/>

                    {/*Derechos arco*/}
                    Derechos  ARCO<br/>
                    Conforme a la Ley Federal de Protección de Datos Personales en Posesión de Particulares, son los derechos que toda persona puede ejercer en relación con el tratamiento de sus datos personales. Casa sigla representa un derecho diferente y son Acceso, Rectificación, Cancelación y Oposición.<br/>
                    Usted puede dejar de recibir mensajes promocionales por teléfono fijo o celular, así mismo, puede dejar de recibir correo postal publicitario, también puede dejar de recibir correos electrónicos con promocionales.<br/><br/>
                    Usted tiene derecho a acceder a sus datos personales que poseemos y a los detalles del tratamiento de los mismos, así como rectificar en caso de ser inexactos o incompletos; cancelarlos cuando considere que no se requieren para alguna de las finalidades señaladas en el presente aviso de privacidad, estén siendo utilizados para finalidades no consentidas o haya finalizado la relación contractual  o de servicio, o bien, oponerse al tratamiento de los mismos para fines específicos.<br/><br/>
                    Usted podrá en cualquier momento revocar el consentimiento que ha otorgado a Panadería La Especial SA de CV, para el tratamiento de sus datos personales, limitar el uso o divulgación de los mismos y ejercer sus Derechos ARCO previstos en la Ley, para ellos, es necesario que realice su petición en la dirección electrónica que proporcionamos y en un plazo máximo de 20 días atenderemos su petición y le informaremos sobre la procedencia de la misma a través de un mensaje de correo electrónico o el medio que nos indique.<br/><br/>
                    Si tiene alguna pregunta respecto al manejo de sus datos personales, puede comunicarse al 2299 341880 en un horario de 10:00 AM a 3:00 PM de lunes a sábado.<br/>
                    Al hacer uso de nuestro servicio en línea, usted acepta de conformidad este aviso de privacidad.<br/><br/>


                </div>
                {/*<TwoColumns className="text-justify">*/}
                {/*    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut*/}
                {/*    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation*/}
                {/*    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor*/}
                {/*    in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at*/}
                {/*    vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis*/}
                {/*    dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil*/}
                {/*    imperdiet doming id quod mazim placerat facer possim assum.*/}
                {/*</TwoColumns>*/}
            </div>
        </Layout>
    );
}

export default TermsConditions;
