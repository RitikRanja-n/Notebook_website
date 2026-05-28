import React from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';

export default function AppButton({
  children,
  variant = 'primary', // 'primary' or 'outline'
  onClick,
  icon,
  size = 'large',
  id,
  style = {},
  block = false,
  className = '',
  animate = true, // Whether to apply framer-motion hover effects
}) {
  const isPrimary = variant === 'primary';

  const defaultHeight = size === 'large' ? 52 : 44;
  const defaultPadding = size === 'large' ? 28 : 20;
  const defaultFontSize = size === 'large' ? 16 : 15;

  const baseStyle = {
    height: defaultHeight,
    paddingInline: defaultPadding,
    fontSize: defaultFontSize,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...style, // Allow overrides from props
  };

  const primaryStyle = {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
    color: '#fff',
    fontWeight: 600,
    boxShadow: '0 4px 12px rgba(37,99,235,0.20)',
    ...baseStyle,
  };

  const outlineStyle = {
    background: 'transparent',
    borderColor: '#2563EB',
    color: '#2563EB',
    fontWeight: 500,
    borderWidth: 1.5,
    ...baseStyle,
  };

  const buttonStyle = isPrimary ? primaryStyle : outlineStyle;

  const btn = (
    <Button
      id={id}
      size={size}
      icon={icon}
      onClick={onClick}
      style={buttonStyle}
      block={block}
      className={className}
      type={isPrimary ? 'primary' : 'default'}
    >
      {children}
    </Button>
  );

  if (animate) {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        style={{ display: block ? 'block' : 'inline-block', width: block ? '100%' : 'auto' }}
      >
        {btn}
      </motion.div>
    );
  }

  return btn;
}
