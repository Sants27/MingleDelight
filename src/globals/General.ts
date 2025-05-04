import { GlobalConfig } from "payload";

export const General : GlobalConfig = {
    slug: 'general',
    fields: [
        {
            name: 'logo',
            type: 'upload',
            relationTo: "media",     
        },
        {
            name: 'about',
            type: 'upload',
            relationTo: "media", 
        },
    ]
}