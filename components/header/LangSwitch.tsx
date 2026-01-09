"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Switch } from "../ui/switch";
import { usePathname, useRouter } from "@/i18n/navigation";

const LangSwitch = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const checked = locale === "en";

  const onCheckedChange = (nextChecked: boolean) => {
    const newLocale = nextChecked ? "en" : "hr";
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  const activeGlow = "drop-shadow-[0_0_10px_rgba(34,197,94,0.55)]";

  return (
    <div className="flex items-center gap-3 mr-4 select-none">
      {/* HR */}
      <Image
        src="/assets/flags/hr.svg"
        alt="Hrvatski"
        width={22}
        height={22}
        className={`rounded-full transition-all ${
          !checked ? activeGlow : "opacity-40"
        }`}
      />

      <Switch
        id="language-mode"
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={isPending}
        className="data-[state=checked]:bg-emerald-500/25"
      />

      {/* EN */}
      <Image
        src="/assets/flags/gb.svg"
        alt="English"
        width={22}
        height={22}
        className={`rounded-full transition-all ${
          checked ? activeGlow : "opacity-40"
        }`}
      />
    </div>
  );
};

export default LangSwitch;