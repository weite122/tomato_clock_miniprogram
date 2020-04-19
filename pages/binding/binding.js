Page({
  
  data: {
    account: "",
    possword: "",
    isBinding: true
  },
  watchAccount(event){

  },
  watchPassword(event){

  },
  goToSignUp(){
    this.setData({ isBinding: false })
  },
  goToBinding(){
    this.setData({ isBinding: true })
  }
})