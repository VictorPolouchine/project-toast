import React from 'react';

function VariantInput({ variant, variantSelected, setVariantSelected }) {
  return (
    <label htmlFor={variant}>
      <input
        id={variant}
        type="radio"
        name="variant"
        value={variant}
        checked={variantSelected === variant}
        onChange={({target}) => {setVariantSelected(target.value)}}
      />
      {variant}
    </label>
  )
}

export default React.memo(VariantInput);
