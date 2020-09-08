const path = require(`path`)

exports.onCreatePage = async ({page, actions}) => {
    const {createPage} = actions
    if (page.path.match(/^\/calendar/)) {
        page.matchPath = "/calendar/*"
        createPage(page)
    }
    if (page.path.match(/^\/app/)) {
        page.matchPath = "/app/*"
        createPage(page)
    }
    if (page.path.match(/^\/materials/)) {
        page.matchPath = "/materials/*"
        createPage(page)
    }
}

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions
    return graphql(`
    query {    
       allStrapiLeaderPage {
        edges {
          node {
           imie
            nazwisko
            motto
            tekst
                obraz {
              url
            }
          }
        }
      }
      allStrapiMaterial {
        edges {
          node {
            id
            title
            description
      
          }
        }
      }
    }
  `).then(res => {
        const materials = res.data.allStrapiMaterial.edges;

        const leaderPages = res.data.allStrapiLeaderPage.edges;

        leaderPages.forEach(leaderPage => {
            const l = leaderPage.node;
            const fullName = `${l.imie}-${l.nazwisko}`

            createPage({
                path: `/${fullName}`,
                component: path.resolve(`./src/templates/leaderPage.js`),
                context: l
            })
        })

        materials.forEach(material => {
            const m = material.node;
            createPage({
                path: `/materials/${m.id}`,
                component: path.resolve(`./src/templates/material.js`),
                context: m
            })
        })
    });
}

