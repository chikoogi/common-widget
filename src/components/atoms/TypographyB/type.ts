import { PolymorphicComponentProps, PolymorphicComponentPropsWithRef } from "../../../polymorphic";
import type { ElementType, ReactNode } from "react";

export type Size =
  | "xxxxl"
  | "xxxl"
  | "xxl"
  | "xl"
  | "l"
  | "m"
  | "s"
  | "xs"
  | "xxs"
  | "xxxs"
  | "xxxxs";

export type FontWeight =
  | "Black"
  | "Extra Bold"
  | "Bold"
  | "Semi Bold"
  | "Medium"
  | "Regular"
  | "Light"
  | "Extra Light"
  | "Thin";

type __TypographyProps = {
  className?: string;
  children?: ReactNode;
  size?: Size;
  fontWeight?: FontWeight;
  underline?: boolean;
  italic?: boolean;
  color?: string;
};

export type _TypographyProps<C extends ElementType = "span"> = PolymorphicComponentProps<
  C,
  __TypographyProps
>;

/**
 * forwardRef를 하면서 Component의 props가 any로 바껴서 다음과 같은 component type 정의가 필요
 * - reference
 *   1. [post1](https://f-lab.kr/blog/polymorphism-with-type-safe)
 *   2. [post2](https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/)
 */

export type _TypographyComponent = <C extends ElementType = "span">(
  props: PolymorphicComponentPropsWithRef<C, __TypographyProps>
) => ReactNode | null;
