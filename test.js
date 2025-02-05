const fs = require('fs')
const renderSvg = require('lottie-to-svg')
const animationData = JSON.parse(fs.readFileSync('./src/public/animation.json', 'utf8'))
renderSvg(animationData).then((svg) => {
  fs.writeFileSync('my_anim.svg', svg, 'utf8')
})
