const path = require(`path`);

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;
    const result = await graphql(`
    {
      allMysqlShoppingList {
        edges {
          node {
            id
            photo_1
            photo_2
            photo_3
            price
            title
            mysqlId
          }
        }
      }
    }
  `);

    if (result.errors) {
        throw new Error(result.errors)
    }

    const {allMysqlShoppingList} = result.data

    allMysqlShoppingList.edges.forEach(edge => {
        createPage({
            path: "item_" + edge.node.mysqlId,
            component: path.resolve(`./src/templates/item.js`),
            context: {
                id: edge.node.mysqlId,
            },
        });
    });
};