import { images } from "../../constants";

export interface IContactUsData {
    id: string;
    name: string;
    flag: any;
    address: Array<string>,
    senecareNumber: Array<string>;
    email: string;
    office?: Array<string>;
    hoursOfOperation?: Array<string>;
}

export const contactUsData: IContactUsData[] = [
    {
        id: 'CON1',
        name: 'United States',
        flag: images.america,
        address: ["301 S. Main Sapulpa, OK 74066"],
        senecareNumber:["(949) 860-1860"],
        email: 'info@senegence.com',
        office: ["(949) 521-6161 California","(918) 248-1278 Oklahoma"],
        hoursOfOperation: ["Monday - Friday: 5am - 5pm","Saturday: 8am - 12pm","Sunday: Closed"]
    },
    {
        id: 'CON2',
        name: 'Canada',
        flag: images.canada,
        address: ["4750 Tillicum Street","Burnaby, British Columbia V5J 0J1"],
        senecareNumber: ["(833) 363-7856"],
        email: 'canadainfo@senegence.com',
        office: ["(604) 239-2265"],
        hoursOfOperation: ["Monday - Friday: 8am - 5pm"]
    },
    {
        id: 'CON3',
        name: 'Mexico',
        flag: images.mexico,
        address: ["Av. TLC 57-B Parque Industrial Stiva Aeropuerto Apodaca, Monterrey, Nuevo León, 66626"],
        senecareNumber: ["81 2055 0765"],
        email: 'mexicoinfo@senegence.com',
    },
    {
        id: 'CON4',
        name: 'New Zealand',
        flag: images.newzealand,
        address: ["70A Tradecoast Drive Eagle Farm QLD 4009"],
        senecareNumber: ["(949) 860-1860"],
        email: 'newzealandinfo@senegence.com',
        hoursOfOperation: ["Monday - Friday: 9am - 5pm NZST"]
    },
    {
        id: 'CON5',
        name: 'Australia',
        flag: images.australia,
        address: ["70A Tradecoast Drive Eagle Farm QLD 4009"],
        senecareNumber: ["07 3025 2000"],
        email: 'australiainfo@senegence.com',
        office: ["1800-LIPSENSE"],
        hoursOfOperation: ["Monday - Friday: 8am - 5pm"]
    },
    {
        id: 'CON6',
        name: 'Hong Kong',
        flag: images.hongkong,
        address: ["Unit 613, 6/F, Mira Place Tower A, 132 Nathan Road Kowloon, Hong Kong"],
        senecareNumber: ["+852 3892 9088"],
        email: 'hongkonginfo@senegence.com',
        office: ["+852 3892 8232"],
        hoursOfOperation: ["Monday - Friday: 10am - 6pm"]
    },

]