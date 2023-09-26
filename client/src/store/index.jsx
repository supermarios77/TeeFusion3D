import { proxy } from 'valtio';

const state = proxy({
    intro: true, // This means if we are currently on the home page or not
    color: '#EFBD48', // default color
    isLogoTexture: true, // This means are we currently displaying the logo on our shirt
    isFullTexture: false, 
    logoDecal: './threejs.png', // Default logo before the user adds thier own
    fullDecal: './threejs.png' // Same as above
})

export default state