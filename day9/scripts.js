
// Elements


const player = document.querySelector('.player')
const video = document.querySelector('.viewer')
const progress = document.querySelector('.progress')
const progressFilled = document.querySelector('.progress__filled')

const toggle = document.querySelector('.toggle')
const skipButtons = document.querySelectorAll('[data-skip]')
const ranges = document.querySelectorAll('.player__slider')


// Functions


function togglePlay() {
  // video.paused && (!video.paused)
  const method = video.paused ? 'play' : 'pause'
  video[method]()
}

function updateButton() {
  // let icon = this.icon
  const icon = this.paused ? toggle.icon='▶' : toggle.icon='❚❚'
  toggle.textContent = icon
  console.log('update')
}

function skip() {
   video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  video[this.name] = this.value
}

function handleProgressUpdate() {
  // const percentage = video.duration
  // console.log(progress.getBoundingClientRect().left)
  // progressFilled.width = progress.getBoundingClientRect().width
  // video.duration = progressFilled.width / 100 * 330
  const percentage = (video.currentTime / video.duration) * 100
  progressFilled.style.flexBasis = `${percentage}%`
  // console.log(video.currentTime)
}

function scrub(e) {
  // const percentage = (e.offsetX / video.duration) * 100
  // const timePercentage = (percentage / 100) * video.duration
  // progressFilled.style.flexBasis = `${percentage}%`
  // video.currentTime = timePercentage
  // console.log(timePercentage)
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  mouseDown && (video.currentTime = scrubTime)
}


// Events


video.addEventListener('click', togglePlay)
toggle.addEventListener('click', togglePlay)

video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgressUpdate)

skipButtons.forEach(button => button.addEventListener('click', skip))

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))

let mouseDown = false

progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mouse)
progress.addEventListener('mousedown', () => mouseDown = true)
progress.addEventListener('mouseup', () => mouseDown = false)

console.log(skipButtons)