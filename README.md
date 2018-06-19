# clean-comments-loader

> To remove the comments in js/css and more (C style comments).

> 可以清除类c注释(字符串中的类似注释的字符不会被清除)

## 安装 Install

`npm i clean-comments-loader -D`

If you got an error `Module build failed: Error: Cannot find module 'loader-utils'`, you need install the package `loader-utils`(just run `npm i loader-utils -D` in the terminal).

## 使用 Usage

```
{
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'clean-comments-loader'
    ]
  }
}
```

## 配置项 Options

- onlyBlock
  - 只清除块级注释 Only clean block comments
  - `Ture` or `False`(default)

- onlyLine
  - 只清楚行内注释 Only clean line comments
  - `Ture` or `False`(default)
