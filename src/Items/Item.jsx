/* eslint-disable react/prop-types */
import { FormButton } from '../components/Form/FormControl';

export default function Item({ items, onBuy, onRemove }) {
  const { qty, description } = items;

  return (
    <li>
      {qty} {description}
    </li>
  );
}
