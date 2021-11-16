import { useRef, useEffect } from "react";

export const useFocus = () => {
    // use the useRef hook to get access to the rendered input element
    // TypeScript can not automatically know what the element type will be, so we provide a actual
    // type <HtmlInputElement> to it.
    const ref = useRef<HTMLInputElement>(null);

    // we use the useEffect hook to trigger the focus on the input element.
    // The dependency array passed in is empty, -> it will be triggered only when component
    // using this hook will be mounted.
    useEffect(() => {
        ref.current?.focus();
    },[]);

    // note: do not assign to ref.current as it is a read-only attribute
    return ref;
}