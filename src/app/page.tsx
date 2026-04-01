import Image from "next/image"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

/**
 * DESIGNER NOTE: Wise-style dashboard — layout and structure only.
 * All core sections use ShadCN components. Designers can restyle to match Wise UI (colours, typography, spacing).
 *
 * Sections:
 * — Total balance + action buttons (Send, Add money, Request)
 * — Currency account cards (EUR, AUD, CAD, GBP)
 * — Recent transactions list
 * — Footer (Provided by Wise Assets Europe)
 */

const CURRENCY_ACCOUNTS = [
  {
    code: "EUR",
    label: "EUR",
    accountId: "51568",
    balance: "1.00",
    flagSrc: "/assets/flags/eur.png",
    flagAlt: "European Union",
  },
  {
    code: "AUD",
    label: "AUD",
    accountId: "30779",
    balance: "0.00",
    flagSrc: "/assets/flags/aud.png",
    flagAlt: "Australia",
  },
  {
    code: "CAD",
    label: "CAD",
    accountId: "15376",
    balance: "0.00",
    flagSrc: "/assets/flags/cad.png",
    flagAlt: "Canada",
  },
  {
    code: "GBP",
    label: "GBP",
    accountId: "13159",
    balance: "0.00",
    flagSrc: "/assets/flags/gbp.png",
    flagAlt: "United Kingdom",
  },
] as const

const RECENT_TRANSACTIONS = [
  {
    id: "1",
    iconSrc: "/assets/icons/arrow-up.svg",
    name: "Hannah Johnson",
    subtitle: "Sent \u2022 18 Apr",
    amount: "49 EUR",
    isCredit: false,
  },
  {
    id: "2",
    iconSrc: "/assets/icons/plus.svg",
    name: "To EUR",
    subtitle: "Added \u2022 18 Apr",
    amount: "+ 50 EUR",
    subAmount: "50.44 EUR",
    isCredit: true,
  },
  {
    id: "3",
    iconSrc: "/assets/icons/arrow-up.svg",
    name: "Brandon Bolt",
    subtitle: "Sent \u2022 2 Apr",
    amount: "110 EUR",
    isCredit: false,
  },
]

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[976px] flex-1 flex-col gap-[56px] px-6 pb-6 pt-[56px]">
      {/* Total balance + actions */}
      <section className="space-y-4">
        <div className="space-y-0">
           <p className="text-sm font-medium text-muted-foreground">Total balance</p>
           <h2 className="text-3xl font-bold tracking-tight">98.00 EUR</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="default">
            Send money
          </Button>
          <Button size="sm" variant="secondary">
            Add money
          </Button>
              <Button size="sm" variant="secondary" className="gap-1">
                Request money
              </Button>
    </div>
      </section>

      {/* Currency account cards — horizontal row, 12px gap; scrollbar shows on section hover */}
      <section className="group min-w-0 w-full">
        <div className="cards-scroll-x flex gap-3 overflow-x-auto overflow-y-hidden pb-1">
          {CURRENCY_ACCOUNTS.map((account) => (
            <Card key={account.code}>
              <CardHeader className="flex w-full flex-row items-center gap-2 space-y-0 pb-2">
                <Image
                  src={account.flagSrc}
                  alt={`${account.flagAlt} flag`}
                  width={48}
                  height={48}
                  className="size-12 shrink-0 object-cover"
                />
                <CardTitle className="text-base">{account.label}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <p
                  className="flex items-center gap-1.5 text-xs text-muted-foreground"
                  aria-label={`Account ${account.accountId}`}
                >
                  <span
                    className="size-4 shrink-0 bg-grey-400 dark:bg-grey-300"
                    style={{
                      maskImage: `url("/assets/icons/bank.svg")`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskImage: `url("/assets/icons/bank.svg")`,
                      WebkitMaskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                    }}
                    aria-hidden
                  />
                  <span>
                    {"\u2022\u2022 "}
                    {account.accountId}
                  </span>
                </p>
                <p className="text-2xl font-bold">{account.balance}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent transactions */}
      <section className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Transactions</h2>
          <Button variant="ghost" size="md" className="text-brand-green-700 dark:text-brand-green-500 underline" asChild>
            <Link href="/">See all</Link>
          </Button>
        </div>
        <ul>
          {RECENT_TRANSACTIONS.map((tx) => (
            <li key={tx.id} className="flex items-center gap-4 px-4 py-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-grey-300 dark:border-grey-400 bg-card">
                <span
                  className="size-6 shrink-0 bg-grey-600 dark:bg-grey-300"
                  style={{
                    maskImage: `url("${tx.iconSrc}")`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskImage: `url("${tx.iconSrc}")`,
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                  }}
                  aria-hidden
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <p className="font-semibold">{tx.name}</p>
                <p className="text-sm text-muted-foreground">{tx.subtitle}</p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1 text-right align-top">
                <p
                  className={
                    tx.isCredit
                      ? "font-semibold text-brand-green-700 dark:text-primary"
                      : "font-semibold"
                  }
                >
                  {tx.amount}
                </p>
                {tx.subAmount ? (
                  <p className="text-xs text-muted-foreground">{tx.subAmount}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-auto pt-4">
        <p className="text-xs text-muted-foreground">
          Provided by Wise Assets Europe
        </p>
      </footer>
    </div>
  )
}
