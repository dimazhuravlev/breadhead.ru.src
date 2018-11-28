const DESKTOP_WIDTH = 1024
const DESKTOP_SPEED = 400
const MOBILE_SPEED = 130

export const getSwipeSpeed = width =>
  width > DESKTOP_WIDTH ? DESKTOP_SPEED : MOBILE_SPEED
