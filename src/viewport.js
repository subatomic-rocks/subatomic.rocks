class Viewport {
  static hook (fn) {
    window.addEventListener('resize', fn)
  }
  static breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
  static width () {
    return window.innerWidth
  }
  static height () {
    return window.innerHeight
  }
  static fits (breakpoint) {
    let breakpointValue = Viewport.breakpoints[breakpoint] || Viewport.breakpoints.xs

    return Viewport.width() >= breakpointValue
  }
  static fitsHeight (height) {
    return Viewport.height() >= height
  }
}

export default Viewport