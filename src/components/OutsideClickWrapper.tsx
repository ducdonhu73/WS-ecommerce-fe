import PropTypes from "prop-types";
import { useEffect, RefObject, useRef } from "react";

type Event = MouseEvent | TouchEvent;

interface Props {
  children?: JSX.Element | JSX.Element[];
  onClickOutside: () => void;
}
const useOnClickOutside = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

function OutsideClickWrapper(props: Props) {
  const squareBoxRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(squareBoxRef, props.onClickOutside);
  return <div ref={squareBoxRef}>{props.children}</div>;
}

OutsideClickWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OutsideClickWrapper;
