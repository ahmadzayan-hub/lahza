import { Check } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

/**
 * Step indicator for the customise / corporate flows.
 * Below `sm` the labels are hidden, so the current step name is repeated as text.
 */
export function Stepper({ steps, current }: { steps: string[]; current: number }) {
  const { t } = useI18n();
  return (
    <div>
      <p className="mb-2 text-xs font-semibold text-coffee-600 sm:hidden">
        {t("common.step")} {current + 1} / {steps.length}
        <span className="text-coffee-900"> · {steps[current]}</span>
      </p>
      <ol className="flex items-center gap-1 overflow-x-auto pb-1" aria-label={`${t("common.step")} ${current + 1} / ${steps.length}`}>
        {steps.map((label, i) => {
          const state = i < current ? "done" : i === current ? "active" : "todo";
          return (
            <li
              key={label}
              className="flex min-w-0 flex-1 items-center gap-1.5"
              aria-current={state === "active" ? "step" : undefined}
            >
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold transition ${
                  state === "done"
                    ? "bg-gold-500 text-white"
                    : state === "active"
                      ? "bg-coffee-700 text-cream-50 ring-4 ring-coffee-700/15"
                      : "bg-coffee-50 text-coffee-400"
                }`}
              >
                {state === "done" ? <Check className="h-4 w-4" /> : i + 1}
              </span>
              <span
                className={`hidden truncate text-xs font-medium sm:block ${
                  state === "active" ? "text-coffee-900" : "text-coffee-400"
                }`}
              >
                {label}
              </span>
              {i < steps.length - 1 && <span className="h-px flex-1 bg-coffee-100" />}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
