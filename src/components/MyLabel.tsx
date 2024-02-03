import './MyLabel.css';

export interface Props {
  /**
   * Text to display
   */
  label: string;

  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * Capitalize all letters
   */
  allCaps?: boolean;

  /**
   * Label color
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

  /**
   * Font color
   */
  fontColor?: string;

  /**
   * Background color
   */
  backgroundColor?: string;
}

export function MyLabel({
  label,
  size = 'normal',
  allCaps = false,
  color,
  fontColor,
  backgroundColor = 'transparent',
}: Props) {
  return (
    <span
      style={{ color: fontColor, backgroundColor }}
      className={`${size} ${color} label`}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
}

export default MyLabel;
