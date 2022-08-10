export type ToggleSecProps = {
  checked: boolean;
  onToggle: (T: boolean) => void;
  label?: string;
};

export const ToggleSec = ({
  checked = false,
  onToggle,
  label,
}: ToggleSecProps) => {
  return (
    <div className='form-control'>
      <label className='label cursor-pointer'>
        <span className='label-text'>{label}</span>
        <input
          type='checkbox'
          checked={checked}
          onChange={() => onToggle(!checked)}
          className={'toggle toggle-primary'}
        />
      </label>
    </div>
  );
};
