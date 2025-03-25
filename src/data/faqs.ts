export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: "Tenemos Servicios de impresion todo incluido?",
                answer: "Si, nuestro servicios todo incluido le quitara la carga de tener que preocuparse por los suministros de impresion, mantenimiento y soporte tecnico."
            },
            {
                question: "Ejemplo de pregunta frecuente 2",
                answer: "respuesta 2"
            },
            {
                question: "Ejemplo de pregunta frecuente 3",
                answer: "respuesta 3"
            },
            {
                question: "Ejemplo de pregunta frecuente 4",
                answer: "respuesta 4"
            },
            {
                question: "Ejemplo de pregunta frecuente 5",
                answer: "respuesta 5"
            }
        ]
    }
};
