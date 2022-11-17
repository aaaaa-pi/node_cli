const download = require('download-git-repo')
const chalk = require('chalk')
const ora = require('ora')
const downloadFun = function (url, project) {
    const spinner = ora().start()
    spinner.text = 'loading...'
    download('direct:' + url, project, { clone: true }, (err) => {
        if (!err) {
            spinner.succeed('代码下载成功')
            console.log(chalk.blue.bold('Done!'), chalk.bold('you can run:'))
            console.log('cd ' + project)
            console.log('npm install')
            console.log('npm run dev')
        } else {
            spinner.fail('代码下载失败')
        }
    })
}

module.exports = downloadFun