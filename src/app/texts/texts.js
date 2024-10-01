const title = "Marisol Diseño y Moda";
const slogan = "El arte de vestir a la mujer";
const email = "mabe3gomez@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría recibir más información. ¡Espero su respuesta!`
);
const numeroWhatsApp = "3204321394";
const textos = {
    index: {
        title: `${title}`,
        slogan: `${slogan}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "*Marisol Diseño y Moda* te ofrece ropa y uniformes con un estilo único y moderno, pensado para realzar la belleza femenina.",
        description2: "En *Marisol Diseño y Moda*, nuestra misión es crear prendas que combinen arte y moda, brindando a las mujeres la confianza de lucir impecables. Cada prenda es confeccionada con la máxima atención al detalle y la calidad. Confía en nosotros para encontrar la ropa que mejor se adapte a tu estilo. ¡En *Marisol Diseño y Moda*, vestimos a la mujer con arte!",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Marisol Diseño y Moda",
            p2: slogan,
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/marisol.bernal.161?mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/marisol.bernal.161?igshid=MTBxNndkc2dzbDU3ZQ==",
        tiktok: "https://www.tiktok.com/@marisol.bernal04?_t=8pyaPD1Fxaf&_r=1",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
