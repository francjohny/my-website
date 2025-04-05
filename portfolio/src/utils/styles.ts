export const randomRotation = () => {
  return {
    "--rotation": `${Math.random() * 4 - 2}deg`,
    "--scale": `${Math.random() * 0.2 + 1}`,
  } as React.CSSProperties;
};
