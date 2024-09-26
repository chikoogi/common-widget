import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType } from "react";

export type ComponentProp<C extends ElementType> = {
  component?: C;
};

export type KeyWithComponent<C extends ElementType, Props> = keyof (ComponentProp<C> & Props);

export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

export type PolymorphicComponentProps<C extends ElementType, Props = object> = (ComponentProp<C> &
  Props) &
  Omit<ComponentPropsWithoutRef<C>, KeyWithComponent<C, Props>>;

export type PolymorphicComponentPropsWithRef<
  C extends ElementType,
  Props = object,
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };
