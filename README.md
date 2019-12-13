# vue+ts+elemnt-ui后台管理模板

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
## 配置规则
```
    "indent": [true, "spaces", 4],(开启强制执行一致的空格，强制执行4个空格的缩进)
    "linebreak-style": false,(关闭强制执行一样的换行符\n)
    "no-duplicate-imports": true,(开启禁止统一模块的多个import语句)
    "prefer-const": true,(开启要求变量声明使用const，如果可能的话而不是let和var。如果变量在声明时仅被赋值为一次，则应使用'const'声明它)
    "trailing-comma": false,(关闭数组和和对象中的尾随逗号)
    "align": [true, "statements", "members", "elements"],(开启强制对齐方式：语句、 检查类，接口，类型文字，对象文字和对象解构的成员、数组文字元素)
    "array-type": [true, "generic"],(开启强制Array使用Array<T>)
    "arrow-parens": true,(开启围绕箭头函数定义的参数需要括号)
    "interface-name": [true, "always-prefix"],(开启接口名称以大写I开头)
    "new-parens": true,(开启通过new关键字调用构造函数时需要括号)
     "no-angle-bracket-type-assertion": true,(开启需要使用as Type类型断言而不是<Type>)
     "no-consecutive-blank-lines": true,(开启不允许出现一行或多行空白)
     "no-trailing-whitespace": true,(开启不允许在行尾添加空格尾随)
     "quotemark": [true, "single"],(开启强制使用字符串文字的引号字符：单引号)
     "switch-final-break": [true, "always"],(开启检查switch语句的final子句是否以break)
     "type-literal-delimiter": true,(开启检查类型文字成员是否以分号分隔。为多行类型文字强制使用尾随分号)
     adjacent-overload-signatures": true,(开启函数重载必须连续)
     "no-empty-interface": true,(开启精致空接口)
     "no-debugger": false,(开启可使用debugger，生产环境需要关闭)
     "no-console": false,(开启可使用console，生产环境需要关闭)
     "no-duplicate-super": true,(开启不允许同一构造函数出现两次super())
     "no-duplicate-switch-case": true,(开启switch不允许出现重复的情况)
     "no-duplicate-variable": [true, "check-parameters"], (开启禁止在同一块范围内重复变量声明同时检查变量)
     "no-empty": false,(开启禁止空快)
     "no-eval": true,(开启禁止eval函数使用)
     "no-use-before-declare": true,(开启未申明之前禁止使用变量)
     "no-var-keyword": true,(开启禁止使用var关键字)
     "prefer-object-spread": true,(开启在适当的地方强制使用ES2018对象扩展运算符Object.assign()。)
     "radix": true,(开启调用时需要指定radix参数parseInt。)
     "object-literal-sort-keys": false, (关闭检查对象文字中键的排序。)
     "ordered-imports": false,(关闭要求将import语句按字母顺序排列并进行分组。)
     "no-shadowed-variable": false,(关闭禁止隐藏变量申明)
     "max-line-length": false, (关闭行最大长度限制)
     "whitespace": [true, "check-decl", "check-operator", "check-module", "check-separator", "check-rest-spread", "check-type", "check-typecast", "check-type-operator", "check-preblock"],(开启空格检查)
```