const fs = require('fs')

module.exports = async bot => {
    fs.readdirSync('./commands').filter(f => f.endsWith('.js')).forEach(async file => {
        let command = require(`../commands/${file}`)
        if (!command.name || typeof command.name !== 'string') throw new TypeError(`La command ${file.slice(0, file.length - 3)} n'a pas de nom`)
        bot.commands.set(command.name, command)
        console.log(`command ${file.split('.js').join('')} load`)
    })
}