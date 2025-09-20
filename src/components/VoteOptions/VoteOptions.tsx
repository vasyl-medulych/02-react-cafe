import css from "./VoteOptions.module.css";
import type { Votes } from "../../types/votes";

type VoteOptionsProps = {
  onVote: (key: keyof Votes) => void;
  onReset: () => void;
  canReset: boolean;
};

function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button onClick={() => onVote("good")} className={css.button}>
        Good
      </button>
      <button onClick={() => onVote("neutral")} className={css.button}>
        Neutral
      </button>
      <button onClick={() => onVote("bad")} className={css.button}>
        Bad
      </button>
      {canReset && (
        <button onClick={onReset} className={`${css.button} ${css.reset}`}>
          Reset
        </button>
      )}
    </div>
  );
}

export default VoteOptions;
