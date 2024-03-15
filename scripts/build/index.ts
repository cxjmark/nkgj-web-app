import inquirer from 'inquirer'
import { execaCommand } from 'execa'
import { magentaBright, bold } from 'colorette'

const packageKeys = ['shared', 'vue-components']
inquirer
  .prompt([
    {
      type: 'list',
      message: `选择要打包的包名：`,
      name: 'mono', // 存储答案的字段
      default: packageKeys[0], // 默认启动项
      choices: packageKeys.map((key) => {
        // 选择
        return { name: key, value: key }
      }),
    },
  ])
  .then(({ mono: prd }) => {
    const name = packageKeys.find((v) => v == prd)
    console.log(`>>> 当前包名：${bold(magentaBright(name))}`)

    const cmd = `pnpm --F @nk/${name} run build`

    let envVars = {
      selectedProject: name,
      product: prd,
      // project: project.projectKey,
      // isLocal,
    }

    execaCommand(cmd, { stdio: 'inherit', env: envVars })
  })
  .catch((err) => {
    console.log('error', err)
  })
