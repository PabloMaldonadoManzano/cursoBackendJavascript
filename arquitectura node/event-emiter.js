const EventEmmiter = require('events');

class Logger extends EventEmmiter {
    execute(cb){
        console.log('Before')
        this.emit('start')
        cb()
        this.emit('finish')
        console.log('after')
    }
}

const logger = new Logger()

logger.on('start', () => console.log('Starting'))
logger.on('finish', () => console.log('Finishing'))
logger.on('finish', () => console.log('Finishing'))

logger.execute(() => console.log("hello world"))