import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Text = React.forwardRef((props, ref) => {
  const style = {
    lineHeight: 'normal'
  }

  const {
    className,
    fontSize = 'base',
    fontWeight = 'normal',
    tracking = "normal",
    as = 'p',
    value = props.children,
    ...otherProps
  } = props;

  const textClass = classNames(className, 'aui-m-0',
    `aui-text-${fontSize}`,
    `aui-font-${fontWeight}`,
    `aui-tracking-${tracking}`
  );
  console.log(className);
  console.log(textClass);

  Object.assign(otherProps, { style, ref, className: textClass });

  return React.createElement(as, otherProps, value)
})

export const H1 = React.forwardRef((props, ref) => (
  <Text ref={ref} as='h1' fontSize='6xl' fontWeight="light" tracking="widest" {...props} />
))

export const H2 = React.forwardRef((props, ref) => (
  <Text ref={ref} as='h2' fontSize="5xl" fontWeight="light" tracking="wider" {...props} />
))

export const H3 = React.forwardRef((props, ref) => (
  <Text ref={ref} as='h3' fontSize="4xl" fontWeight="normal" tracking="normal" {...props} />
))

export const H4 = React.forwardRef((props, ref) => (
  <Text ref={ref} as='h4' fontSize="3xl" fontWeight="normal" tracking="tighter" {...props} />
))

export const H5 = React.forwardRef((props, ref) => (
  <Text ref={ref} as='h5' fontSize="2xl" fontWeight="normal" tracking="normal" {...props} />
))

export const H6 = React.forwardRef((props, ref) => (
  <Text ref={ref} as='h6' fontSize="xl" fontWeight="medium" tracking="tight" {...props} />
))

export const Subtitle1 = React.forwardRef((props, ref) => (
  <Text ref={ref} fontSize="lg" fontWeight="normal" tracking="tight" {...props} />
))

export const Subtitle2 = React.forwardRef((props, ref) => (
  <Text ref={ref} fontSize="base" fontWeight="medium" tracking="tight" {...props} />
))

export const Body1 = React.forwardRef((props, ref) => (
  <Text ref={ref} fontSize="lg" fontWeight="normal" tracking="normal" {...props} />
))

export const Body2 = React.forwardRef((props, ref) => (
  <Text ref={ref} fontSize="base" fontWeight="normal" tracking="tight" {...props} />
))

export const Button = React.forwardRef((props, ref) => (
  <Text ref={ref} fontSize="base" fontWeight="medium" tracking="tighter" className="aui-uppercase" {...props} />
))

export const Caption = React.forwardRef((props, ref) => (
  <Text ref={ref} fontSize="sm" fontWeight="normal" tracking="tight" {...props} />
))

export const Overline = React.forwardRef((props, ref) => (
  <Text ref={ref} fontSize="xs" fontWeight="normal" tracking="tighter" className="aui-uppercase" {...props} />
))
