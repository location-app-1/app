import { Text } from "@radix-ui/themes";
import Link from "next/link";

import { motion } from "framer-motion";
import { sidenavOpenAtom } from "~/server/lib/stores";
import { useAtom } from "jotai";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface SideNavItemProps {
    label: string;
    icon: React.ReactNode;
    url: string;
}

export default function SideNavItem({ label, icon, url }: SideNavItemProps) {
    const [open] = useAtom(sidenavOpenAtom);
    const pathname = usePathname();

    const inner = (
        <div
            className={clsx(
                "flex w-full flex-row items-center gap-2 rounded-md p-4 text-[--accent-11] transition-all ease-in-out hover:cursor-pointer hover:bg-[--accent-3]",
                !open ? "p-2" : "justify-start pl-8",
                pathname == url ? " shadow-md" : "",
            )}
        >
            <div className={clsx(!open ? "" : "")}>{icon}</div>
            <motion.div
                animate={{
                    opacity: open ? 1 : 0,
                    x: open ? 22 : 0,
                }}
                className="absolute"
            >
                <Text>{label}</Text>
            </motion.div>
        </div>
    );

    return url ? <Link href={url}>{inner}</Link> : inner;
}
