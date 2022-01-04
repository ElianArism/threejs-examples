// Option 1: Import the entire three.js core library.
import * as THREE from "https://cdn.skypack.dev/three@0.136.0"

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x2a3b4c)

// niebla en todos los objetos
scene.fog = new THREE.Fog("violet", 3, 10)

// texturas / background del Scene
const loader = new THREE.TextureLoader()
const url =
  "https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1920&w=1280"
loader.load(url, (texture) => {
  scene.background = texture
})
// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)

// Renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

// insert renderer in html
document.body.appendChild(renderer.domElement)

// add geometry to display in Scene
const geometry = new THREE.BoxGeometry()
// const material = new THREE.MeshBasicMaterial({ color: 0xa83432, wireframe: true })
const material = new THREE.MeshBasicMaterial({ color: 0xa83432 })
const cube = new THREE.Mesh(geometry, material)

// add geometry to Scene
scene.add(cube)

// Change camera position to show geometry
camera.position.z = 5

// recursive animation
const animate = () => {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera) // render in the canvas
}

// start animation
animate()
