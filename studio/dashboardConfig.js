export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '613abf309f28181cc52093e3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mzoegjzb',
                  apiId: '83db4312-92d4-4469-b89e-05adc64c71a4'
                },
                {
                  buildHookId: '613abf30eed23721d27ed8c5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-trckaerf',
                  apiId: '4cdf5f12-233c-4e9f-8cc9-6e51bc5e2b28'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/atmosquareinc/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-trckaerf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
