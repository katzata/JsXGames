import { useEffect, useRef } from "react";
import styles from "./Article.module.scss";
import { Props } from "./types";

/**
 * Creates a separate elements for the title and text.
 * The child prop get rendered directly to the article element.
 */
const Article = ({ title, text, scrollOffset, getScrollOffset, children }: Props): JSX.Element => {
    const articleRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        // @ts-expect-error
        if (articleRef.current && Number(scrollOffset) !== NaN && scrollOffset !== articleRef.current.scrollTop) {
            articleRef.current.scrollTo(0, scrollOffset!);
        };
    }, [scrollOffset]);

    return <article
        ref={articleRef}
        className={styles.article}
        onScroll={(e: React.UIEvent) => getScrollOffset ? getScrollOffset((e.target as HTMLElement).scrollTop) : undefined}
        role="article"
    >
        {typeof title === "string" && <h4>{`${title}`}</h4>}
        {typeof text === "string" && <p>{`${text}`}</p>}
        {children}
    </article>;
};

export default Article;