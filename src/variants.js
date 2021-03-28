const stagger = {
  show: {
    transition: {
      staggerChildren: .08,
    }
  }
}

const down = {
  hidden: { 
    opacity: 0,
    y: -50
   },
  show: { 
    opacity: 1,
    y: 0
  },
}

const up = {
  hidden: { 
    opacity: 0,
    y: 50
   },
  show: { 
    opacity: 1,
    y: 0
  }
}

const slowUp = {
  hidden: { 
    opacity: 0,
    y: 50
   },
  show: { 
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: .5,
    }
  }
}

function copy(obj) { //TODO: delete me if not used
  return JSON.parse(JSON.stringify(obj))
}

export { stagger, down, up, slowUp, copy }