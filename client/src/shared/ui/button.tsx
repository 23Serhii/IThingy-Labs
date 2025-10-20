import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"

const base =
    "inline-flex items-center justify-center gap-2 select-none whitespace-nowrap " +
    "rounded-lg text-sm font-medium transition-all " +
    "disabled:pointer-events-none disabled:opacity-50 " +
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 " +
    "outline-none focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
    "aria-invalid:ring-2 aria-invalid:ring-destructive/30"

export const buttonVariants = cva(base, {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            soft: "bg-primary/15 text-primary hover:bg-primary/20",
            glass:
                "border border-border/70 bg-background/40 backdrop-blur-sm text-foreground hover:border-primary/50 hover:bg-primary/10",
            outline:
                "border border-border bg-transparent text-foreground hover:border-primary/50 hover:bg-primary/10",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "bg-transparent text-foreground hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        },
        size: {
            default: "h-10 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 px-3 has-[>svg]:px-2.5 text-[13px] rounded-md",
            lg: "h-11 px-6 has-[>svg]:px-5 text-base",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10",
        },
        loading: {
            true: "relative aria-busy:cursor-progress",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
})

type ButtonProps = React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    isLoading?: boolean
}

function Button({
                    className,
                    variant,
                    size,
                    asChild = false,
                    isLoading = false,
                    children,
                    ...props
                }: ButtonProps) {
    const classes = cn(
        buttonVariants({
            variant,
            size,
            loading: isLoading ? true : undefined,
            className,
        })
    )

    // Якщо asChild = true, не додаємо спінер (щоб <Slot> мав рівно одного child)
    if (asChild) {
        return (
            <Slot data-slot="button" className={classes} aria-busy={isLoading || undefined} {...props}>
                {children}
            </Slot>
        )
    }

    // Звичайна кнопка: можна безпечно додати спінер
    return (
        <button data-slot="button" className={classes} aria-busy={isLoading || undefined} {...props}>
            {isLoading && (
                <span className="mr-1 inline-flex items-center" aria-hidden="true">
          <svg className="animate-spin size-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
                className="opacity-90"
                d="M22 12a10 10 0 0 1-10 10"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
            />
          </svg>
        </span>
            )}
            {children}
        </button>
    )
}

export { Button }
