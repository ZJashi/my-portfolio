import Image from "next/image";
import { motion } from "framer-motion";
import { socialLinks } from "@/lib/profile";
import { slideUp } from "@/lib/animations";
import styles from "./SidebarProfile.module.css";

export function SidebarProfile() {
  return (
    <div className={styles.wrapper}>
      <motion.div {...slideUp} transition={{ duration: 0.6 }}>
        <div className={styles.imageOuter}>
          <div className={styles.imageGlow} />
          <div className={styles.imageInner}>
            <Image
              src="/profile.jpg"
              alt="Zura Jashi"
              fill
              sizes="96px"
              className={styles.profileImg}
              priority
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        {...slideUp}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={styles.nameBlock}
      >
        <h1 className={styles.name}>Zura Jashi</h1>
        <p className={styles.role}>
          AI Engineer{" "}
          <a
            href="https://www.cityfootballgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.companyLink}
          >
            @CFG
          </a>
        </p>
      </motion.div>

      <motion.div
        {...slideUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={styles.socialLinks}
      >
        {socialLinks.map(({ label, href, icon: Icon }) => {
          const external = href.startsWith("http");
          return (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={styles.socialLink}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </motion.div>
    </div>
  );
}
