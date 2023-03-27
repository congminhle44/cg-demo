const pointLightProperties = [
  // pink neon
  { position: [7.7, 2.1, -1.6], color: '#EF4EE0', intensity: 0.8, distance: 6 },
  // orange neon
  { position: [7.7, 2.1, 2.5], color: '#FEC6A0', intensity: 0.8, distance: 6 },
  {
    position: [-6.63, 2.1, -3.4],
    color: '#FEC6A0',
    intensity: 0.8,
    distance: 6
  },
  // blue neon
  { position: [2, 1.5, -3.9], color: '#67EFEA', intensity: 0.8, distance: 6 },
  // Screen light
  {
    position: [-5.5, 1.5, 11.6],
    color: '#4c72ff',
    intensity: 0.8,
    distance: 10
  },
  // Roof light left
  { position: [5.4, 2.1, -1.3], color: '#FFFFFF', intensity: 0.4, distance: 6 },
  // Roof light right
  { position: [5.4, 2.1, 4.2], color: '#FFFFFF', intensity: 0.4, distance: 6 },
  // Hidden kitchen light
  { position: [6.5, 1.5, 7.5], color: '#FFFFFF', intensity: 1, distance: 6 },

  // Wall light
  { position: [-9.6, 1.7, 9.5], color: '#FFFFFF', intensity: 0.5, distance: 5 },
  { position: [-9.6, 1.7, 7.6], color: '#FFFFFF', intensity: 0.5, distance: 5 },
  { position: [-9.6, 1.7, 6], color: '#FFFFFF', intensity: 0.5, distance: 5 },
  { position: [-9.6, 1.7, 4.3], color: '#FFFFFF', intensity: 0.5, distance: 5 },
  { position: [-9.6, 1.7, 2.6], color: '#FFFFFF', intensity: 0.5, distance: 5 }
]

const Pointlights = () => {
  const renderPointLight = () => {
    return pointLightProperties.map((property, index) => {
      return <pointLight key={index} {...property} />
    })
  }
  return <group dispose={null}>{renderPointLight()}</group>
}

export default Pointlights
