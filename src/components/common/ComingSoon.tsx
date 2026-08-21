import comingSoonSvg from '../../assets/images/coming_soon.svg?raw'

interface ComingSoonProps {
    className?: string
}

const ComingSoon = ({className}:ComingSoonProps) => {
    const themedSvg = comingSoonSvg.replaceAll(
    "#6c63ff",
    "var(--ant-color-primary)",
  );
  return (
    <div
      className={`coming-soon ${className}`}
      dangerouslySetInnerHTML={{
        __html: themedSvg,
      }}
    />
  )
}

export default ComingSoon