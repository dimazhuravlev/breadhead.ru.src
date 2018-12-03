export default class RotateHelper {
  params = {}
  
  constructor(params) {
    this.setParams(params)
    return this;
  }
  
  setParams(params) {
    this.params = Object.assign(this.params, params)
  }

  checkBoundaries() {
    const selectedOrder = this.getOrder(this.params.next);
    return (this.getOrder(this.params.next - 1) < selectedOrder) &&
           (this.getOrder(this.params.next + 1) > selectedOrder)
      
  }

  getDiff() {
    
    if (!this.params.width) return 0
    
    if (!this.checkBoundaries()) {
      
      this.params.diff = this.rotateNumber(this.params.diff + Math.round(this.params.count / 4 * (2 + this.params.direction))  )
    }
    return this.params.diff
  }
  
  getOrder(n) {
    return this.rotateNumber(n + this.params.diff)
  }
  
  rotateNumber(n) {
    return (n + this.params.count) % this.params.count
  }

}

