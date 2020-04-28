import React, { useState, useRef, useEffect } from "react";
import * as Type from "../components/Type";

export default {
  title: "AlphaUI|Type",
};

const TypographyRow = ({ label, Component }) => {
  const node = useRef();
  const [nodeStyle, setNodeStyle] = useState(null);

  useEffect(() => {
    if (!node.current) return
    setNodeStyle(getComputedStyle(node.current))
  }, [node.current]);

  return (
    <tr>
      <td><Component ref={node}>{label}</Component></td>
      { nodeStyle && <>
        <td>{nodeStyle.fontFamily.split(',').shift()}</td>
        <td>{nodeStyle.fontWeight}</td>
        <td>{nodeStyle.fontSize}</td>
        <td>{nodeStyle.textTransform}</td>
        <td>{nodeStyle.letterSpacing}</td></>
      }
    </tr>
  )
}

export const scale = () => {
  const entries = Object.entries(Type)

  return (
    <>
      { Object.entries(Type).map(([label, Component]) => (
          <Component key={`Type-${label}`} value={label} className="aui-p-2 aui-cursor-pointer hover:aui-bg-gray-200" />
      ))}
    </>
  )
}
