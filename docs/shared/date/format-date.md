

# Format
根据传入的占位符返回格式化后的日期。

将字符放在方括号中，即可原样返回而不被格式化替换 (例如， [MM])。
## 类型
```ts

declare function formatDate(value: dayjs.ConfigType, format?: string | 'date'): string;
```
## 示例
```ts
import { formatDate } from '@nk/shared'

const value = new Date()

formatDate(value, 'YYYY-MM-DD') // 2024-03-14

formatDate(value, 'YYYY-MM-DD HH:mm:ss') // 2024-03-14 15:52:00

formatDate('2019-01-25', 'DD/MM/YYYY') // '25/01/2019'

```

## format说明
| 占位符 | 输出             |  详情  |
| ---- |----------------|  ------- |
| YY | 18             |  两位数的年份 |
| M  | 1-12           |  月份，从 1 开始 |
| MM | 01-12          |  月份，两位数 |
| MMM | Jan-Dec        |  缩写的月份名称 |
| MMMM | January-December |  完整的月份名称 |
| D  | 1-31           |  月份里的一天 |
| DD | 01-31          |  月份里的一天，两位数 |
| d  | 0-6            |  一周中的一天，星期天是 0 |
| dd | Su-Sa          |  最简写的星期几 |
| ddd | Sun-Sat        |  简写的星期几 |
| dddd | Sunday-Saturday |  星期几 |
| H  | 0-23           |  小时 |
| HH | 00-23          |  小时，两位数 |
| h  | 1-12           |  小时, 12 小时制 |
| hh | 01-12          |  小时, 12 小时制, 两位数 |
| m  | 0-59           |  分钟 |
| mm | 00-59          |  分钟，两位数 |
| s  | 0-59           |  秒 |
| ss  | 0-59           |  分钟 |
| m  | 00-59          |  秒 两位数 |
| SSS  | 000-999        | 毫秒 三位数 |
| Z  | +05:00         | UTC 的偏移量，±HH:mm |
| ZZ   | +0500          | UTC 的偏移量，±HHmm |
| A   | AM PM           | UTC 的偏移量，±HHmm |
| a   | am pm           | UTC 的偏移量，±HHmm |

