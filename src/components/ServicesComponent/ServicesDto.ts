export declare interface ServicesDto{
// CardProps: CardProps[]
    backgroundImage?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    image?: string;  
}

export const cardData: ServicesDto[] = [
    {
       title:'Web',
       description: 'Make your vision a reality and put it on the web where it can reach billions of people all over the world.',
       image: '/Web.png',
    },

    {
        title:'Mobile',
        description: 'Put your  solution in the hands of those it will benefit the most, and watch the impact grow round the world.',
        image: '/Cell.png',
     },

     {
        title:'IoT',
        description: 'Utilize the power of “Internet-of-Things” hardware to bring your software process out into the real world.',
        image: '/IoT.png',
     },

     {
        title:'Flows',
        description: 'Transition from analogue workflows to a custom digital base where your business rules can work for you.',
        image: '/Share.png',
     }

]