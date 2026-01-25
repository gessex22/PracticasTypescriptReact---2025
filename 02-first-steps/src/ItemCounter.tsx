import { useState } from "react";
import styles from './ItemCounter.module.css';

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const hanledSubtract = () => {
    setCount(count - 1);
  };

  return (
    <section className={styles['item-row']}>
      <span
        className={styles.itemText}
        style={{ color: count === 1 ? `blue` : `black` }}
      >
        {" "}
        {name}{" "}
      </span>

      <button
        onMouseEnter={() => {
          console.log(`Mouse enter ${name}`);
        }}
        onClick={handleAdd}
      >
        +1
      </button>
      <span>{count}</span>

      <button onClick={hanledSubtract}> -1</button>
    </section>
  );
};
