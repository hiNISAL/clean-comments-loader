# clean-comments-loader

> To remove the comments in js/css/html and more.
> 可以清除类c注释语言的注释(字符串中的类似注释的字符不会被清楚)

## 安装 Install

`npm i clean-comments-loader loader-utils -D`

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

