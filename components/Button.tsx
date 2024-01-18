import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";

interface linkType {
    detailsLink: string;
    linkRef: string;
}

export function ButtonLink({detailsLink, linkRef}: linkType) {
  return <Link href={detailsLink} className={buttonVariants({ variant: "default" })}>{linkRef}</Link>

}


