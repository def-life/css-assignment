// TODO: best thing should be basically to have all my svg in the assets folder and then create a react component for each svg unlike here i have used image rather use svg paths as with that i can have more customization. skipped for now.

const SvgImage = ({ src, size = 24, alt = "svg image" }: { src: string; size?: number; alt?: string }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="svg-image"
    />
  );
};

export default SvgImage;