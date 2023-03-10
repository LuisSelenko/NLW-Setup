interface ProgressBarProps {
  progress: number;
}
export function Progressbar({ progress }: ProgressBarProps) {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        className="h-3 rounded-xl bg-violet-600 transition-all"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={progress}
      />
    </div>
  );
}
