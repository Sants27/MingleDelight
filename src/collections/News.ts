import { CollectionConfig } from "payload";
// import slugify from "slugify";

export const News : CollectionConfig = {
    slug: 'news',
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "slug",
            type: "text",
            required: true,
            // admin: {
            //     readOnly: true, // tidak bisa diubah manual
            // },
        },
        {
            name: 'cover',
            type: 'upload',
            relationTo: "media",
            required: true,
        },
        {
            name: "description",
            type: "textarea",
            required: true,
        },
        {
            name: "content",
            type: "richText",
            required: true,
        },
        // {
        //     name: "date",
        //     type: "date",
        //     required: true,
        //     admin: {
        //         date: {
        //             pickerAppearance: 'dayOnly',
        //         },
        //     },
        // },
    ],
    // hooks: {
    //     beforeValidate: [
    //         ({ data }) => {
    //             if (data?.title && !data.slug) {
    //                 data.slug = slugify(data.title, { lower: true, strict: true });
    //             }
    //             return data;
    //         }
    //     ],
    // },
};