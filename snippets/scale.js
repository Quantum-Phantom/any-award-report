function resize() {
  scale.value = Math.min(innerWidth / 1920, innerHeight / 1080)
}

onMounted(() => {
  resize()
  window.addEventListener('resize', resize)
})
