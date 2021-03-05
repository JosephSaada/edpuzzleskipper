speed = 5
video = document.querySelector('video')
Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'playbackRate').set.call(video, speed)
Object.defineProperty(video, 'playbackRate', { writable: false })
