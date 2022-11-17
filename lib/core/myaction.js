var inquirer = require('inquirer')
var config = require('../../config')
var downloadFun = require('./download')
const myaction = async (project, args) => {
    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'framwork',
            choices: config.framwork,
            message: '请选择你所使用的框架'
        }
    ])
    downloadFun(config.foramworkUrl[answer.framwork], project)
}

module.exports = myaction
