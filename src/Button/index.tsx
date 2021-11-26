import React from 'react';
// import './index.scss'
export interface Props {
  /**
   * 按钮文案
   * @description       按钮显示的文字
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           默认值为空
   */
  text?: string;
}

const Button: React.FC<Props> = ({ text = 'btn' }) => <button>{text}</button>;

export default Button;
