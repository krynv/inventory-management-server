export default {
    Query: {
        allItems: async (parent, args, { Item }) => {
            // { _id: 123123, name: "whatever"}
            const items = await Item.find();

            return items.map((x) => {
                x._id = x._id.toString();

                return x;
            });
        },
    },
    Mutation: {
        createItem: async (parent, args, { Item }) => {
            // { _id: 123123, name: "whatever"}
            const item = await new Item(args).save();

            item._id = item._id.toString();

            return item;
        },
    },
};
