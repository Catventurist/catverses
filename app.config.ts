export default defineAppConfig({
  alpine: {
    title: 'Catverse',
    description: 'Cat-themed blog',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/Cat.svg', // path of the logo
        pathDark: '/wcat.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Cat sit' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: '' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      github: 'Catventurist',
      youtube: '@Catventurist',
      ecency: {
        icon: 'simple-icons:hive-blockchain',
        label: 'Hive',
        href: 'https://ecency.com/@catventurist/posts'
      }
    },
    form: {
      successMessage: 'Done and gone!'
    }
  }
})
