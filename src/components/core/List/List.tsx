import { useEffect, useRef } from "react";
import styles from "./List.module.scss";
import { Props } from "./types";

/**
 * A simple list component that wraps all of it's children in <li> elements.
 */
const List = ({ scrollOffset, getScrollOffset, children }: Props): JSX.Element => {
    const actualChildren = children && (children as React.ReactElement).props && (children as React.ReactElement).props.children || [];
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        // @ts-expect-error
        if (listRef.current && Number(scrollOffset) !== NaN && scrollOffset !== listRef.current.scrollTop) {
            listRef.current.scrollTo(0, scrollOffset!);
        };
    }, [scrollOffset]);

    return <ul
        ref={listRef}
        className={styles.list}
        onScroll={(e: React.UIEvent) => getScrollOffset ? getScrollOffset((e.target as HTMLElement).scrollTop) : undefined}
        role="list"
    >
        {actualChildren && actualChildren.map((el: JSX.Element, idx: number) => {
            return <li className={styles.listItem} key={`li-${el.props.children + idx}`} role="listItem">{el}</li>
        })}
    </ul>;
};

export default List;