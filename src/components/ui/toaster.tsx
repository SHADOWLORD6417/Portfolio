import { useToast } from "./use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col gap-2 p-4">
      {toasts.map(({ id, title, description, action }) => (
        <div
          key={id}
          className="rounded-lg border bg-background p-4 shadow-lg"
        >
          {title && <div className="font-semibold">{title}</div>}
          {description && (
            <div className="text-sm text-muted-foreground">
              {description}
            </div>
          )}
          {action}
        </div>
      ))}
    </div>
  )
}
