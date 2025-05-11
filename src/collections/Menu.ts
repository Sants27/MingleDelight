import { CollectionConfig } from "payload";
import slugify from "slugify";

export const Menu : CollectionConfig = {
    slug: 'menus',
    fields: [
        {
            name: 'image',
            type: 'upload',
            relationTo: "media",
            required: true,
        },
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "slug",
            type: "text",
            required: true,
            admin: {
                readOnly: true, // tidak bisa diubah manual
            },
        },
        {
            name: "type",
            type: "select",
            options: [
                {
                    label: "Coffee",
                    value: "coffee"
                },
                {
                    label: "Non-Coffee",
                    value: "non-coffee"
                },
            ]
        },
        {
            name: "promo",
            type: "select",
            options: [
                {
                    label: "Yes",
                    value: "yes"
                },
                {
                    label: "No",
                    value: "no"
                },
            ]
        },
        {
            name: "priceBefore",
            type: "number",
            label: "Price Before",
            required: true,
            admin: {
              condition: (data) => data?.promo === "yes"
            }
        },
        {
            name: "priceAfter",
            type: "number",
            label: "Price After",
            required: true,
            admin: {
            condition: (data) => data?.promo === "yes"
            }
        },
        {
            name: "price",
            type: "number",
            label: "Price",
            required: true,
            admin: {
              condition: (data) => data?.promo === "no"
            }
        },
        {
            name: "description",
            type: "textarea",
            required: true,
        },       
    ],
    hooks: {
        beforeValidate: [
            ({ data }) => {
              if (data?.title && !data.slug) {
                data.slug = slugify(data.title, { lower: true, strict: true });
              }
              return data;
            }
        ],
    },
};