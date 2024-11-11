import lxgwWenKaiTC from '@next/font/local'

const lxgwFont = lxgwWenKaiTC({
  src: [
    {
      path: '/fonts/LSGWWenKaiTC-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/fonts/LSGWWenKaiTC-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/fonts/LSGWWenKaiTC-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
})

export default lxgwFont
