const container = {
  show: {
    transition: {
      delayChildren: .25,
      staggerChildren: .1,
    }
  }
}

const item = {
  hidden: { 
    opacity: 0,
    y: -50
   },
  show: { 
    opacity: 1 ,
    y: 0
  }
}

export { container, item }